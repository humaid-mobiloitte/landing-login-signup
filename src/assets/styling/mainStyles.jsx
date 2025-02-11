// HomePage.jsx ki
// App.jsx ki
// TopNavBar.jsx ki
import { TextContent } from "../../data/data";


const mainStyles = {
    // =========================
    // Main Container Styles
    // =========================
    mainContainer: {
      backgroundImage:{md:TextContent.images.backgroundImage, xs:'none'},
      flexGrow: 1,
      fontFamily: "inter",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      minHeight: "91vh", // Prevent scrolling
      mt: { xs: 16, md: 10 },
      overflow: "hidden",
    },
  
    // =========================
    // Hero Section Styles
    // =========================
    heroSection: {
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      justifyContent: { xs: "center", md: "flex-start" },
      alignItems: "center",
      px: { xs: 2, md: "none" },
      py: { xs: 4, md: 20 },
    },
  
    // =========================
    // Left Content Styles
    // =========================
    leftContent: {
      maxWidth: 620,
      textAlign: { xs: "center", md: "left" },
      ml: { md: "14%" },
    },
    title: {
    //   typography:'h3',
      fontWeight: "900",
      mb: 2,
      fontSize: { xs: "2rem", md: "3.4rem" },
      fontFamily: "inter",
      lineHeight: "140%",
    },
    subtitle: {
      typography:"subtitle1",
      color:"text.textPrimary", 
      mb: 3,
      fontSize: { xs: "0.9rem", md: "1.2rem" },
      fontFamily: "inter",
    },
  
    // =========================
    // Search Box Styles
    // =========================
    searchBox: {
      display: "flex",
      flexDirection: { xs: "column", sm: "row" },
      backgroundColor: "#fff",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
      borderRadius: 2,
      p: 1,
      alignItems: "center",
      border: "1px solid rgba(0, 0, 0, 0.1)",
      width: "100%",
    },
  
    // =========================
    // Industry Dropdown Styles
    // =========================
    dropdown: {
      flex: 1,
      width: { xs: "100%", sm: "auto" },
      fontFamily: "inter",
      "& .MuiOutlinedInput-root": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "white",
        },
      },
      "& .MuiInputBase-input": {
        fontSize: "0.8rem",
        fontFamily: "inter",
      },
    },
    // INDUSTRY ICON 
    industryIcon:{
        padding:'0.2rem',
        color: "rgba(0, 0, 0, 0.5)"
    },

    // DIVIDER
    divider:{
        display: { xs: "none", md: "block" },
        height: "1.5rem",
        width: "1px",
        backgroundColor: "#ccc",
    },
  
    // =========================
    // TextField Styles
    // =========================
    textField: {
      flex: 1,
      width: { xs: "100%", sm: "auto" },
      fontFamily: "inter",
      "& .MuiOutlinedInput-root": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "white",
        },
      },
      "& .MuiInputBase-input::placeholder": {
        fontSize: "0.8rem",
        fontFamily: "inter",
      },
    },
  
    // =========================
    // Button Styles
    // =========================
    searchButton: {
      backgroundColor: "#1f9874",
      padding: "0.6rem 1.4rem",
      textTransform: "none",
      borderRadius: "10px",
    },
  


    /////////////////////////////////////////////////////////////////// =========================
    // Modal Styles (From App.jsx)
    /////////////////////////////////////////////////////////////////// =========================
    modalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0, 0, 0, 0.7)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 2000,
    },
  
    closeButtonContainer: {
      display: "flex",
      justifyContent: "flex-end",
      margin: 0,
      padding: 0,
      color: "white",
      cursor: "pointer",
    },
  
    closeButton: {
      color: "white",
    },


  
    ///////////////////////////////////////////////// =========================
    // TopNavBar Styles (From TopNavBar.jsx)
    ///////////////////////////////////////////////// =========================
    topNavBar: {
      mt: "0.8%",
      padding: "0 1% 0 1%",
      background: "white",
      boxShadow: "none",
      fontFamily: "inter",
    },
  
    logoContainer: {
      display: "flex",
      alignItems: "center",
      flexGrow: 1,
    },
    logoImage:{ 
        maxWidth: '14rem', 
        height: 'auto' 
    },

    navBarPClayout:{ 
      flexGrow: 0, 
      display:{ 
        xs: 'none', 
        md: 'flex' 
      } 
    },

    navBarButtons:{
      ml:3, 
      my: 2, 
      color: 'black', 
      display: 'block', 
      fontFamily: 'inter', 
      textTransform: 'none','&:hover': {
        backgroundColor: 'transparent'
      },
      fontWeight:'300',
      fontSize:'1rem',
      padding:0
    },

    // RESPONSIVE MENU
    responsiveMenuBox:{ 
      display:{ 
        xs: 'flex', 
        md: 'none' 
      },
      // marginRight:'100px' 
    }, 
  
    responsiveMenuButton: {
      my: 1,
      backgroundColor: "#1f9874",
      minWidth: "45px",
      minHeight: "45px",
      width: { xs: "45px", md: "53px" },
      height: { xs: "45px", md: "53px" },
      borderRadius: "10px",
      textTransform: "none",
      fontFamily: "inter",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: 0,
    },

    menuIconStyle:{ 
      color: 'white', 
      fontSize: 24 
    },
  
    menuItems: {
      textTransform: "none",
      fontFamily: "inter",
    },

    dropDownLayout:{ 
      display:{ 
        xs: 'block', 
        md: 'none',
      },

    },
    // SMALL SCREEN LOGIN AND SIGNUP BUTTONS PARENT
    mobileButtonParent:{
      // Shared styles for all buttons inside this parent
      '& button': {
        minWidth: '100px',
        minHeight: '45px',
        // width: { xs: '100px', md: '120px' }, 
        width: '100px',
        // height: { xs: '45px', md: '53px' }, 
        height: '45px',
        borderRadius: '10px',
        fontFamily: 'inter',
        fontSize: '1rem',
        textTransform: 'none',
      },
    },

    // NORMAL PC LOGIN AND SIGNUP BUTTONS PARENT
    pcButtonParent:{
      display: { xs: 'none', md: 'flex' },
      ml: 2,
      '& button': {
        minWidth: '100px',
        minHeight: '45px',
        // width: { xs: '100px', md: '120px' },
        width:'120px',
        // height: { xs: '45px', md: '53px' },
        height:'53px',
        borderRadius: '10px',
        textTransform: "none",
        fontFamily: "inter",
        fontWeight: "300",
        fontSize: "1rem",
      },
    },
  
    signUpButton: {
      border: "none",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      color: "black",
    },
  
    loginButton: {
      backgroundColor: "#1f9874",
    },
  };
  
  export default mainStyles;
  