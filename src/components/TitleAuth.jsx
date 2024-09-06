import PropTypes from 'prop-types';
import { Stack, Typography } from '@mui/material';

const TitleAuth = ({ logo, title, subtitle }) => {
    return (
        <>
            <img src={logo} alt="logo" style={{ width: '150px', height: 'auto' }} />
            <Stack spacing={2}>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{title}</Typography>
                <Typography variant="body1">
                    Welcome to OCA! <br />
                    {subtitle}
                </Typography>
            </Stack>
        </>
    );
};

TitleAuth.propTypes = {
    logo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
};

export default TitleAuth;