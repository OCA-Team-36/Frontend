// import PropTypes from 'prop-types';
import { Box, FormControl, FormControlLabel, Radio, RadioGroup, Stack } from '@mui/material';
import Grid from '@mui/material/Grid2';
import HeaderTitle from '../components/HeaderTitle';
import QuillEditor from '../components/QuilEditor/QuilEditor';
import StepButton from '../components/StepButton';
import { useNavigate } from 'react-router';
import EmailBroadcastDialog from './EmailBroadcasrDialog';
import { useState } from 'react';

const title = "New Campaign";
const subtitle = "Make your new champaign. Choose one!";
const title2 = "Email";
const subtitle2 = "Choose template !";

const CreateTemplate = () => {
    const navigate = useNavigate();
    const beforeButton = () => {
        navigate('/campaign')
    };

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        navigate('/review-template');
    };

    return (
        <Grid container spacing={2} sx={{ pt: 7, pb: 5, width: '100%' }}>
            <Grid size={12}>
                <Stack spacing={3}>
                    <HeaderTitle title={title} subtitle={subtitle} />
                    <HeaderTitle title={title2} subtitle={subtitle2} />
                </Stack>
                <FormControl sx={{ pt: 1 }}>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="manually" control={<Radio />} label="Manually" />
                        <FormControlLabel value="automatically" disabled control={<Radio />} label="Automatically" />
                    </RadioGroup>
                </FormControl>
                <Box sx={{ py: 2, width: { xs: '100%', md: '90%' } }}>
                    <QuillEditor />
                </Box>
            </Grid>
            <Grid size={12} display="flex" justifyContent="flex-start" alignItems="center">
                <Box sx={{ pt: 3, width: { xs: '100%', md: '90%' }, display: 'flex', justifyContent: 'flex-end' }}>
                    <StepButton text1="Back" text2="Next" click1={beforeButton} click2={handleClickOpen} />
                </Box>
            </Grid>
            {/* email broadcast */}
            <Grid size={12} display="flex" justifyContent="flex-start" alignItems="center">
                <EmailBroadcastDialog open={open} handleClose={handleClose} />
            </Grid>
        </Grid >
    );
};

// CreateTemplate.propTypes = {

// };

export default CreateTemplate;