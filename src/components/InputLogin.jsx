import { Box, Button, Checkbox, FormControlLabel, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import QuestionAuth from './QuestionAuth';

const InputLogin = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };
    return (
        <>
            <Stack spacing={2}>
                <Stack spacing={1}>
                    <InputLabel>Username</InputLabel>
                    <OutlinedInput size="small" />
                </Stack>
                <Stack spacing={1}>
                    <InputLabel>Password</InputLabel>
                    <OutlinedInput
                        size="small"
                        id="standard-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    onMouseUp={handleMouseUpPassword}
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
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