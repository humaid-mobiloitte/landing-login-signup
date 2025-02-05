import { Typography, Button, Card, CardContent, TextField, Grid, Container, Box } from '@mui/material';
import { useState, useRef, useEffect } from 'react';
import styles from './styling/styles';
import ImageContent from './imageContent';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function OTPSuccess({ setAuthComponent }) {

  return (
    <Container sx={styles.container}>
      <Card sx={styles.card}>
        <Grid container>
          {/* Left Side - OTP Form */}
          <Grid item xs={12} md={6} sx={styles.leftCard}>
            <CardContent style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'1rem'}}>
              <Typography sx={styles.title}>Account created</Typography>
              <Typography sx={{...styles.subtitle,textAlign:'center'}}>Your account has been created successfully!</Typography>

              <CheckCircleIcon sx={{width:'7rem',height:'auto',color:'#1f9874'}}/>


              <Typography sx={styles.title}>Complete your profile</Typography>

              <Button
                variant="contained"
                color="black"
                style={{ backgroundColor: 'lightgrey' }}
                fullWidth
                sx={styles.button}
              >
                Upload your CV/Resume
              </Button>

              <Button
                variant="contained"
                color="black"
                style={{ backgroundColor: 'lightgrey' }}
                fullWidth
                sx={styles.button}
              >
                Create your CV/Resume
              </Button>

              
            </CardContent>
          </Grid>

          {/* Right Side - Image */}
          <ImageContent ImageSrc={'src/assets/images/otp_success_image.svg'}/>
        </Grid>
      </Card>
    </Container>
  );
}
