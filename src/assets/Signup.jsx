import { Typography, Button, Card, CardContent, TextField, Grid, Container, Box, FormControlLabel, Checkbox,InputAdornment, IconButton } from '@mui/material';
import { Email, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from 'react';
import styles from './styling/styles';
import ImageContent from './imageContent';
import Login from './login';
import OTP from './otp';
import TextContent from './TextContent';

export default function Signup({ setAuthComponent }) {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [isChecked, setIsChecked] = useState(true);
  const [checkboxError, setCheckboxError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

const togglePasswordVisibility = () => setShowPassword(!showPassword);
const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  // Email validation function
  const validateEmail = (value) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!value) return "Please enter your email address.";
    if (value.length > 100) return "Email cannot exceed 100 characters.";
    if (!emailRegex.test(value)) return "Please enter a valid email address.";
    return "";
  };

  // Password validation function
  const validatePassword = (value) => {
    if (!value) return "Please enter your password.";
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
      setCheckboxError("Please agree to the terms to proceed.");
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
    <Container sx={styles.container}>
      <Card sx={{ ...styles.card, maxWidth: '840px',maxHeight:'86vh'}}>
        <Grid container>
          {/* Left Side - Signup Form */}
          <Grid item xs={12} md={6} sx={{ ...styles.leftCard, position: "relative" }}>
            <CardContent sx={styles.cardContent}>

              {/* TITLE */}
              <Typography sx={{...styles.title,p:0}}>{TextContent.title.signup}</Typography>

              {/* SUBTITLE */}
              <Typography sx={{...styles.subtitle,p:0,mt:-0.5,mb:0.8}}>
                {TextContent.subtitle.signup}
              </Typography>

              {/* EMAIL INPUT FIELD */}
              <Box sx={{ position: "relative" }}>
                <TextField
                  sx={styles.inputField}
                  placeholder={TextContent.placeholders.email}
                  variant="outlined"
                  value={email}
                  // TYPIG START HOTE HI ERROR MESSAGE GAYB HOJAYE
                  onChange={
                    (e) =>{
                      setEmail(e.target.value)
                      setEmailError("")
                    } 
                  }
                  onBlur={() => setEmailError(validateEmail(email))}
                  error={!!emailError}
                  helperText={emailError && <Typography sx={styles.errorText}>{emailError}</Typography>}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              {/* PASSWORD INPUT FIELD */}
              <Box sx={{position:'relative'}}>
                <TextField
                  sx={{...styles.inputField,margin:"3% 0"}}
                  placeholder={TextContent.placeholders.password}
                  type={showPassword ? "text" : "password"}
                  variant="outlined"
                  value={password}
                  onChange={
                    (e) =>{
                      setPassword(e.target.value)
                      setPasswordError("")
                    }
                  }
                  onBlur={() => setPasswordError(validatePassword(password))}
                  error={!!passwordError}
                  helperText={passwordError && <Typography sx={styles.errorText}>{passwordError}</Typography>}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={togglePasswordVisibility} edge="end">
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              {/* RE-ENTER PASSWORD INPUT FIELD */}
              <Box sx={{position:'relative'}}>
                <TextField
                  sx={styles.inputField}
                  placeholder={TextContent.placeholders.reenterPassword}
                  type={showConfirmPassword ? "text" : "password"}
                  variant="outlined"
                  value={confirmPassword}
                  onChange={
                    (e) =>{
                      setConfirmPassword(e.target.value)
                      setConfirmPasswordError("")
                    } 
                  }
                  onBlur={() => setConfirmPasswordError(validateConfirmPassword(confirmPassword))}
                  error={!!confirmPasswordError}
                  helperText={confirmPasswordError && <Typography sx={styles.errorText}>{confirmPasswordError}</Typography>}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={toggleConfirmPasswordVisibility} edge="end">
                          {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              {/* CHECKBOX */}
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
                // YHA MASLA HO SKTA HAI
                label={
                  <Typography sx={styles.subtitle}>
                    {TextContent.labels.termsAndConditions}
                  </Typography>
                }
              />
              {/* CHECK BOX KI ERROR HANDLING */}
              {/* helperText={confirmPasswordError && <Typography sx={styles.errorText}>{confirmPasswordError} */}
               {checkboxError && (
                  <Typography color="error" sx={{ fontSize: '0.7rem', marginTop: '-18px',position:'relative' }}>
                    {checkboxError}
                  </Typography>
               )}
              {/* CREATE ACCOUNT BUTTON */}
              <Button variant="contained" sx={{ ...styles.inputField, ...styles.button, backgroundColor:'#1f9874' }} onClick={handleSubmit}>
                {TextContent.buttons.createAccount}
              </Button>

              {/* OR -> SIGNUP K LYE */}
              <Typography sx={{ textAlign: 'center', fontSize: '0.9rem' }}>{TextContent.misc.orText}</Typography>

              {/* GOOGLE SIGN IN BUTTON */}
              <Button
                variant="contained"
                sx={{ ...styles.inputField, ...styles.button, backgroundColor: '#ffffff', color:'black' }}
              >
                <img src="src/assets/images/icons8-google.svg" alt="google icon" style={{ width: '25px', height: 'auto', marginRight: '10px' }} />
                {TextContent.buttons.googleSignIn}
              </Button>

              {/* SIGNUP KRWANE K LIYE */}
              <Typography sx={{ textAlign: 'center', fontSize: '0.9rem', mt:0.5}}>
                {TextContent.links.alreadyHaveAccount}{' '}
                <a href="#" onClick={() => setAuthComponent(<Login setAuthComponent={setAuthComponent} />)} style={{ textDecoration: 'none', color: '#025043' }}>
                  {TextContent.buttons.login}
                </a>
              </Typography>
            </CardContent>

          </Grid>

          {/* Right Side - Image */}
          <ImageContent ImageSrc={'src/assets/images/signup_right_image.png'}/>


        </Grid>
      </Card>
    </Container>
  );
}
