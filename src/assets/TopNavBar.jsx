import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import MenuIcon from '@mui/icons-material/Menu'; // Import MenuIcon
import Login from './login';
import Signup from './Signup';
import { TextContent } from '../data/data';
import mainStyles from './styling/mainStyles';

const pages = [TextContent.labels.topNavBar.menuItem1, TextContent.labels.topNavBar.menuItem2, TextContent.labels.topNavBar.menuItem3, TextContent.labels.topNavBar.menuItem4, TextContent.labels.topNavBar.menuItem5];

function TopNavBar({ setAuthComponent }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={mainStyles.topNavBar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* LOGO */}
          <Box sx={mainStyles.logoContainer}>
            <img src={TextContent.images.navbar_LOGO} alt={TextContent.images.logoAlt} style={mainStyles.logoImage} />
          </Box>

          {/* Responsive Menu */}
          <Box sx={mainStyles.responsiveMenuBox}>

            {/* Responsive Menu Button */}
            <Button variant="contained" onClick={handleOpenNavMenu} sx={mainStyles.responsiveMenuButton}>
              
              {/* Icon - small screen */}
              <MenuIcon sx={mainStyles.menuIconStyle} /> 
            </Button>

            {/* DROP DOWN - small screen */}
            <Menu anchorEl={anchorElNav} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} sx={mainStyles.dropDownLayout}>
              {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center" sx={mainStyles.menuItems}>
                  {page}
                </Typography>
              </MenuItem>
              ))}

              {/* SIGNUP AND LOGIN BUTTONS - small screen */}
              <Box sx={mainStyles.mobileButtonParent}>
                {/* SIGNUP BUTTON */}
                <MenuItem>
                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={() => setAuthComponent(<Signup setAuthComponent={setAuthComponent} />)}
                    sx={mainStyles.signUpButton}
                  >
                    {TextContent.links.signUp}
                  </Button>
                </MenuItem>

                {/* LOGIN BUTTON - small screen */}
                <MenuItem>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() => setAuthComponent(<Login setAuthComponent={setAuthComponent} />)}
                    sx={mainStyles.loginButton}
                  >
                    {TextContent.links.login}
                  </Button>
                </MenuItem>
              </Box>
            </Menu>
          </Box>

          {/* Normal Navigation for Desktop */}
          <Box sx={mainStyles.navBarPClayout}>
            {pages.map((page) => (
              <Button key={page} sx={mainStyles.navBarButtons}>
                {page}
              </Button>
            ))}
          </Box>

          {/* Sign Up and Login Buttons */}
          <Stack spacing={3} direction="row" sx={mainStyles.pcButtonParent}>

            {/* SIGN UP BUTTON */}
            <Button
              variant="outlined"
              onClick={() => setAuthComponent(<Signup setAuthComponent={setAuthComponent} />)}
              sx={mainStyles.signUpButton}
            >
              {TextContent.links.signUp}
            </Button>

            <Button variant="contained" onClick={() => setAuthComponent(<Login setAuthComponent={setAuthComponent} />)} sx={mainStyles.loginButton}>
            {TextContent.links.login}
            </Button>

          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default TopNavBar;
