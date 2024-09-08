import PropTypes from 'prop-types';
import { Button } from '@mui/material';

const SmallButton = ({ text }) => {
    return (
        <Button variant="contained" size="small" fullWidth sx={{ borderRadius: '5px' }}>
            {text}
        </Button>

    );
};

SmallButton.propTypes = {
    text: PropTypes.string.isRequired,
};

export default SmallButton;