import Grid from '@mui/material/Grid2';
import HeaderTitle from '../components/HeaderTitle';
import HeaderImage from '../components/HeaderImage';
import MyCampaignCard from '../components/MyCampaignCard';
import MyReport from '../components/MyReport';
import { Masonry } from '@mui/lab';
import MyJourney from '../components/MyJourney';
import MySuccess from '../components/MySuccess';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router';

const people = "https://firebasestorage.googleapis.com/v0/b/mostgreen.appspot.com/o/People.png?alt=media&token=1e3eec67-2dae-4877-9141-3fa1f2cedb7a";
const title = "Customize Your Communication Services For Better Interaction";
const subtitle = "Choose products and create one complete package that fits your business needs.";

const Dashboard = () => {
    const navigate = useNavigate();

    const campaign = () => {
        navigate("/campaign")
    }
    return (
        <Grid container sx={{ pt: 7, pb: 5 }} >
            <Grid
                size={{ xs: 12, md: 8 }}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}
            >
                <HeaderTitle title={title} subtitle={subtitle} />
                <Box sx={{ pt: { xs: 4, md: 0 } }}>
                    <Button variant="contained" disableElevation sx={{ borderRadius: 2 }} onClick={campaign}>New Campaign</Button>
                </Box>
            </Grid>
            <Grid container size={{ xs: 12, md: 4 }} display="flex" justifyContent="center" alignItems="center">
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', pt: { xs: 4, md: 0 }, pb: { xs: 1, md: 0 } }}>
                    <HeaderImage image={people} />
                </Box>
            </Grid>
            <Grid container justifyContent="center" alignItems="center" size={12} >
                <Masonry columns={{ xs: 1, md: 2 }} spacing={0}>
                    <Grid size={6} sx={{ pt: { xs: 3 }, pr: { xs: 0, md: 1 }, pb: { xs: 1 } }}>
                        {/* my campaign card */}
                        <MyCampaignCard />
                    </Grid>
                    <Grid size={6} sx={{ pt: { xs: 1, md: 3 }, pl: { xs: 0, md: 1 }, pb: { xs: 1 } }}>
                        {/* my report */}
                        <MyReport />
                    </Grid>
                    <Grid size={6} sx={{ pt: { xs: 1 }, pr: { xs: 0, md: 1 }, pb: 1 }}>
                        {/* my success */}
                        <MySuccess />
                    </Grid>
                    <Grid size={6} sx={{ pt: { xs: 1 }, pl: { xs: 0, md: 1 }, pb: 1 }}>
                        {/* my journey */}
                        <MyJourney />
                    </Grid>
                </Masonry>
            </Grid>
        </Grid >
    );
};

export default Dashboard;