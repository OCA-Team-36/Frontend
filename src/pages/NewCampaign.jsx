import Grid from '@mui/material/Grid2';
import HeaderTitle from '../components/HeaderTitle';
import { Box, InputLabel, OutlinedInput } from '@mui/material';

const title = "New Campaign";
const subtitle = "Make your new champaign. Choose one!";
const mdWidth = "100%";

const NewCampaign = () => {
    return (
        <Grid container sx={{ pt: 7, pb: 5, width: '100%' }}>
            <Grid size={12}>
                <Box>
                    <HeaderTitle title={title} subtitle={subtitle} mdWidth={mdWidth} />
                </Box>
            </Grid>
            <Grid size={12}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <InputLabel htmlFor="username" sx={{ minWidth: '150px' }}>
                        Campaign Name
                    </InputLabel>
                    <OutlinedInput fullWidth id="username" placeholder="Group Name" size="small" sx={{ width: '50%' }} />
                </Box>
            </Grid>
        </Grid>
    );
};

export default NewCampaign;