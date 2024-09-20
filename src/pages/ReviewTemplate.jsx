import { Box, Stack, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import HeaderTitle from '../components/HeaderTitle';
import StepButton from '../components/StepButton';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import AlertConfirm from '../components/AlertConfirm';
// import CloseIcon from '@mui/icons-material/Close';

const title = "New Campaign";
const subtitle = "Make your new Campaign. Choose one!";
const defaultValue = "📢 Promo Spesial Ramadan dari [Nama Bisnis Anda]! 🌙\n\nAssalamu'alaikum, Sahabat [Nama Pelanggan atau Target Audiens]! 🙌 \nDi bulan penuh berkah ini, [Nama Bisnis Anda] menghadirkan Promo Spesial Ramadan untuk membuat momen Ramadan Anda semakin istimewa! 🕌✨ \n\n🎁 Diskon hingga 50% untuk semua produk [atau nama produk spesifik]! \n📅 Periode Promo: [Tanggal Mulai] - [Tanggal Berakhir] \n📦 Free Ongkir untuk pembelian minimal [Jumlah]! \n\nNikmati: \n✅ Harga spesial hanya di bulan Ramadan \n✅ Produk berkualitas yang cocok untuk menemani ibadah dan kebersamaan Anda \n✅ Pengiriman cepat dan aman ke seluruh Indonesia Segera manfaatkan promo ini sebelum kehabisan! \n\nPesan sekarang melalui: \n🌐 Website: [Alamat Website] \n📲 WhatsApp: [Nomor WhatsApp] \n🏬 Kunjungi toko kami di: [Alamat Toko] \n\nJangan lupa, bagikan kabar baik ini kepada teman dan keluarga! 😊🙏 ✨ \nRamadan penuh berkah, belanja lebih hemat di [Nama Bisnis Anda]! ✨";

const ReviewTemplate = () => {
    const navigate = useNavigate();

    const click1 = () => {
        navigate('/create-template')
    }

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const yesClick = () => {
        navigate("/campaign-report");
    }

    return (
        <Grid container spacing={2} sx={{ pt: 7, pb: 5, width: '100%' }}>
            <Grid size={12}>
                <Stack spacing={3}>
                    <HeaderTitle title={title} subtitle={subtitle} />
                    <Box width={{ xs: '100%', md: '80%' }}>
                        <Typography sx={{ typography: { xs: 'h5', md: 'h4' }, fontWeight: { xs: '600', md: '600' }, }}>
                            Review
                        </Typography>
                    </Box>
                </Stack>
            </Grid>
            <Grid size={12}>
                <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={8}
                    defaultValue={defaultValue}
                    sx={{
                        py: 1,
                        width: { xs: '100%', md: '90%' },
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '15px',
                        },
                    }}
                />
            </Grid>
            <Grid size={12} display="flex" justifyContent="flex-start" alignItems="center">
                <Box sx={{ pt: 3, width: { xs: '100%', md: '90%' }, display: 'flex', justifyContent: 'flex-end' }}>
                    <StepButton text1="Back" text2="Next" click1={click1} click2={handleClickOpen}/>
                </Box>
            </Grid>
            <Grid size={12} display="flex" justifyContent="flex-start" alignItems="center">
                <AlertConfirm yesClick={yesClick} open={open} handleClose={handleClose}/>
            </Grid>
        </Grid>
    );
};

export default ReviewTemplate;