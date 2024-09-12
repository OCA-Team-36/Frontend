import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';

function LinearProgressWithLabel(props) {
    return (
        <Box sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', justifyContent: "center" }}>
                {props.icon}
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'flex-start', ml: props.marginLeft, width: '100%' }}>
                <Stack spacing={0.5} sx={{ width: '100%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', minWidth: 35 }}>
                        <Typography variant="body2" sx={{ color: '#000000', fontSize: 18, fontWeight: 'bold' }}>
                            {`${Math.round(props.value)}%`}
                        </Typography>
                        <Typography variant="body2" sx={{ color: props.fontColor, fontSize: 15, fontWeight: props.fontWeight, ml: 1 }}>
                            {props.title}
                        </Typography>
                    </Box>
                    <Box sx={{ width: '100%', mr: 1 }}>
                        <LinearProgress
                            variant="determinate"
                            color="secondary"
                            {...props}
                        />
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
}

LinearProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired,
    icon: PropTypes.node,
    title: PropTypes.string.isRequired,
    marginLeft: PropTypes.number,
    fontWeight: PropTypes.string,
    fontColor: PropTypes.string,
};

LinearProgressWithLabel.defaultProps = {
    marginLeft: 1,
    fontWeight: 'normal',
    fontColor: 'text.secondary'
};

export default LinearProgressWithLabel;