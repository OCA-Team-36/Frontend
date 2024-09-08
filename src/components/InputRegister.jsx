// import PropTypes from 'prop-types';
import { Button, InputLabel, OutlinedInput, Stack } from '@mui/material';
import InputPassword from './InputPassword';
import QuestionAuth from './QuestionAuth';

const InputRegister = () => {
    return (
        <>
            <Stack spacing={1}>
                <Stack spacing={1}>
                    <InputLabel>Name</InputLabel>
                    <OutlinedInput size="small" />
                </Stack>
                <Stack spacing={1}>
                    <InputLabel>Email</InputLabel>
                    <OutlinedInput size="small" />
                </Stack>
                <Stack spacing={1}>
                    <InputLabel>Username</InputLabel>
                    <OutlinedInput size="small" />
                </Stack>
                <Stack spacing={1}>
                    <InputPassword />
                </Stack>
            </Stack>
            <Stack spacing={2}>
                <Button variant="contained" sx={{ borderRadius: '5px' }}>Register</Button>
                <QuestionAuth question="Already have an acoount?" link="/signin" text="Login" />
            </Stack>
        </>
    );
};

// InputRegister.propTypes = {

// };

export default InputRegister;