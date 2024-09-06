import PropTypes from 'prop-types';
import { Paper } from '@mui/material';

const HalfImage = ({ illustration }) => {
    return (
        <Paper
            sx={{
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <img
                src={illustration}
                alt="illustration"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }}
            />
        </Paper>
    );
};

HalfImage.propTypes = {
    illustration: PropTypes.string.isRequired,
};

export default HalfImage;