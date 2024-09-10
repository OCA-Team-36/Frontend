// import PropTypes from 'prop-types';

import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import CardTitle from "./CardTitle";
import LinearProgressWithLabel from "./LinearProgressWithLabel";

const MyJourney = () => {
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
                                    value={80}
                                    title="To Complete"
                                    marginLeft={0}
                                    fontWeight="bold"
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