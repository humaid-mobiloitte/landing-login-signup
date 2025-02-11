import { Typography, Button, Card, CardContent, TextField, Grid, Container, Box } from '@mui/material';
import { useState, useRef, useEffect } from 'react';
import styles from './styling/styles';
import ImageContent from './imageContent';
import OTPSuccess from './OTPSuccess';
import { TextContent } from '../data/data';
// import TextContent from './TextContent';

export default function OTP({ setAuthComponent }) {
  const [otp, setOtp] = useState(Array(6).fill(''));
  const [error, setError] = useState('');
  const [resendMessage, setResendMessage] = useState('');
  const [otpVerified, setOtpVerified] = useState(false);
  const [timer, setTimer] = useState(180);
  const inputRefs = useRef([]);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]?$/.test(value)) { // Allow only single-digit numbers
      const otpCopy = [...otp];
      otpCopy[index] = value;
      setOtp(otpCopy);
      setError(''); // Clear error when typing

      // Move to the next input box
      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = () => {
    if (otp.includes('')) {
      setError(TextContent.validation.otp.required);
    } else {
      setOtpVerified(true)
      setAuthComponent(<OTPSuccess setAuthComponent={setAuthComponent} />)
    }
  };

  const handleResend = () => {
    setOtp(Array(6).fill('')); // Clear OTP input fields
    setResendMessage(TextContent.messages.otpResent);
    setTimer(180); // Reset the timer
    setError('');
    setOtpVerified(false);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <Container sx={styles.container}>
      <Card sx={{ ...styles.card, ...styles.otpCards}}>
        <Grid container>
          {/* Left Side - OTP Form */}
          <Grid item xs={12} md={6} sx={styles.leftCard}>
            <CardContent sx={styles.cardContent}>
              {/* TITLE */}
              <Typography sx={styles.title}>{TextContent.title.otp}</Typography>

              {/* SUBTITLE */}
              <Typography sx={styles.subtitle}>{TextContent.subtitle.otp}</Typography>

              {/* OTP Input Fields */}
              <Box sx={{...styles.inputGroup,...styles.otpInputContainer}} >
                {otp.map((value, index) => (
                  <TextField
                    key={index}
                    value={value}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    variant="outlined"
                    inputProps={{
                      maxLength: 1,
                      style: { ...styles.otpDigitStyles },
                    }}
                    // Ensure the input box is square
                    sx={styles.otpBox}
                    inputRef={(el) => (inputRefs.current[index] = el)}
                  />
                ))}
              </Box>

              {/* Resend OTP - Timer Section */}
              {/* sx={{...styles.subtitle,...styles.rememMeForgotPas}} 2nd is for display flex*/}
              <Box sx={{...styles.subtitle,...styles.rememMeForgotPass}}>
                {/* Resend OTP text */}
                <Typography sx={styles.resendOTP} onClick={handleResend}>
                  {TextContent.links.resendOtp}
                </Typography>

                {/* Timer */}
                <Typography sx={styles.timerOTP}>
                  {formatTime(timer)}
                </Typography>
              </Box>

              {error && (
                <Typography color="error" sx={styles.errorOTP}>
                  {error}
                </Typography>
              )}

              <Button
                variant="contained"
                sx={{ ...styles.inputField, ...styles.button }}
                onClick={handleSubmit}
              >
                {TextContent.buttons.verifyOtp}
              </Button>

              {/* OTP Resent Message */}
              {resendMessage && (
                <Box
                  sx={styles.resendOTPMessage}
                >
                  {resendMessage}
                </Box>
              )}
            </CardContent>
          </Grid>

          {/* Right Side - Image */}
          <ImageContent ImageSrc={TextContent.images.otp} />
        </Grid>
      </Card>
    </Container>
  );
}