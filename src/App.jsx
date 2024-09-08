import { CssBaseline } from "@mui/material";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import TopAppBar from "./components/TopAppBar";
import DrawerMenu from "./components/DrawerMenu";
import { Route, Routes, useLocation } from 'react-router';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';

const drawerWidth = 240;

function App() {
  const location = useLocation();
  const hideNav = location.pathname === '/signin' || location.pathname === '/signup';

  return (
    <>
      <CssBaseline />
      {!hideNav && (
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <TopAppBar />
          <Drawer
            variant="permanent"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
          >
            <Toolbar />
            <DrawerMenu />
          </Drawer>
          <Box
            component="main"
            sx={{
              flexGrow: 1, 
              p: 3,
            }}
          >
            {/* main */}
            {/* <Router /> */}
            <Routes>
              <Route path="/" element={<Dashboard />} />
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
