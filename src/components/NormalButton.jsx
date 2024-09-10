import PropTypes from 'prop-types';
import { Button } from '@mui/material';

const NormalButton = ({ text }) => {
    return (
        <Button variant="contained"  disableElevation sx={{ borderRadius: '5px' }}>
            {text}
        </Button>
    );
};

NormalButton.propTypes = {
    text: PropTypes.string.isRequired,
};

export default NormalButton;