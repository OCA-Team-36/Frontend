import { Box, Button, Stack, Typography } from '@mui/material';

const HeaderTitle = () => {
    return (
        <>
            <Stack spacing={1}>
                <Typography variant="h4" sx={{ fontWeight: '600' }}>
                    Customize Your Communication <br />
                    Services for Better Interaction
                </Typography>
                <Typography variant="body1">
                    Choose products and create one complete package <br />
                    that fits your business needs.
                </Typography>
            </Stack>
            <Box>
                <Button variant="contained" disableElevation sx={{ borderRadius: 2 }}>New Campaign</Button>
            </Box>
        </>
    );
};

export default HeaderTitle;