import Grid from '@mui/material/Grid2';
// import PropTypes from 'prop-types';
import HeaderTitle from '../components/HeaderTitle';
import { Box, Button, InputAdornment, Stack, TextField } from '@mui/material';
import { Assignment } from '@mui/icons-material';
import { Search } from '@mui/icons-material';
import TableReport from '../components/TableReport';
import StepButton from '../components/StepButton';
import { useNavigate } from 'react-router';

const CampaignReport = () => {
    const navigate = useNavigate();

    const click1 = () => {
        navigate("/campaign/review-template")
    };

    return (
        <Grid container spacing={2} sx={{ pt: 7, pb: 5, width: '100%' }}>
            <Grid size={12}>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', pb: { xs: 1, md: 0 } }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', pr: 1 }}>
                            <Assignment sx={{ fontSize: '70px' }} />
                        </Box>
                        <HeaderTitle title="Report" subtitle="Update: 07 September 2024" mdWidth="100%" />
                    </Box>
                    <Stack spacing={1}>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                            <Button disableElevation variant="contained" size="small" sx={{ borderRadius: '10px', width: { xs: '100%', md: 'fit-content' } }}>Add Blast</Button>
                        </Box>
                        <TextField
                            variant="outlined"
                            fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Search />
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '10px',
                                },
                                width: '300px',
                            }}
                            size="small"
                        />
                    </Stack>
                </Box>
            </Grid>
            <Grid size={12}>
                <TableReport />
            </Grid>
            <Grid size={12} display="flex" justifyContent="flex-start" alignItems="center">
                <Box sx={{ pt: 1, width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                    <StepButton text1="Back" text2="Next" click1={click1} />
                </Box>
            </Grid>
        </Grid>
    );
};

CampaignReport.propTypes = {

};

export default CampaignReport;