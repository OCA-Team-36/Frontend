import PropTypes from 'prop-types';
import { Button, Stack } from '@mui/material';

const StepButton = ({ text1, text2 }) => {
    return (
        <Stack direction="row" spacing={1}>
            <Button variant="contained" disableElevation sx={{ borderRadius: '10px', px: 3 }}>{text1}</Button>
            <Button variant="contained" disableElevation sx={{ borderRadius: '10px', px: 3 }}>{text2}</Button>
        </Stack>
    );
};

StepButton.propTypes = {
    text1:  PropTypes.string.isRequired,
    text2: PropTypes.string.isRequired,
};

export default StepButton;