import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import CardTitle from "./CardTitle";
import LinearProgressWithLabel from "./LinearProgressWithLabel";
import { useEffect, useState } from "react";

const MyJourney = () => {
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
        <div>
            <Card sx={{ border: '1px solid', borderColor: 'secondary.main', borderRadius: 2 }}>
                <CardContent>
                    <CardTitle title="My Journey" />
                    <Box sx={{ py: 4 }}>
                        <Stack spacing={1.4}>
                            <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: "15px" }}>
                                Your Progress
                            </Typography>
                            <Box sx={{ width: '100%' }}>
                                <LinearProgressWithLabel
                                    value={progress}
                                    title="To Complete"
                                    marginLeft={0}
                                    fontWeight="bold"
                                    fontColor="#000000"
                                />
                            </Box>
                        </Stack>
                    </Box>
                </CardContent>
            </Card>
        </div>
    );
};

// MyJourney.propTypes = {

// };

export default MyJourney;