import { Box, Button, Stack, Typography } from '@mui/material';

const HeaderTitle = () => {
    return (
        <>
            <Stack spacing={1}>
                <Typography sx={{ typography: { xs: 'h5', md: 'h4' }, fontWeight: { xs: '600', md: '600' }, }}>
                    Customize Your Communication <br />
                    Services for Better Interaction
                </Typography>
                <Typography variant="body1">
                    Choose products and create one complete package <br />
                    that fits your business needs.
                </Typography>
            </Stack>
            <Box sx={{ pt: { xs: 4, md: 0 } }}>
                <Button variant="contained" disableElevation sx={{ borderRadius: 2 }}>New Campaign</Button>
            </Box>
        </>
    );
};

export default HeaderTitle;