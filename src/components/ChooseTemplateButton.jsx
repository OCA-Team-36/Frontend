import PropTypes from 'prop-types';
import { Paper } from '@mui/material';

const ChooseTemplateButton = ({ text }) => {
    return (
        <Paper
            elevation={0}
            onClick={() => alert('Paper clicked!')}
            sx={{
                backgroundColor: '#CBD0DC',
                color: '#000000',
                px: { xs: 1, md: 2 },
                py: { xs: 1.5, md: 2 },
                fontSize: '13px',
                cursor: 'pointer',
                '&:hover': {
                    backgroundColor: '#B0B5C3',
                },
            }}>
            {text}
        </Paper>
    );
};

ChooseTemplateButton.propTypes = {
    text: PropTypes.string.isRequired,
};

export default ChooseTemplateButton;