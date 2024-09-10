import Grid from '@mui/material/Grid2';
import { Card, CardContent } from '@mui/material';
import CardTitle from '../components/CardTitle';
// import PropTypes from 'prop-types';
import { Button } from '@mui/material';

const noresult = "https://firebasestorage.googleapis.com/v0/b/mostgreen.appspot.com/o/no-result.png?alt=media&token=5609aab0-7c65-472d-9573-3ba8ec34c2d7";

const MyReport = () => {
    return (
        <Card elevation={2} sx={{ border: '1px solid', borderColor: 'secondary.main', borderRadius: 2 }}>
            <CardContent>
                <CardTitle title="My Report" />
                <Grid container justifyContent="center" alignItems="center" sx={{ py: 3 }}>
                    <img src={noresult} alt="no result" style={{ width: '200px', height: 'auto' }} />
                </Grid>
                <Grid container size={5}>
                    <Button variant="contained" size="small" disableElevation fullWidth sx={{ borderRadius: '5px' }}>More Report</Button>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default MyReport;