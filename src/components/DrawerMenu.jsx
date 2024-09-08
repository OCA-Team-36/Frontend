// import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Speed, Add, Person, Assignment, Logout } from '@mui/icons-material';

const menu = [
    {
        id: 0,
        text: "Dashboard",
        icon: <Speed sx={{ color: '#000000' }} />,
        link: "#"
    },
    {
        id: 1,
        text: "New Campaign",
        icon: <Add sx={{ color: '#000000' }} />,
        link: "#"
    },
    {
        id: 2,
        text: "Contact",
        icon: <Person sx={{ color: '#000000' }} />,
        link: "#"
    },
    {
        id: 3,
        text: "Report",
        icon: <Assignment sx={{ color: '#000000' }} />,
        link: "#"
    },
    {
        id: 4,
        text: "Logout",
        icon: <Logout sx={{ color: '#000000' }} />,
        link: "#"
    },
]
const DrawerMenu = () => {
    return (
        <Box sx={{ overflow: 'auto' }}>
            <List>
                {menu.map((m, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {m.icon}
                            </ListItemIcon>
                            <ListItemText primary={m.text} sx={{ fontWeight: 'bold' }} primaryTypographyProps={{ sx: { fontWeight: 600 } }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

// DrawerMenu.propTypes = {

// };

export default DrawerMenu;