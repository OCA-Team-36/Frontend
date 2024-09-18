import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { Box, Button, Dialog, DialogContent, DialogTitle, Slide } from '@mui/material';
import BroadcastForm from '../components/BroadcastForm';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const EmailBroadcastDialog = ({ open, handleClose }) => {
    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            PaperProps={{ sx: { borderRadius: '15px' } }}
        >
            <Box sx={{ p: 2 }}>
                <DialogTitle sx={{ fontWeight: 'bold' }}>{"Add Email Broadcast"}</DialogTitle>
                <DialogContent>
                    <BroadcastForm /> 
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', pt: 1 }}>
                        <Button variant="contained" size="small" onClick={handleClose} sx={{ borderRadius: '10px' }}>
                            Save
                        </Button>
                    </Box>
                </DialogContent>
            </Box>
        </Dialog>
    );
};

EmailBroadcastDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
};

export default EmailBroadcastDialog;