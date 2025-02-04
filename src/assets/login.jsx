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
      newErrors.email = 'Email is required.';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Enter a valid email (max 50 characters).';
    }

    if (!password.trim()) {
      newErrors.password = 'Password cannot be empty.';
    }

    setErrors(newErrors);

    if (!newErrors.email && !newErrors.password) {
      console.log('Logging in with:', { email, password });
      setAuthComponent(<OTP setAuthComponent={setAuthComponent} />);
    }
  };

  return (
    <Container sx={{ ...styles.container}}>
      <Card sx={{ ...styles.card, flexDirection: { xs: 'column', md: 'row' }, borderRadius: '10px' }}>
        <Grid container sx={{margin:-1}}>
          {/* Left Side - Login Form */}
          <Grid item xs={12} md={6} sx={{ ...styles.formContainer}}>
            <CardContent>
              <Typography sx={{ ...styles.title, fontSize: '1.5rem' }}>Login now</Typography>
              <Typography sx={{ mb: 2, fontSize: '0.875rem' }}>Welcome back! Please enter your details below. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, nam!</Typography>

              <Box sx={{ ...styles.inputGroup, mb: 1 }}>
                <TextField
                  fullWidth
                  label="Email"
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
                  sx={{ fontSize: '0.875rem' }}
                />
              </Box>

              <Box sx={{ ...styles.inputGroup, mb: 1 }}>
                <TextField
                  fullWidth
                  label="Password"
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
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{ fontSize: '0.875rem' }}
                />
              </Box>

              <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                <FormControlLabel control={<Checkbox />} label={<Typography sx={{ fontSize: '0.75rem' }}>Remember me</Typography>} />
                <Typography sx={{ cursor: 'pointer', color: '#025043', fontWeight: 'bold', fontSize: '0.75rem' }}>Forgot password?</Typography>
              </Box>

              <Button
                variant="contained"
                fullWidth
                sx={{ ...styles.button, borderRadius: '10px', fontSize: '0.875rem', p: 1 }}
                onClick={handleLogin}
              >
                Log in
              </Button>

              <Typography sx={{ ...styles.signupText, mt: 2, fontSize: '0.875rem' }}>OR</Typography>

              <Button
                variant="contained"
                fullWidth
                sx={{ ...styles.button, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff', borderRadius: '10px', fontSize: '0.875rem', p: 1 }}
              >
                <img src="src/assets/images/icons8-google.svg" alt="google icon" style={{ width: '20px', marginRight: '8px' }} />
                Sign in with Google
              </Button>

              <Typography variant="body2" sx={{ ...styles.signupText, mt: 2, fontSize: '0.75rem' }}>
                Don't have an account? <a href="#" onClick={() => setAuthComponent(<Signup setAuthComponent={setAuthComponent} />)} style={{ textDecoration: 'none', color: '#025043' }}>Sign up</a>
              </Typography>
            </CardContent>
          </Grid>

          {/* Right Side - Image */}
          <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
            <ImageContent />
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}
