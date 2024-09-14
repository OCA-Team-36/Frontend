import Grid from '@mui/material/Grid2';
import HeaderTitle from '../components/HeaderTitle';
import { Autocomplete, Box, FormControl, OutlinedInput, RadioGroup, Stack, TextField } from '@mui/material';
import InputLabelCustom from '../components/InputLabel';
import RadioImage from '../components/RadioImage';
import StepButton from '../components/StepButton';

const title = "New Campaign";
const subtitle = "Make your new champaign. Choose one!";
const mdWidth = "100%";
const top100Films = ['Member', 'Customer 123', 'Klien Agustus', 'Klien Maret'];
const emailLogo = "https://firebasestorage.googleapis.com/v0/b/mostgreen.appspot.com/o/logo%20email-.png?alt=media&token=8399760a-9001-4c8a-8ebb-3c24f08f775e";
const whatsappLogo = "https://firebasestorage.googleapis.com/v0/b/mostgreen.appspot.com/o/logo%20whatsapp%202--.png?alt=media&token=d784c475-9cf5-44ee-a22c-d3a8974c09b7";

const NewCampaign = () => {
    return (
        <Grid container spacing={2} sx={{ pt: 7, pb: 5, width: '100%' }}>
            <Grid size={12}>
                <Box>
                    <HeaderTitle title={title} subtitle={subtitle} mdWidth={mdWidth} />
                </Box>
            </Grid>
            <Grid size={12}>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'flex-start', md: 'center' }, gap: { xs: 1, md: 2 }, pt: { xs: 2, md: 1 } }}>
                    <InputLabelCustom purpose="campaign" text="Campaign Name" />
                    <OutlinedInput fullWidth id="campaign" placeholder="Group Name" size="small" sx={{ width: { xs: '100%', md: '50%' } }} />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'flex-start', md: 'center' }, gap: { xs: 1, md: 2 }, pt: { xs: 2, md: 1 } }}>
                    <InputLabelCustom purpose="contact" text="Group Contact" />
                    <Autocomplete
                        disablePortal
                        size="small"
                        options={top100Films}
                        sx={{ width: { xs: '100%', md: '50%' } }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1, md: 2 }, pt: { xs: 2, md: 1 } }}>
                    <InputLabelCustom purpose="chanel" text="Choose Chanel" />
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group"
                            defaultValue="email"
                            name="radio-buttons-group"
                        >
                            <Box sx={{ display: 'flex' }}>
                                <Stack direction="row" spacing={10}>
                                    <RadioImage value="email" label="Email" source={emailLogo} alternative="email logo" />
                                    <RadioImage value="whatsapp" label="whatsapp" source={whatsappLogo} alternative="whatsapp logo" />
                                </Stack>
                            </Box>
                        </RadioGroup>
                    </FormControl>
                </Box>
            </Grid>
            <Grid size={12} display="flex" justifyContent="flex-end" alignItems="flex-end">
                <Box sx={{ pt: 5, pr: { xs: 0, md: 3 } }}>
                    <StepButton text1="Back" text2="Next" />
                </Box>
            </Grid>
        </Grid>
    );
};

export default NewCampaign;