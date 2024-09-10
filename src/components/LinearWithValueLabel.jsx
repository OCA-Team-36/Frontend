import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import LinearProgressWithLabel from './LinearProgressWithLabel';

function LinearWithValueLabel() {
    const [progress, setProgress] = useState(10);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <Box sx={{ width: '100%' }}>
            <LinearProgressWithLabel value={progress} />
        </Box>
    );
}

export default LinearWithValueLabel;