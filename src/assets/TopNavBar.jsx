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

const pages = ['Home', 'Browse Jobs', 'Find Job', 'Employer', 'Blog'];

function TopNavBar({ setAuthComponent }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={{ mt: '0.8%', padding: '0 1% 0 1%', background: 'white', boxShadow: 'none', fontFamily: 'inter' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* LOGO */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <img src="src/assets/images/Logo.svg" alt="Logo" style={{ maxWidth: '14rem', height: 'auto' }} />
          </Box>

          {/* Responsive Menu Button */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <Button
              variant="contained"
              onClick={handleOpenNavMenu}
              sx={{
                my: 1,
                backgroundColor: '#1f9874',
                minWidth: '45px',
                minHeight: '45px',
                width: { xs: '45px', md: '53px' },
                height: { xs: '45px', md: '53px' },
                borderRadius: '10px',
                textTransform: 'none',
                fontFamily: 'inter',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 0,
              }}
            >
              <MenuIcon sx={{ color: 'white', fontSize: 24 }} /> {/* Dropdown Icon */}
            </Button>
            <Menu anchorEl={anchorElNav} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} sx={{ display: { xs: 'block', md: 'none' } }}>
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={{ textTransform: 'none', fontFamily: 'inter' }}>
                    {page}
                  </Typography>
                </MenuItem>
              ))}
              <MenuItem>
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => setAuthComponent(<Signup setAuthComponent={setAuthComponent} />)}
                  sx={{
                    my: 1,
                    border: 'none',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                    minWidth: '100px',
                    minHeight: '45px',
                    width: { xs: '100px', md: '120px' },
                    height: { xs: '45px', md: '53px' },
                    borderRadius: '10px',
                    color: 'black',
                  }}
                >
                  Sign Up
                </Button>
              </MenuItem>
              <MenuItem>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => setAuthComponent(<Login setAuthComponent={setAuthComponent} />)}
                  sx={{
                    backgroundColor: '#1f9874',
                    minWidth: '100px',
                    minHeight: '45px',
                    width: { xs: '100px', md: '120px' },
                    height: { xs: '45px', md: '53px' },
                    borderRadius: '10px',
                  }}
                >
                  Login
                </Button>
              </MenuItem>
            </Menu>
          </Box>

          {/* Normal Navigation for Desktop */}
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button key={page} sx={{ml:3, my: 2, color: 'black', display: 'block', fontFamily: 'inter', textTransform: 'none','&:hover': {
          backgroundColor: 'transparent'},fontWeight:'300',fontSize:'1rem',padding:0}}>
                {page}
              </Button>
            ))}
          </Box>

          {/* Sign Up and Login Buttons */}
          <Stack
            spacing={3}
            direction="row"
            sx={{
              display: { xs: 'none', md: 'flex' },
              ml: 2,
              '& button': {
                minWidth: '100px',
                minHeight: '45px',
                width: { xs: '100px', md: '120px' },
                height: { xs: '45px', md: '53px' },
                borderRadius: '10px',
              },
            }}
          >
            <Button
              variant="outlined"
              onClick={() => setAuthComponent(<Signup setAuthComponent={setAuthComponent} />)}
              sx={{ border: 'none', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', color: 'black', textTransform: 'none', fontFamily: 'inter',fontWeight:'300',fontSize:'1rem'}}
            >
              Sign Up
            </Button>
            <Button variant="contained" onClick={() => setAuthComponent(<Login setAuthComponent={setAuthComponent} />)} sx={{ backgroundColor: '#1f9874', textTransform: 'none', fontFamily: 'inter',fontWeight:'300',fontSize:'1rem' }}>
              Login
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default TopNavBar;
