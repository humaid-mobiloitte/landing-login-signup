import { Typography, Button, Card, CardContent, TextField, Grid, Container, Box } from '@mui/material';
import { useState, useRef, useEffect } from 'react';
import styles from './styling/styles';
import ImageContent from './imageContent';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { TextContent } from '../data/data';
// import TextContent from './TextContent';

export default function OTPSuccess({ setAuthComponent }) {

  return (
    <Container sx={styles.container}>
      <Card sx={{ ...styles.card, ...styles.otpCards}}>
        <Grid container>
          {/* Left Side - OTP Form */}
          <Grid item xs={12} md={6} sx={styles.leftCard}>

            <CardContent sx={{...styles.cardContent, ...styles.otpSuccCardContent}}>
              {/* ACCOUNT CREATED TITLE */}
              <Typography sx={styles.title}>{TextContent.title.accountCreated}</Typography>
              {/* SUBTITILE */}
              <Typography sx={{...styles.subtitle,...styles.otpSuccSubtitle}}>{TextContent.subtitle.accountCreated}</Typography>
              {/* TICK ICON */}
              <CheckCircleIcon sx={styles.otpSuccIcon}/>

              {/* 2ND TITLE */}
              <Typography sx={styles.title}>{TextContent.title.accountCreated_T2}</Typography>

              <Button
                variant="contained"
          
                style={styles.otpSuccessButtons}
                fullWidth
                sx={styles.button}
              >
                {TextContent.buttons.uploadResume}
              </Button>

              <Button
                variant="contained"
                style={styles.otpSuccessButtons}
                fullWidth
                sx={styles.button}
              >
                {TextContent.buttons.createResume}
              </Button>

              
            </CardContent>
          </Grid>

          {/* Right Side - Image */}
          <ImageContent ImageSrc={TextContent.images.otpSuccess}/>
        </Grid>
      </Card>
    </Container>
  );
}
