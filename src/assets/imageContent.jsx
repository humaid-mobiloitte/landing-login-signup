import { Grid } from '@mui/material';
import styles from './styling/styles';
import { TextContent } from '../data/data';
export default function ImageContent({ ImageSrc }) {
  return (
    <Grid sx={styles.imageContainer}>
          {/* <Grid sx={{...styles.imageContainer,display: { xs: 'none'}}}> */}
      <img
        src={ImageSrc}
        alt={TextContent.images.imagesAlt}
        style={styles.image}
      />
      {/* {console.log(ImageSrc)} */}
    </Grid>
  );
}