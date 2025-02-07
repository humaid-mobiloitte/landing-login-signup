// const styles = {
//   button: {
//     padding: "10px",
//     fontSize: "14px",
//     borderRadius: "8px",
//     backgroundColor: "teal",
//     marginBottom:'1.2rem',
//     textTransform:'none',
//     fontFamily:'inter'
//   },
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   card: {
//     display: "flex",
//     flexDirection: "row",
//     maxWidth: "900px",
//     borderRadius: "20px",
//     overflow: "hidden",
//     boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
//   },
//   imageContainer: {
//     width: "50%", // Ensure the container takes up half the card width
//     height: "100%", // Ensure it fills the full height of the parent
//     display: "flex", // Make sure the image properly aligns within
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundSize: "cover", // Extends the image background
//     backgroundPosition: "center", // Ensures the image is centered
//   },
//   image: {
//     width: "100%", // Make the image fill the container's width
//     height: "100%", // Make the image fill the container's height
//     objectFit: "cover", // Ensures the image maintains aspect ratio without distortion
//   },
//   inputGroup: {
//     marginBottom: "15px",
//     fontSize: "0.8rem",
//     fontFamily: "inter",
//   },
//   inputField: {
//     width: "20rem",
//     borderRadius: "10px",
//     "& .MuiOutlinedInput-root": {
//       borderRadius: "10px",
//       height: "52px",
//     },
//   },
//   leftCard: {
//     width:'25.93rem',
//     padding: "2.6rem",
//   },
//   title: {
//     marginBottom: "1.2rem",
//     marginTop:'0',
//     fontWeight: 800,
//     fontSize: "1.5rem",
//     fontFamily: "inter",
//     textTransform:'none'
//   },
//   subtitle: {
//     marginBottom: "1.2rem",
//     fontSize: "0.8rem",
//     fontFamily: "inter",
//     width: "20rem",
//   },
// };

import { AspectRatio } from "@mui/icons-material";

// export default styles;
////////////////////////////////////////// DEEPSEEK AI ///////////////////////////
const styles = {
  button: {
    padding: "0.625em", // 10px -> 0.625em (relative to font size)
    fontSize: "0.875em", // 14px -> 0.875em
    borderRadius: "0.5em", // 8px -> 0.5em
    backgroundColor: "teal",
    marginBottom: "1.2rem", // Keep rem for consistent spacing
    textTransform: "none",
    fontFamily: "inter",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    display: "flex",
    flexDirection: "row",
    // maxWidth: "90%", // 900px -> 90% of parent container
    borderRadius: "1.4em", // 20px -> 1.25em
    // overflow: "hidden",
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
  },
  imageContainer: {
    width: "50%", // Already responsive
    height: "100%", // Already responsive
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  image: {
    width: "100%", // Already responsive
    height: "100%", // Already responsive
    // AspectRatio:'9:16',
    objectFit: "cover",
  },
  inputGroup: {
    marginBottom: "0.9375em", // 15px -> 0.9375em
    fontSize: "0.8rem", // Keep rem for consistent font size
    fontFamily: "inter",
  },
  inputField: {
    width: "100%", // 20rem -> 100% of parent container
    // maxWidth: "20rem", // Set a max-width for larger screens
    borderRadius: "0.625em", // 10px -> 0.625em
    "& .MuiOutlinedInput-root": {
      borderRadius: "0.625em", // 10px -> 0.625em
      height: "3.25em", // 52px -> 3.25em
    },
  },
  leftCard: {
    width: "100%", // 25.93rem -> 100% of parent container
    // maxWidth: "25.93rem", // Set a max-width for larger screens
    padding: "0.8rem", // Keep rem for consistent spacing
  },
  title: {
    marginBottom: "1.2rem", // Keep rem for consistent spacing
    marginTop: "0",
    fontWeight: 800,
    fontSize: "1.5rem", // Keep rem for consistent font size
    fontFamily: "inter",
    textTransform: "none",
  },
  subtitle: {
    marginBottom: "1.2rem", // Keep rem for consistent spacing
    fontSize: "0.8rem", // Keep rem for consistent font size
    fontFamily: "inter",
    width: "100%", // 20rem -> 100% of parent container
    // maxWidth: "20rem", // Set a max-width for larger screens
  },
};

export default styles;

//////////////////////////////////////////// CHAT GPT CSS ////////////////////////////////////////////////
// const styles = {
//   button: {
//     padding: "2%", // Adjusted for responsiveness
//     fontSize: "1vw", // Relative font size
//     borderRadius: "8px",
//     backgroundColor: "teal",
//     marginBottom: "2%",
//     textTransform: "none",
//     fontFamily: "inter",
//   },
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   card: {
//     display: "flex",
//     flexDirection: "row",
//     maxWidth: "90%", // Adjusted from fixed px to percentage for responsiveness
//     borderRadius: "20px",
//     overflow: "hidden",
//     boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
//   },
//   imageContainer: {
//     width: "50%", // Ensures it takes half the card width
//     height: "100%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//   },
//   image: {
//     width: "100%",
//     height: "100%",
//     objectFit: "cover",
//   },
//   inputGroup: {
//     marginBottom: "2%", // Adjusted for responsiveness
//     fontSize: "0.8vw", // Relative font size
//     fontFamily: "inter",
//   },
//   inputField: {
//     width: "80%", // Converted from rem to percentage
//     borderRadius: "10px",
//     "& .MuiOutlinedInput-root": {
//       borderRadius: "10px",
//       height: "3.5vw", // Responsive height
//     },
//   },
//   leftCard: {
//     width: "60%", // Adjusted for responsiveness
//     padding: "5%",
//   },
//   title: {
//     marginBottom: "2%",
//     marginTop: "0",
//     fontWeight: 800,
//     fontSize: "1.5vw",
//     fontFamily: "inter",
//     textTransform: "none",
//   },
//   subtitle: {
//     marginBottom: "2%",
//     fontSize: "1vw",
//     fontFamily: "inter",
//     width: "80%",
//   },
// };

// export default styles;


