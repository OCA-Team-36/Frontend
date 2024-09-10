import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid2';
import HeaderTitle from '../components/HeaderTitle';
import HeaderImage from '../components/HeaderImage';
import MyCampaignCard from '../components/MyCampaignCard';
import MyReport from '../components/MyReport';
import { Masonry } from '@mui/lab';
import { Card, CardContent, Box, Stack } from '@mui/material';
import CardTitle from '../components/CardTitle';
import LinearProgressWithLabel from '../components/LinearProgressWithLabel';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import DraftsIcon from '@mui/icons-material/Drafts';
import EmailIcon from '@mui/icons-material/Email';
import { useTheme } from '@emotion/react';
import MyJourney from '../components/MyJourney';


const people = "https://firebasestorage.googleapis.com/v0/b/mostgreen.appspot.com/o/People.png?alt=media&token=1e3eec67-2dae-4877-9141-3fa1f2cedb7a";

const Dashboard = () => {
    const theme = useTheme();
    const [progress, setProgress] = useState(10);
    const successData = [
        {
            id: 0,
            title: "Klik Link",
            icon: <AdsClickIcon sx={{ fontSize: 40, color: theme.palette.grey.medium }} />,
            value: 50
        },
        {
            id: 1,
            title: "Opened",
            icon: <DraftsIcon sx={{ fontSize: 40, color: theme.palette.grey.light }} />,
            value: 60
        },
        {
            id: 2,
            title: "Not Opened",
            icon: <EmailIcon sx={{ fontSize: 40, color: theme.palette.grey.bold }} />,
            value: 70
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);
    return (
        <Grid container sx={{ pt: 7, pb: 5 }}>
            <Grid
                size={8}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}
            >
                <HeaderTitle />
            </Grid>
            <Grid size={4} display="flex" justifyContent="center" alignItems="center">
                <HeaderImage image={people} />
            </Grid>
            <Grid container spacing={2} size={12}>
                <Masonry columns={2} spacing={2}>
                    <Grid size={6} sx={{ pt: 3 }}>
                        {/* my campaign card */}
                        <MyCampaignCard />
                    </Grid>
                    <Grid size={6} sx={{ pt: 3 }}>
                        {/* my report */}
                        <MyReport />
                    </Grid>
                    <Grid size={6}>
                        {/* my report */}
                        <Card elevation={2} sx={{ border: '1px solid', borderColor: 'secondary.main', borderRadius: 2 }}>
                            <CardContent>
                                <CardTitle title="My Success" />
                                <Stack spacing={2} sx={{ pt: 2 }}>
                                    {successData.map((s, index) => (
                                        <Box key={s.id} sx={{ width: '100%' }}>
                                            <LinearProgressWithLabel
                                                index={index}
                                                value={progress}
                                                title={s.title}
                                                icon={s.icon}
                                            />
                                        </Box>
                                    ))}
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid size={6}>
                        {/* my journey */}
                        <MyJourney />
                    </Grid>
                </Masonry>
            </Grid>
        </Grid>
    );
};

export default Dashboard;