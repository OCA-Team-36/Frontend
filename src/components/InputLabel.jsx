import PropTypes from 'prop-types';
import { InputLabel } from '@mui/material';

const InputLabelCustom = ({ purpose, text }) => {
    return (
        <InputLabel htmlFor={purpose} sx={{ minWidth: '150px', fontWeight: 'bold', color: '#000000' }}>
            { text }
        </InputLabel >
    );
};

InputLabelCustom.propTypes = {
    purpose: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default InputLabelCustom;