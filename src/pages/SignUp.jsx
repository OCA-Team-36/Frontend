import { Stack } from '@mui/material';
import Grid from '@mui/material/Grid2';
import TitleAuth from '../components/TitleAuth';
import HalfImage from '../components/HalfImage';
import InputRegister from '../components/InputRegister';

const illustration = "https://firebasestorage.googleapis.com/v0/b/mostgreen.appspot.com/o/signin.jpg?alt=media&token=083affaa-5a32-48b3-b944-c77c5a44111b";
const logo = "https://firebasestorage.googleapis.com/v0/b/mostgreen.appspot.com/o/OCA%20Indonesia.png?alt=media&token=658c5134-b37d-4dce-bb22-e7d20758b2ca";

const SignUp = () => {
    return (
        <Grid
            container
            spacing={0}
            sx={{ height: '100vh' }}
            display="flex"
            justifyContent="center"
            alignItems="center"
        >

            {/* left content */}
            <Grid
                container
                size={{ sx: 12, md: 12, lg: 6 }}
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Grid
                    size={{ xs: 12, md: 8 }}
                    sx={{ py: { xs: 8, md: 0 } }}
                >
                    <Stack spacing={2}>
                        <TitleAuth logo={logo} title="Sign Up" subtitle="Sign up to create your account" />
                        <InputRegister />
                    </Stack>
                </Grid>
            </Grid>

            {/* right content */}
            <Grid
                size={{ sx: 12, md: 12, lg: 6 }}
                sx={{
                    display: { xs: 'none', md: 'none', lg: 'flex' },
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    height: '100%'
                }}
            >
                <HalfImage illustration={illustration} />
            </Grid>
        </Grid>
    );
};

export default SignUp;