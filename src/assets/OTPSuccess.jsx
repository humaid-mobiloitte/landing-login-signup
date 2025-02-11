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
      <Card sx={{ ...styles.card, maxWidth: '780px',maxHeight:'auto'}}>
        <Grid container>
          {/* Left Side - OTP Form */}
          <Grid item xs={12} md={6} sx={styles.leftCard}>
            <CardContent sx={{...styles.cardContent,alignItems:'center'}}>
              <Typography sx={styles.title}>{TextContent.title.accountCreated}</Typography>
              <Typography sx={{...styles.subtitle,textAlign:'center'}}>{TextContent.subtitle.accountCreated}</Typography>

              <CheckCircleIcon sx={{width:'7rem',height:'auto',color:'#1f9874'}}/>


              <Typography sx={styles.title}>{TextContent.title.accountCreated_T2}</Typography>

              <Button
                variant="contained"
                color="black"
                style={{ backgroundColor: 'lightgrey' }}
                fullWidth
                sx={styles.button}
              >
                {TextContent.buttons.uploadResume}
              </Button>

              <Button
                variant="contained"
                color="black"
                style={{ backgroundColor: 'lightgrey' }}
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
