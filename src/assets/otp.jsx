import { Typography, Button, Card, CardContent, TextField, Grid, Container, Box } from '@mui/material';
import { useState, useRef, useEffect } from 'react';
import styles from './styling/styles';
import ImageContent from './imageContent';
import OTPSuccess from './OTPSuccess';

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
      setError('Please enter the complete 6-digit OTP.');
    } else {
      setOtpVerified(true)
    //   console.log(`Verified: ${otpVerified}`)
      setAuthComponent(<OTPSuccess setAuthComponent={setAuthComponent} />)
    }
  };

  const handleResend = () => {
    setOtp(Array(6).fill('')); // Clear OTP input fields
    setResendMessage('OTP resent successfully');
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
      <Card sx={styles.card}>
        <Grid container>
          {/* Left Side - OTP Form */}
          <Grid item xs={12} md={6} sx={styles.leftCard}>
            <CardContent>
              <Typography sx={styles.title}>OTP Verification</Typography>
              <Typography sx={styles.subtitle}>Please enter the 6-digit verification code that was sent to your email. The code is valid for 3 minutes.</Typography>

              {/* OTP Input Fields */}
              <Box sx={styles.inputGroup} display="flex" gap={2} justifyContent="center">
                {otp.map((value, index) => (
                  <TextField
                    key={index}
                    value={value}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    variant="outlined"
                    inputProps={{
                      maxLength: 1,
                      style: { textAlign: 'center', fontSize: '20px' },
                    }}
                    sx={{ width: '3.5rem'}}
                    inputRef={(el) => (inputRefs.current[index] = el)}
                  />
                ))}
              </Box>

              {/* Resend OTP Section */}
              <Box display="flex" justifyContent="space-between" alignItems="center" sx={styles.subtitle}>
                <Typography
                  sx={{ cursor: 'pointer', color: '#025043', fontWeight: 'bold' }}
                  onClick={handleResend}
                >
                  Resend
                </Typography>
                <Typography sx={{ color: 'gray', fontWeight: 'bold' }}>
                  {formatTime(timer)}
                </Typography>
              </Box>

              {error && (
                <Typography color="error" sx={{ fontSize: '0.9rem', marginTop: '10px' }}>
                  {error}
                </Typography>
              )}
              

              <Button
                variant="contained"
                color="primary"
                style={{ backgroundColor: '#1f9874' }}
                sx={{...styles.inputField,...styles.button}}
                onClick={handleSubmit}
              >
                Verify OTP
              </Button>

              {/* OTP Resent Message */}
              {resendMessage && (
                <Box
                  sx={{
                    backgroundColor: 'rgba(83,182,81,1)',
                    color: 'white',
                    padding: '10px',
                    textAlign: 'center',
                    borderRadius: '4px',
                    marginTop: '10px',
                  }}
                >
                  {resendMessage}
                </Box>
              )}

              {/* Success Message on OTP Verification
              {otpVerified && (
                <Box
                  sx={{
                    backgroundColor: '#1f9874',
                    color: 'white',
                    padding: '10px',
                    textAlign: 'center',
                    borderRadius: '4px',
                    marginTop: '10px',
                  }}
                >
                  OTP Verified Successfully!
                </Box>
              )} */}
            </CardContent>
          </Grid>

          {/* Right Side - Image */}

          <ImageContent ImageSrc={'src/assets/images/otp_first_image.svg'} />

        </Grid>
      </Card>
    </Container>
  );
}
