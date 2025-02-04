import { Typography, Button, Card, CardContent, TextField, Grid, Container, Box } from '@mui/material';
import styles from './styling/styles';
import ImageContent from './imageContent';

export default function Login({ toggle }) {
  return (
    <Container  sx={styles.container}>
      <Card sx={styles.card}>
        <Grid container>
            {/* Left Side - Login Form */}
          <Grid item xs={12} md={6} sx={styles.formContainer}>
            <CardContent>
              <Typography variant="h4" sx={styles.title}>Login</Typography>

              <Box sx={styles.inputGroup}>
                <TextField fullWidth label="Enter your email" variant="outlined" />
              </Box>

              <Box sx={styles.inputGroup}>
                <TextField fullWidth label="Enter your password" type="password" variant="outlined" />
              </Box>

              <Typography variant="body2" sx={styles.signupText}>
                New User?{' '}
                <a href="#" onClick={toggle} style={{ textDecoration: 'none', color: '#025043' }}>Sign up</a>
              </Typography>

              <Button variant="contained" color="primary" fullWidth sx={styles.button}>
                Login
              </Button>
            </CardContent>
          </Grid>
          {/* Right Side - Image */}
          <ImageContent/>
        </Grid>
      </Card>
    </Container>
  );
}
