import { Box, Button, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CheckBox } from '@mui/icons-material';

const people = "https://firebasestorage.googleapis.com/v0/b/mostgreen.appspot.com/o/People.png?alt=media&token=1e3eec67-2dae-4877-9141-3fa1f2cedb7a";
const noresult = "https://firebasestorage.googleapis.com/v0/b/mostgreen.appspot.com/o/no-result.png?alt=media&token=5609aab0-7c65-472d-9573-3ba8ec34c2d7";

const checked = [
    {
        id: 0,
        text: "250 Email broadcast sent"
    },
    {
        id: 1,
        text: "125 whatsapp messages sent"
    },
    {
        id: 2,
        text: "125 emails opened"
    },
    {
        id: 3,
        text: "135 whatsapp messages opened"
    },
]
const Dashboard = () => {
    return (
        <Grid container sx={{ pt: 7, pb: 5 }}>
            <Grid
                size={8}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}
            >
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
                    <Button variant="contained" sx={{ borderRadius: 2 }}>New Campaign</Button>
                </Box>
            </Grid>
            <Grid size={4} display="flex" justifyContent="center" alignItems="center">
                <img src={people} alt="people" style={{ width: '250px', height: 'auto' }} />
            </Grid>
            <Grid size={6} sx={{ py: 3 }}>
                {/* my campaign card */}
                <Card elevation={2} sx={{ border: '1px solid', borderColor: 'secondary.main', borderRadius: 2 }}>
                    <Grid container>
                        <Grid size={7}>
                            <CardContent>
                                <Typography sx={{ color: '#000000', fontSize: 18, fontWeight: 600 }}>
                                    My Campaign
                                </Typography>
                                <Stack spacing={0.5} sx={{ py: 2 }}>
                                    {checked.map((c, index) => (
                                        <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <CheckBox disabled checked size="small" color="secondary" />
                                            <Typography variant="body2" sx={{ color: 'text.secondary', ml: 1 }}>
                                                {c.text}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Stack>
                                <Button variant="contained" size="small" fullWidth sx={{ borderRadius: '5px' }}>See My Report</Button>
                            </CardContent>
                        </Grid>
                        <Grid size={5} display="flex" justifyContent="center" alignItems="center">
                            <img src={noresult} alt="no result" style={{ width: '200px', height: 'auto' }} />
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
            <Grid size={6}>

            </Grid>
        </Grid>
    );
};

export default Dashboard;