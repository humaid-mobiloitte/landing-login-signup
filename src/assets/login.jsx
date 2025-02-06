import { Typography, Button, Card, CardContent, TextField, Grid, Container, Box, FormControlLabel, Checkbox, InputAdornment, IconButton } from '@mui/material';
import { useState } from 'react';
import { Email, Lock, Visibility, VisibilityOff } from '@mui/icons-material';
import styles from './styling/styles';
import ImageContent from './imageContent';
import Signup from './Signup';
import OTP from './otp';

export default function Login({ setAuthComponent }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.length <= 50;
  };

  const handleLogin = () => {
    let newErrors = { email: '', password: '' };

    if (!email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Enter a valid email (max 50 characters).';
    }

    if (!password.trim()) {
      newErrors.password = 'Please enter your password.';
    }

    setErrors(newErrors);

    if (!newErrors.email && !newErrors.password) {
      console.log('Logging in with:', { email, password });
      setAuthComponent(<OTP setAuthComponent={setAuthComponent} />);
    }
  };

  return (
    <Container sx={styles.container}>
      <Card sx={styles.card}>
        <Grid container >
          {/* Left Side - Login Form */}
          <Grid item xs={12} md={6} sx={styles.leftCard}>
            <CardContent>
              <Typography sx={styles.title}>Login now</Typography>
              <Typography sx={styles.subtitle}>Welcome back! Please enter your details below. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, nam!</Typography>

              <Box sx={styles.inputGroup}>
                <TextField
                  sx={styles.inputField}
                  placeholder='Enter your email.'
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={!!errors.email}
                  helperText={errors.email}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email color="action" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              <Box sx={styles.inputGroup}>
                <TextField
                  sx={styles.inputField}
                  placeholder="Enter your password"
                  type={showPassword ? 'text' : 'password'}
                  variant="outlined"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  error={!!errors.password}
                  helperText={errors.password}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock color="action" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowPassword(!showPassword)}>
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              <Box display="flex" justifyContent="space-between" alignItems="center" sx={styles.subtitle}>
                <FormControlLabel control={<Checkbox />} label={<Typography>Remember me</Typography>} />
                <Typography sx={{ cursor: 'pointer', color: '#025043'}}>Forgot password?</Typography>
              </Box>
              
              <Button
                variant="contained"
                color="primary"
                style={{ backgroundColor: '#1f9874' }}
                sx={{...styles.inputField,...styles.button}}
                onClick={handleLogin}
              >
                Log in
              </Button>

              <Typography sx={{...styles.subtitle,textAlign:'center',fontSize:'0.9rem'}}>OR</Typography>

              <Button
                variant="contained"
                fullWidth
                sx={{ ...styles.button, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff', borderRadius: '10px', fontSize: '0.875rem', p: 1,color:'black' }}
              >
                <img src="src/assets/images/icons8-google.svg" alt="google icon" style={{ width: '20px', marginRight: '8px' }} />
                Sign in with Google
              </Button>

              <Typography sx={{...styles.subtitle,textAlign:'center',fontSize:'0.9rem'}}>
                Don't have an account? 
                <a href="#" onClick={() => setAuthComponent(<Signup setAuthComponent={setAuthComponent} />)} style={{ textDecoration: 'none', color: '#025043' }}>Sign up</a>
              </Typography>
            </CardContent>
          </Grid>

          {/* Right Side - Image */}
          
            <ImageContent ImageSrc={'src/assets/images/login_first_image.svg'}/>

        </Grid>
      </Card>
    </Container>
  );
}
