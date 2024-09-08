// import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router';

const logo = "https://firebasestorage.googleapis.com/v0/b/mostgreen.appspot.com/o/OCA%20Indonesia.png?alt=media&token=658c5134-b37d-4dce-bb22-e7d20758b2ca";

const TopAppBar = () => {
    const navigate = useNavigate();
    const onLogin = () => {
        navigate("/signin");
    }
    return (
        <AppBar
            position="fixed"
            elevation={2}
            sx={{
                zIndex: (theme) => theme.zIndex.drawer + 1,
                backgroundColor: (theme) => theme.palette.background.netral
            }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    px: 5,
                    py: 0.5,
                }}
            >
                <img src={logo} alt="logo" style={{ width: '150px', height: 'auto' }} />
                <Box>
                    <Button variant="contained" onClick={onLogin} sx={{ borderRadius: '10px' }}>Login</Button>
                </Box>
            </Box>
        </AppBar>
    );
};

// TopAppBar.propTypes = {

// };

export default TopAppBar;