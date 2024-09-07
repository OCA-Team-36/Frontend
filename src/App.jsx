import { CssBaseline } from "@mui/material";
import Router from "./Router";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import TopAppBar from "./components/TopAppBar";
import DrawerMenu from "./components/DrawerMenu";
import { useLocation } from "react-router";

const drawerWidth = 240;

function App() {
  const location = useLocation();
  const noNavSideAndTopRoutes = ['/login', '/signup'];
  const showNavSideAndTop = !noNavSideAndTopRoutes.includes(location.pathname);

  return (
    <>
      <CssBaseline />
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
            flexGrow: 1, p: 3,
            backgroundColor: (theme) => theme.palette.background.netral
          }}
        >
          {/* main */}
          <Router />
        </Box>
      </Box>
    </>
  )
}

export default App
