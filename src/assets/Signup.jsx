import { Typography, Button, Card, CardContent, TextField, Grid, Container, Box, MenuItem, Select, FormControl } from '@mui/material';
import { useState } from 'react';
import styles from './styling/styles';
import ImageContent from './imageContent';

export default function Signup({ toggle }) {
  const [countryCode, setCountryCode] = useState('+1'); // Default to USA

  const countryCodes = [
    { code: '+1', country: 'USA' },
    { code: '+44', country: 'UK' },
    { code: '+91', country: 'India' },
    { code: '+61', country: 'Australia' },
    { code: '+81', country: 'Japan' },
    { code: '+49', country: 'Germany' },
  ];

  return (
    <Container maxWidth="md" sx={styles.container}>
      <Card sx={styles.card}>
        <Grid container>
            {/* Left Side - Signup Form */}
          <Grid item xs={12} md={6} sx={styles.formContainer}>
            <CardContent>
              <Typography variant="h4" sx={styles.title}>Sign Up</Typography>

              <Box sx={styles.inputGroup}>
                {/* <Typography variant="subtitle1">Full Name</Typography> */}
                <TextField fullWidth label="Enter your full name" variant="outlined" />
              </Box>

              <Box sx={styles.inputGroup}>
                {/* <Typography variant="subtitle1">Email</Typography> */}
                <TextField fullWidth label="Enter your email" variant="outlined" />
              </Box>

              {/* Mobile Number Input with Country Code Dropdown */}
              <Box sx={styles.inputGroup}>
                {/* <Typography variant="subtitle1">Mobile Number</Typography> */}
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <FormControl fullWidth>
                      <Select
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                      >
                        {countryCodes.map((item) => (
                          <MenuItem key={item.code} value={item.code}>
                            {item.country} ({item.code})
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <TextField fullWidth label="Enter your mobile number" variant="outlined" />
                  </Grid>
                </Grid>
              </Box>

              <Box sx={styles.inputGroup}>
                {/* <Typography variant="subtitle1">Password</Typography> */}
                <TextField fullWidth label="Enter your password" type="password" variant="outlined" />
              </Box>

              <Box sx={styles.inputGroup}>
                <TextField fullWidth label="Re-enter password" type="password" variant="outlined" />
              </Box>

              <Typography variant="body2" sx={styles.signupText}>
                Already have an account?{' '}
                <a href="#" onClick={toggle} style={{ textDecoration: 'none', color: '#025043' }}>Login</a>
              </Typography>

              <Button variant="contained" color="primary" fullWidth sx={styles.button}>
                Sign Up
              </Button>
            </CardContent>
          </Grid>
          {/* Right Side - Image */}
          <ImageContent/>
        </Grid>
      </Card>
    </Container>
  );
}
