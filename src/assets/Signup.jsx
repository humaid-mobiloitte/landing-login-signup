import { Typography, Button, Card, CardContent, TextField, Grid, Container, Box, FormControlLabel, Checkbox } from '@mui/material';
import { useState } from 'react';
import styles from './styling/styles';
import ImageContent from './imageContent';
import Login from './login';
import OTP from './otp';

export default function Signup({ setAuthComponent }) {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [isChecked, setIsChecked] = useState(true);
  const [checkboxError, setCheckboxError] = useState('');

  // Email validation function
  const validateEmail = (value) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!value) return "Email is required.";
    if (value.length > 100) return "Email cannot exceed 100 characters.";
    if (!emailRegex.test(value)) return "Please enter a valid email address.";
    return "";
  };

  // Password validation function
  const validatePassword = (value) => {
    if (!value) return "Password is required.";
    if (value.length < 6) return "Password must be at least 6 characters.";
    if (value.length > 20) return "Password cannot exceed 20 characters.";
    return "";
  };

  // Confirm Password validation function
  const validateConfirmPassword = (value) => {
    if (!value) return "Please confirm your password.";
    if (value !== password) return "Passwords do not match.";
    return "";
  };

  // Checkbox validation
  const validateCheckbox = () => {
    if (!isChecked) {
      setCheckboxError("You must agree to the terms to proceed.");
      return false;
    }
    setCheckboxError("");
    return true;
  };

  // Handle form submission
  const handleSubmit = () => {
    const emailErr = validateEmail(email);
    const passwordErr = validatePassword(password);
    const confirmPasswordErr = validateConfirmPassword(confirmPassword);
    const isCheckboxValid = validateCheckbox();

    setEmailError(emailErr);
    setPasswordError(passwordErr);
    setConfirmPasswordError(confirmPasswordErr);

    // If no errors, proceed with account creation logic
    if (!emailErr && !passwordErr && !confirmPasswordErr && isCheckboxValid) {
        setAuthComponent(<OTP setAuthComponent={setAuthComponent} />)
    }
  };

  return (
    <Container maxWidth="md" sx={styles.container}>
      <Card sx={styles.card}>
        <Grid container>
          {/* Left Side - Signup Form */}
          <Grid item xs={12} md={6} sx={styles.formContainer}>
            <CardContent>
              <Typography sx={{ ...styles.title, fontSize: '2rem' }}>Create Your Account</Typography>
              <Typography sx={{ mb: 2 }}>To get started, we need you to create an account with us. It's a quick and straightforward process that will only take a few minutes.</Typography>

              <Box sx={styles.inputGroup}>
                <TextField
                  fullWidth
                  label="Please enter your email address"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => setEmailError(validateEmail(email))}
                  error={!!emailError}
                  helperText={emailError}
                  inputProps={{ maxLength: 100 }}
                />
              </Box>

              <Box sx={styles.inputGroup}>
                <TextField
                  fullWidth
                  label="Please enter your password"
                  type="password"
                  variant="outlined"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={() => setPasswordError(validatePassword(password))}
                  error={!!passwordError}
                  helperText={passwordError}
                  inputProps={{ maxLength: 20 }}
                />
              </Box>

              <Box sx={styles.inputGroup}>
                <TextField
                  fullWidth
                  label="Please re-enter your password"
                  type="password"
                  variant="outlined"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onBlur={() => setConfirmPasswordError(validateConfirmPassword(confirmPassword))}
                  error={!!confirmPasswordError}
                  helperText={confirmPasswordError}
                />
              </Box>

              <Box sx={styles.inputGroup}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={isChecked}
                      onChange={(e) => {
                        setIsChecked(e.target.checked);
                        if (e.target.checked) setCheckboxError("");
                      }}
                    />
                  }
                  label={
                    <>
                      I agree to your{' '}
                      <a href="#" target="_blank" rel="noopener noreferrer">Terms & Conditions</a> and{' '}
                      <a href="#" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and confirm that the country selection is correct.
                    </>
                  }
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start', // Aligns the checkbox to the top
                  }}
                />
                {checkboxError && (
                  <Typography color="error" sx={{ fontSize: '0.8rem', marginTop: '-10px' }}>
                    {checkboxError}
                  </Typography>
                )}
              </Box>

              <Button
                variant="contained"
                color="primary"
                style={{ backgroundColor: '#1f9874' }}
                fullWidth
                sx={styles.button}
                onClick={handleSubmit}
              >
                Create an account
              </Button>

              <Typography sx={styles.signupText}>OR</Typography>

              <Button
                variant="contained"
                color="black"
                style={{ backgroundColor: '#ffffff' }}
                fullWidth
                sx={{
                  ...styles.button,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '10px',
                }}
              >
                <img
                  src="src/assets/images/icons8-google.svg"
                  alt="google icon"
                  style={{
                    width: '25px',
                    height: 'auto',
                    marginRight: '10px',
                  }}
                />
                Sign in with Google
              </Button>

              <Typography variant="body2" sx={styles.signupText}>
                Already have an account?{' '}
                <a href="#" onClick={() => setAuthComponent(<Login setAuthComponent={setAuthComponent} />)} style={{ textDecoration: 'none', color: '#025043' }}>Login</a>
              </Typography>

            </CardContent>
          </Grid>

          {/* Right Side - Image */}
          <ImageContent ImageSrc={'src/assets/images/signup_first_image.svg'}/>


        </Grid>
      </Card>
    </Container>
  );
}
