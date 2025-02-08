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

// export default styles;
////////////////////////////////////////// DEEPSEEK AI ///////////////////////////
const styles = {
  button: {
    padding: "0.625em", // 10px -> 0.625em (relative to font size)
    fontSize: "0.875em", // 14px -> 0.875em
    borderRadius: "0.5em", // 8px -> 0.5em
    backgroundColor: "teal",
    // marginBottom: "1.2rem", // Keep rem for consistent spacing
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
    // flexDirection: "row",
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
    // marginBottom: "0.9375em", // 15px -> 0.9375em
    // marginBottom: "2em", // 15px -> 0.9375em
    fontSize: "0.8rem", // Keep rem for consistent font size
    fontFamily: "inter",
  },
  inputField: {
    width: "100%", // 20rem -> 100% of parent container
    // maxWidth: "20rem", // Set a max-width for larger screens
    borderRadius: "0.625em", // 10px -> 0.625em
    "& .MuiOutlinedInput-root": {
      borderRadius: "0.625em", // 10px -> 0.625em
      height: "3rem", // 52px -> 3.25em
      // marginTop:'inherit'
    },
    "& input::placeholder": {
        fontFamily: "Inter, sans-serif",
        fontSize: "0.85rem", // Adjust as needed
      },
  },
  leftCard: {
    width: "100%", // 25.93rem -> 100% of parent container
    // maxWidth: "25.93rem", // Set a max-width for larger screens
    padding: "2% 2.6%", // Keep rem for consistent spacing
  },
  title: {
    // marginBottom: "0.8rem", // Keep rem for consistent spacing
    margin: "0 0",
    padding:'0 0',
    fontWeight: 800,
    fontSize: "1.5rem", // Keep rem for consistent font size
    fontFamily: "inter",
    textTransform: "none",
  },
  subtitle: {
    // marginBottom: "0.8rem", // Keep rem for consistent spacing
    fontSize: "0.7rem", // Keep rem for consistent font size
    fontFamily: "inter",
    width: "100%", // 20rem -> 100% of parent container
    // maxWidth: "20rem", // Set a max-width for larger screens
  },
  // Added styles for aligning error messages properly
  errorText: {
    fontSize: "0.7rem", // Keep error message font size consistent
    // color: "red", // Ensure visibility of error messages
    marginLeft: "-0.8rem", // Align with existing elements from the left
    // marginRight: "0.3rem", // Align with existing elements from the right
    marginTop:'0.2rem',
    position:"absolute"
  },
  
  // ===== ADDED BY CHATGPT: New styles for CardContent Flex Layout =====
  cardContent: {
    display: "flex", // Align elements in column
    flexDirection: "column", // Stack elements vertically
    gap: "1rem", // Uniform spacing between elements
  },
};

export default styles;
