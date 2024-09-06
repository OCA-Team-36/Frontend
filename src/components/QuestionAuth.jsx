import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const QuestionAuth = ({ question, link, text }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Typography>
                {question} <Link to={link} style={{ textDecoration: 'none' }}>{text}</Link>
            </Typography>
        </Box>
    );
};

QuestionAuth.propTypes = {
    question: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default QuestionAuth;