import PropTypes from 'prop-types';
import { Button, Stack } from '@mui/material';

const StepButton = ({ text1, text2, click1, click2 }) => {
    return (
        <Stack direction="row" spacing={1}>
            <Button variant="contained" disableElevation sx={{ borderRadius: '10px', px: 3 }} onClick={click1}>{text1}</Button>
            <Button variant="contained" disableElevation sx={{ borderRadius: '10px', px: 3 }} onClick={click2}>{text2}</Button>
        </Stack>
    );
};

StepButton.propTypes = {
    text1:  PropTypes.string.isRequired,
    text2: PropTypes.string.isRequired,
    click1: PropTypes.func,
    click2: PropTypes.func,
};

export default StepButton;