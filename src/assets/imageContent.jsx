import { Grid } from '@mui/material';
import styles from './styling/styles';

export default function ImageContent({ ImageSrc }) {
  return (
    <Grid sx={{...styles.imageContainer,display: { xs: 'none', md: 'block' }}}>
          {/* <Grid sx={{...styles.imageContainer,display: { xs: 'none'}}}> */}
      <img
        src={ImageSrc}
        alt="image not found"
        style={styles.image}
      />
      {/* {console.log(ImageSrc)} */}
    </Grid>
  );
}