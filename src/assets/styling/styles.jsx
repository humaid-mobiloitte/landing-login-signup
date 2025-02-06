const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      maxWidth: '900px',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
      // minHeight: '710px' 
    },
    // imageContainer: {
    //   display: 'flex',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   background: '#f5f5f5',
    // },
    // image: {
    //   width: '100%',
    //   height: 'auto',
    //   display:'block',
    //   objectFit:'cover'
    // },
    imageContainer: {
      width: '50%', // Ensure the container takes up the full width of its parent
      height:'100%'
      // overflow: 'hidden' // Hide any overflow if the image is larger than the container
    },
    image: {
      width: '100%', // Make the image fill the container's width
      height: 'auto', // Maintain the image's aspect ratio
      display: 'block', // Ensure the image behaves as a block element
    },
    title: {
      marginBottom: '20px',
      fontWeight: 700,
      fontSize:'4 rem'
    },
    inputGroup: {
      marginBottom: '15px',
      fontSize:'14px'
    },
    signupText: {
      textAlign: 'center',
      marginBottom: '15px',
      color:'teal'
    },
    button: {
      padding: '10px',
      fontSize: '14px',
      borderRadius: '8px',
      backgroundColor:'teal'
    },
  };
  
  export default styles;
  