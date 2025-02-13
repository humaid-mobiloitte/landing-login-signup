import { Typography, Button, Card, CardContent, TextField, Grid, Container, Box, FormControlLabel, Checkbox,InputAdornment, IconButton } from '@mui/material';
import { Email, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from 'react';
import styles from './styling/styles';
import ImageContent from './imageContent';
import Login from './login';
import OTP from './otp';
import { TextContent } from '../data/data';
// import TextContent from './TextContent';

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
    if (!value) return TextContent.validation.email.required
    if (value.length > 100) return TextContent.validation.email.maxLength
    if (!emailRegex.test(value)) return TextContent.validation.email.invalid
    return "";
  };

  // Password validation function
  const validatePassword = (value) => {
    if (!value) return TextContent.validation.password.required
    if (value.length < 6) return TextContent.validation.password.minLength
    if (value.length > 20) return TextContent.validation.password.maxLength
    return "";
  };

  // Confirm Password validation function
  const validateConfirmPassword = (value) => {
    if (!value) return TextContent.validation.confirmPassword.required
    if (value !== password) return TextContent.validation.confirmPassword.mismatch
    return "";
  };

  // Checkbox validation
  const validateCheckbox = () => {
    if (!isChecked) {
      setCheckboxError(TextContent.validation.checkbox.required);
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
      <Card sx={{ ...styles.card, ...styles.signUpCard}}>
        <Grid container>
          {/* Left Side - Signup Form */}
          {/* position:relative hta kr bhi theek kaam kr rha hai */}
          <Grid item xs={12} md={6} sx={styles.leftCard}>
            <CardContent sx={styles.cardContent}>

              {/* TITLE */}
              <Typography sx={styles.title}>{TextContent.title.signup}</Typography>

              {/* SUBTITLE */}
              <Typography sx={{ ...styles.subtitle, ...styles.signUpSubtitle}}>
                {TextContent.subtitle.signup}
              </Typography>

              {/* EMAIL INPUT FIELD */}
              <Box>
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
              <Box>
                <TextField
                  sx={{ ...styles.inputField, ...styles.signUpPasswordInputField}}
                  // for margin->"...styles.signUpPasswordInputField"
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
              <Box>
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
                  <Typography color="error" sx={styles.checkBoxErrorText}>
                    {checkboxError}
                  </Typography>
               )}
              {/* CREATE ACCOUNT BUTTON */}
              <Button variant="contained" sx={{ ...styles.inputField, ...styles.button}} onClick={handleSubmit}>
                {TextContent.buttons.createAccount}
              </Button>

              {/* OR -> SIGNUP K LYE */}
              <Typography sx={styles.orTextStyle}>{TextContent.misc.orText}</Typography>

              {/* GOOGLE SIGN IN BUTTON */}
              <Button
                variant="contained"
                sx={{ ...styles.inputField, ...styles.button, ...styles.googleButtonStyle}}
              >
                {/* GOOGLE ICON */}
                <img src={TextContent.images.googleIcon} alt={TextContent.images.iconAlt} style={styles.googleIconStyle} />
                {TextContent.buttons.googleSignIn}
              </Button>

              {/* LOGIN KRWANE K LIYE */}
              <Typography sx={{ ...styles.subtitle, ...styles.bottomTextForBoth }}>
                {TextContent.links.alreadyHaveAccount}{' '}
                <a href="#" onClick={() => setAuthComponent(<Login setAuthComponent={setAuthComponent} />)} style={styles.linkTextStyle}>
                  {TextContent.buttons.login}
                </a>
              </Typography>
            </CardContent>

          </Grid>

          {/* Right Side - Image */}
          <ImageContent ImageSrc={TextContent.images.signup}/>


        </Grid>
      </Card>
    </Container>
  );
}
