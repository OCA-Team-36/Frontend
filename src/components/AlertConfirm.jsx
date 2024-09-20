import PropTypes from 'prop-types';
import { Box, Button, Dialog, DialogContent, Stack, Typography } from '@mui/material';

const AlertConfirm = ({yesClick, open, handleClose}) => {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            PaperProps={{ sx: { height: { xs: '25%', md: '30%' }, width: { xs: '80%', md: '30%' }, borderRadius: '15px' } }}
        >
            <DialogContent>
                <Box sx={{ display: 'flex', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    {/* <Box sx={{ display: 'flex', width: '100%', justifyContent: 'flex-end', alignItems: 'center'}}>
                                <CloseIcon />
                            </Box> */}
                    <Stack spacing={{ xs: 5, md: 6 }} >
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Are You Sure ?</Typography>
                        <Stack direction="row" spacing={1}>
                            <Button variant="contained" size="small" disableElevation onClick={yesClick} sx={{ borderRadius: '10px' }}>Yes</Button>
                            <Button variant="contained" size="small" disableElevation onClick={handleClose} sx={{ borderRadius: '10px' }}>No</Button>
                        </Stack>
                    </Stack>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

AlertConfirm.propTypes = {
    yesClick: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
};

export default AlertConfirm;