import Grid from '@mui/material/Grid2';
// import PropTypes from 'prop-types';
import HeaderTitle from '../components/HeaderTitle';
import { Box, Button, InputAdornment, Stack, TextField } from '@mui/material';
import { Assignment } from '@mui/icons-material';
import { Search } from '@mui/icons-material';

const CampaignReport = () => {
    return (
        <Grid container spacing={2} sx={{ pt: 7, pb: 5, width: '100%' }}>
            <Grid size={12}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', pr: 1 }}>
                            <Assignment sx={{ fontSize: '70px' }} />
                        </Box>
                        <HeaderTitle title="Report" subtitle="Update: 07 September 2024" mdWidth="100%" />
                    </Box>
                    <Stack spacing={1}>
                        <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                            <Button disableElevation variant="contained" size="small" sx={{ borderRadius: '10px', width: 'fit-content' }}>Add Blast</Button>
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
        </Grid>
    );
};

CampaignReport.propTypes = {

};

export default CampaignReport;