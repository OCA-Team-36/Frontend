import PropTypes from 'prop-types';
import { Box, Stack, Typography } from '@mui/material';

const HeaderTitle = ({ title, subtitle, mdWidth }) => {
    return (
        <>
            <Stack spacing={1}>
                <Box width={{ xs: '100%', md: '80%' }}>
                    <Typography sx={{ typography: { xs: 'h5', md: 'h4' }, fontWeight: { xs: '600', md: '600' }, }}>
                        {title}
                    </Typography>
                </Box>
                <Box width={{ xs: '100%', md: mdWidth }}>
                    <Typography variant="body1">
                        {subtitle}
                    </Typography>
                </Box>
            </Stack>
        </>
    );
};

HeaderTitle.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    mdWidth: PropTypes.string,
};

HeaderTitle.defaultProps = {
    mdWidth: '60%',
};

export default HeaderTitle;