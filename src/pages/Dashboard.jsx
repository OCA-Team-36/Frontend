import Grid from '@mui/material/Grid2';
import HeaderTitle from '../components/HeaderTitle';
import HeaderImage from '../components/HeaderImage';
import MyCampaignCard from '../components/MyCampaignCard';
import MyReport from '../components/MyReport';
import { Masonry } from '@mui/lab';
import MyJourney from '../components/MyJourney';
import MySuccess from '../components/MySuccess';
import { Box } from '@mui/material';

const people = "https://firebasestorage.googleapis.com/v0/b/mostgreen.appspot.com/o/People.png?alt=media&token=1e3eec67-2dae-4877-9141-3fa1f2cedb7a";

const Dashboard = () => {
    return (
        <Grid container sx={{ pt: 7, pb: 5 }} >
            <Grid
                size={{ sx: 12, md: 8 }}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}
            >
                <HeaderTitle />
            </Grid>
            <Grid container size={{ sx: 12, md: 4 }} display="flex" justifyContent="center" alignItems="center">
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <HeaderImage image={people} />
                </Box>
            </Grid>
            <Grid container display="flex" justifyContent="center" alignItems="center" size={12}>
                <Masonry columns={{ xs: 1, md: 2 }} spacing={2}>
                    <Grid size={6} sx={{ pt: 3 }}>
                        {/* my campaign card */}
                        <MyCampaignCard />
                    </Grid>
                    <Grid size={6} sx={{ pt: { xs: 0, md: 3 } }}>
                        {/* my report */}
                        <MyReport />
                    </Grid>
                    <Grid size={6}>
                        {/* my success */}
                        <MySuccess />
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