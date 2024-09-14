import PropTypes from 'prop-types';
import { Box, FormControlLabel, Radio } from '@mui/material';

const RadioImage = ({ value, label, source, alternative }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <FormControlLabel value={value} control={<Radio />} label={label} />
            <img src={source} alt={alternative} style={{ width: '100px' }} />
        </Box>
    );
};

RadioImage.propTypes = {
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    alternative: PropTypes.string.isRequired,
};

export default RadioImage;