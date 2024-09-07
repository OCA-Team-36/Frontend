// import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import { Button } from '@mui/material';

const logo = "https://firebasestorage.googleapis.com/v0/b/mostgreen.appspot.com/o/OCA%20Indonesia.png?alt=media&token=658c5134-b37d-4dce-bb22-e7d20758b2ca";

const TopAppBar = () => {
    return (
        <AppBar
            position="fixed"
            sx={{
                zIndex: (theme) => theme.zIndex.drawer + 1,
                backgroundColor: (theme) => theme.palette.background.default,
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
                    <Button variant="contained" small>Login</Button>
                </Box>
            </Box>
        </AppBar>
    );
};

// TopAppBar.propTypes = {

// };

export default TopAppBar;