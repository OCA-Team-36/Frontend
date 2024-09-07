import { Box, Button, Checkbox, FormControlLabel, InputLabel, OutlinedInput, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import QuestionAuth from './QuestionAuth';
import InputPassword from './InputPassword';

const InputLogin = () => {
    return (
        <>
            <Stack spacing={2}>
                <Stack spacing={1}>
                    <InputLabel>Username</InputLabel>
                    <OutlinedInput size="small" />
                </Stack>
                <Stack spacing={1}>
                    <InputPassword />
                </Stack>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    <FormControlLabel control={<Checkbox />} label="Remember me" />
                    <Typography variant="body2" sx={{ fontStyle: 'italic' }}><Link to="#" style={{ textDecoration: 'none' }}>Forget Password</Link></Typography>
                </Box>
            </Stack>
            <Stack spacing={2}>
                <Button variant="contained">Login</Button>
                <QuestionAuth question="Don’t have an acoount?" link="/signup" text="Register" />
            </Stack>
        </>

    );
};

export default InputLogin;