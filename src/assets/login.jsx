import { Typography, Button, Card, CardContent, TextField, Grid, Container, Box, FormControlLabel, Checkbox, InputAdornment, IconButton } from '@mui/material';
import { useState } from 'react';
import { Email, Lock, Visibility, VisibilityOff } from '@mui/icons-material';
import styles from './styling/styles';
import ImageContent from './imageContent';
import Signup from './Signup';
import OTP from './otp';
import { TextContent } from '../data/data';

export default function Login({ setAuthComponent }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.length <= 50;
  };

  // Handle onBlur validation for email and password
  const handleBlur = (field) => {
    let newErrors = { ...errors };

    if (field === 'email') {
      if (!email.trim()) {
        newErrors.email = TextContent.validation.email.required
      } else if (!validateEmail(email)) {
        newErrors.email = TextContent.validation.email.invalid
      }
    }

    if (field === 'password' && !password.trim()) {
      newErrors.password = TextContent.validation.password.required
    }

    setErrors(newErrors);
  };

  // Handle login function
  const handleLogin = () => {
    let newErrors = { email: '', password: '' };

    if (!email.trim()) {
      newErrors.email = TextContent.validation.email.required
    } else if (!validateEmail(email)) {
      newErrors.email = TextContent.validation.email.invalid
    }

    if (!password.trim()) {
      newErrors.password = TextContent.validation.password.required
    }

    setErrors(newErrors);

    // Proceed to OTP if no errors
    if (!newErrors.email && !newErrors.password) {
      // console.log('Logging in with:', { email, password });
      setAuthComponent(<OTP setAuthComponent={setAuthComponent} />);
    }
  };

  return (
    <Container sx={styles.container}>
      <Card sx={{ ...styles.card, ...styles.loginCard}}>
        <Grid container>
          {/* Left Side - Login Form */}
          <Grid item xs={12} md={6} sx={styles.leftCard}>
            <CardContent sx={styles.cardContent}>
              {/* LOGIN TITLE */}
              <Typography sx={styles.title}>{TextContent.title.login}</Typography>
              {/* LOGIN SUBTITLE */}
              <Typography sx={{ ...styles.subtitle, ...styles.loginSubtitle}}>
                {TextContent.subtitle.login}
              </Typography>

              {/* EMAIL INPUT FIELD */}
              <Box sx={styles.inputGroup}>
                <TextField
                  sx={styles.inputField}
                  placeholder={TextContent.placeholders.email}
                  variant='outlined'
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors({ ...errors, email: '' }); // Clear error on typing
                  }}
                  onBlur={() => handleBlur('email')}
                  error={!!errors.email}
                  helperText={errors.email && <Typography sx={styles.errorText}>{errors.email}</Typography>}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <Email color='action' />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              {/* PASSWORD INPUT FIELD */}
              <Box sx={styles.inputGroup}>
                <TextField
                  sx={{ ...styles.inputField, ...styles.loginPasswordInputField}}
                  placeholder={TextContent.placeholders.password}
                  type={showPassword ? 'text' : 'password'}
                  variant='outlined'
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errors.password) setErrors({ ...errors, password: '' }); // Clear error on typing
                  }}
                  onBlur={() => handleBlur('password')}
                  error={!!errors.password}
                  helperText={errors.password && <Typography sx={styles.errorText}>{errors.password}</Typography>}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <Lock color='action' />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton onClick={() => setShowPassword(!showPassword)}>
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              {/* REMEMBER ME - FORGOT PASSWORD  */}
              <Box sx={{...styles.subtitle,...styles.rememMeForgotPass}}>
                <FormControlLabel control={<Checkbox />} label={<Typography>{TextContent.labels.rememberMe}</Typography>} />
                <Typography sx={styles.forgotPasswordStyle}>{TextContent.labels.forgotPassword}</Typography>
              </Box>

              {/* LOGIN BUTTON */}
              <Button
                variant='contained'
                sx={{ ...styles.inputField, ...styles.button }}
                onClick={handleLogin}
              >
                {TextContent.buttons.login}
              </Button>
                {/* OR text */}
              <Typography sx={styles.orTextStyle}>{TextContent.misc.orText}</Typography>

              {/* GOOGLE SIGN-IN BUTTON */}
              <Button variant='contained' fullWidth sx={{ ...styles.inputField, ...styles.button, ...styles.googleButtonStyle}}>
                {/* GOOGLE ICON */}
                <img
                  src={TextContent.images.googleIcon} alt={TextContent.images.iconAlt} style={styles.googleIconStyle}
                />
                {TextContent.buttons.googleSignIn}
              </Button>

                {/* SIGNUP KRWANE K LIYE */}
              <Typography sx={{ ...styles.subtitle, ...styles.bottomTextForBoth }}>
                {TextContent.links.dontHaveAccount}{' '}
                {/* wo text jo is page se us page le jayega */}
                <a
                  href='#'
                  onClick={() => setAuthComponent(<Signup setAuthComponent={setAuthComponent} />)}
                  style={styles.linkTextStyle}
                >
                  {TextContent.links.signUp}
                </a>
              </Typography>
            </CardContent>
          </Grid>

          {/* Right Side - Image */}
          <ImageContent ImageSrc={TextContent.images.login} />
        </Grid>
      </Card>
    </Container>
  );
}
