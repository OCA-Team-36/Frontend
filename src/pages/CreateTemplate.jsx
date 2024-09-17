// import PropTypes from 'prop-types';
import { Box, Button, Dialog, DialogContent, DialogTitle, FormControl, FormControlLabel, Paper, Radio, RadioGroup, Slide, Stack, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import HeaderTitle from '../components/HeaderTitle';
import QuillEditor from '../components/QuilEditor/QuilEditor';
import StepButton from '../components/StepButton';
import { useNavigate } from 'react-router';
import { forwardRef, useState } from 'react';

const title = "New Campaign";
const subtitle = "Make your new champaign. Choose one!";
const title2 = "Email";
const subtitle2 = "Choose template !";

// temporary
const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

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
        setOpen(false);
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
                    <StepButton text1="Back" text2="Next" click1={beforeButton} />
                </Box>
            </Grid>
            <Grid size={12} display="flex" justifyContent="flex-start" alignItems="center">
                <Box sx={{ pt: 3, width: { xs: '100%', md: '90%' }, display: 'flex', justifyContent: 'flex-end' }}>
                    <Button variant="outlined" onClick={handleClickOpen}>
                        Slide in alert dialog
                    </Button>
                    <Dialog
                        open={open}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={handleClose}
                        aria-describedby="alert-dialog-slide-description"
                        PaperProps={{
                            sx: {
                                borderRadius: '15px',
                            },
                        }}
                    >
                        <Box sx={{ p: 2 }}>
                            <DialogTitle sx={{ fontWeight: 'bold' }}>{"Add Email Broadcast"}</DialogTitle>
                            <DialogContent>
                                <Stack spacing={4} sx={{ py: 3 }}>
                                    <Stack direction="row" spacing={4}>
                                        <TextField
                                            focused
                                            margin="dense"
                                            id="broadcast-name"
                                            name="broadcast-name"
                                            label="Broadcast Name"
                                            type="text"
                                            fullWidth
                                            variant="standard"
                                        />
                                        <TextField
                                            focused
                                            margin="dense"
                                            id="subject"
                                            name="subject"
                                            label="Subject"
                                            type="text"
                                            fullWidth
                                            variant="standard"
                                        />
                                    </Stack>
                                    <Stack direction="row" spacing={4}>
                                        <TextField
                                            focused
                                            margin="dense"
                                            id="sender-email"
                                            name="sender-email"
                                            label="Sender Email"
                                            type="email"
                                            fullWidth
                                            variant="standard"
                                        />
                                        <TextField
                                            focused
                                            margin="dense"
                                            id="sender name"
                                            name="sender name"
                                            label="Sender Name"
                                            type="text"
                                            fullWidth
                                            variant="standard"
                                        />
                                    </Stack>
                                    <Stack spacing={1.5}>
                                        <Typography sx={{ fontSize: '13px' }}>Choose Template</Typography>
                                        <Paper elevation={0} sx={{ backgroundColor: '#CBD0DC', color: '#000000', px: 2, py: 2, fontSize: '13px' }}>Lorem Ipsum</Paper>
                                        <Paper elevation={0} sx={{ backgroundColor: '#CBD0DC', color: '#000000', px: 2, py: 2, fontSize: '13px' }}>Lorem Ipsum</Paper>
                                    </Stack>
                                </Stack>
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', pt: 2 }}>
                                    <Button variant="contained" size="small" onClick={handleClose} sx={{ borderRadius: '10px' }}>Save</Button>
                                </Box>
                            </DialogContent>
                        </Box>
                    </Dialog>
                </Box>
            </Grid>
        </Grid >
    );
};

// CreateTemplate.propTypes = {

// };

export default CreateTemplate;