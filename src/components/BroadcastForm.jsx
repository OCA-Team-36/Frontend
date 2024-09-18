import { Stack, TextField, Typography } from '@mui/material';
import ChooseTemplateButton from './ChooseTemplateButton'; 

const BroadcastForm = () => {
    return (
        <Stack spacing={{ xs: 2, md: 4 }} sx={{ py: { xs: 1, md: 3 } }}>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2, md: 4 }}>
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
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2, md: 4 }}>
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
                    id="sender-name"
                    name="sender-name"
                    label="Sender Name"
                    type="text"
                    fullWidth
                    variant="standard"
                />
            </Stack>
            <Stack spacing={1.5} sx={{ py: 1 }}>
                <Typography sx={{ fontSize: '13px' }}>Choose Template</Typography>
                <ChooseTemplateButton text="Lorem ipsum" />
                <ChooseTemplateButton text="Lorem ipsum" />
            </Stack>
        </Stack>
    );
};

export default BroadcastForm;
