import {Grid} from '@mui/material';
import styles from './styling/styles';
export default function ImageContent(){
    return(
        <Grid item xs={12} md={6} sx={styles.imageContainer}>
            <img
              src="src/assets/images/homescreen_right_side_group_sm.svg"
              alt="Signup"
              style={styles.image}
            />
        </Grid>
    )
}