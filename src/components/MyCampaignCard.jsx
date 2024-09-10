// import PropTypes from 'prop-types';
import { Box, Button, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CheckBox } from '@mui/icons-material';
import CardTitle from '../components/CardTitle';

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
];

const MyCampaignCard = () => {
    return (
        <Card elevation={2} sx={{ border: '1px solid', borderColor: 'secondary.main', borderRadius: 2 }}>
            <Grid container>
                <Grid size={7}>
                    <CardContent>
                        <CardTitle title="My Campaign" />
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
                        <Button variant="contained" size="small" disableElevation fullWidth sx={{ borderRadius: '5px' }}>See My Report</Button>
                    </CardContent>
                </Grid>
                <Grid size={5} display="flex" justifyContent="center" alignItems="center">
                    <img src={noresult} alt="no result" style={{ width: '200px', height: 'auto' }} />
                </Grid>
            </Grid>
        </Card>
    );
};

// MyCampaignCard.propTypes = {

// };

export default MyCampaignCard;