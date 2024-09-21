import { CssBaseline, useMediaQuery } from "@mui/material";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import TopAppBar from "./components/TopAppBar";
import DrawerMenu from "./components/DrawerMenu";
import { Route, Routes, useLocation } from 'react-router';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import { useState } from "react";
import NewCampaign from "./pages/NewCampaign";
import CreateTemplate from "./pages/CreateTemplate";
import ReviewTemplate from "./pages/ReviewTemplate";
import CampaignReport from "./pages/CampaignReport";

const drawerWidth = 240;

function App() {
  const location = useLocation();
  const hideNav = location.pathname === '/signin' || location.pathname === '/signup';
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <>
      <Toolbar />
      <DrawerMenu />
    </>
  );

  return (
    <>
      <CssBaseline />
      {!hideNav && (
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <TopAppBar />
          {!isMobile && (
            <Drawer
              variant="permanent"
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
              }}
            >
              {drawerContent}
            </Drawer>
          )}
          {/* Temporary Drawer for smaller screens */}
          {isMobile && (
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{ keepMounted: true }} // Better performance on mobile
              sx={{
                width: drawerWidth,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
              }}
            >
              {drawerContent}
            </Drawer>
          )}
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            {/* main */}
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/campaign" element={<NewCampaign />} />
              <Route path="/campaign/create-template" element={<CreateTemplate />} />
              <Route path="/campaign/review-template" element={<ReviewTemplate />} />
              <Route path="/campaign/campaign-report" element={<CampaignReport />} />
            </Routes>
          </Box>
        </Box>
      )}

      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App
