import { useState, useEffect } from 'react';
import { Card, CardContent, Box, Stack } from '@mui/material';
import CardTitle from '../components/CardTitle';
import LinearProgressWithLabel from '../components/LinearProgressWithLabel';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import DraftsIcon from '@mui/icons-material/Drafts';
import EmailIcon from '@mui/icons-material/Email';
import { useTheme } from '@emotion/react';

const MySuccess = () => {
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
    );
};

export default MySuccess;