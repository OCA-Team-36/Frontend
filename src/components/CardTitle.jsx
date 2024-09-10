import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const CardTitle = ({ title }) => {
    return (
        <Typography sx={{ color: '#000000', fontSize: 18, fontWeight: 600 }}>
            {title}
        </Typography>
    );
};

CardTitle.propTypes = {
    title: PropTypes.string.isRequired,
};

export default CardTitle;