// HomePage.jsx ki
// App.jsx ki
// TopNavBar.jsx ki
import { TextContent } from "../../data/data";

// Common style variables
const commonFontFamily = "inter";
const commonBorderRadius = "10px";
const commonFontSizeSmall = "0.8rem";
const commonFontSizeMedium = "1rem";
const commonFontWeightLight = "300";
const commonFontWeightBold = "900";
const commonButtonPadding = "0.6rem 1.4rem";
const commonButtonBackgroundColor = "#1f9874";
const commonTextColor = "rgba(0, 0, 0, 0.5)";

const mainStyles = {
    // =========================
    // Main Container Styles
    // =========================
    mainContainer: {
        backgroundImage: { md: TextContent.images.backgroundImage, xs: 'none' },
        flexGrow: 1,
        fontFamily: commonFontFamily,
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
        fontWeight: commonFontWeightBold,
        mb: 2,
        fontSize: { xs: "2rem", md: "3.4rem" },
        fontFamily: commonFontFamily,
        lineHeight: "140%",
    },
    subtitle: {
        typography: "subtitle1",
        color: "text.textPrimary",
        mb: 3,
        fontSize: { xs: commonFontSizeSmall, md: "1.2rem" },
        fontFamily: commonFontFamily,
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
        fontFamily: commonFontFamily,
        "& .MuiOutlinedInput-root": {
            "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
            },
        },
        "& .MuiInputBase-input": {
            fontSize: commonFontSizeSmall,
            fontFamily: commonFontFamily,
        },
    },
    // INDUSTRY ICON 
    industryIcon: {
        padding: '0.2rem',
        color: commonTextColor,
    },

    // DIVIDER
    divider: {
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
        fontFamily: commonFontFamily,
        "& .MuiOutlinedInput-root": {
            "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
            },
        },
        "& .MuiInputBase-input::placeholder": {
            fontSize: commonFontSizeSmall,
            fontFamily: commonFontFamily,
        },
    },

    // =========================
    // Button Styles
    // =========================
    searchButton: {
        backgroundColor: commonButtonBackgroundColor,
        padding: commonButtonPadding,
        textTransform: "none",
        borderRadius: commonBorderRadius,
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
        fontFamily: commonFontFamily,
    },

    logoContainer: {
        display: "flex",
        alignItems: "center",
        flexGrow: 1,
    },
    logoImage: {
        maxWidth: '14rem',
        height: 'auto',
    },

    navBarPClayout: {
        flexGrow: 0,
        display: {
            xs: 'none',
            md: 'flex'
        }
    },

    navBarButtons: {
        ml: 3,
        my: 2,
        color: 'black',
        display: 'block',
        fontFamily: commonFontFamily,
        textTransform: 'none',
        '&:hover': {
            backgroundColor: 'transparent'
        },
        fontWeight: commonFontWeightLight,
        fontSize: commonFontSizeMedium,
        padding: 0,
    },

    // RESPONSIVE MENU
    responsiveMenuBox: {
        display: {
            xs: 'flex',
            md: 'none'
        },
    },

    responsiveMenuButton: {
        my: 1,
        backgroundColor: commonButtonBackgroundColor,
        minWidth: "45px",
        minHeight: "45px",
        width: { xs: "45px", md: "53px" },
        height: { xs: "45px", md: "53px" },
        borderRadius: commonBorderRadius,
        textTransform: "none",
        fontFamily: commonFontFamily,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 0,
    },

    menuIconStyle: {
        color: 'white',
        fontSize: 24,
    },

    menuItems: {
        textTransform: "none",
        fontFamily: commonFontFamily,
    },

    dropDownLayout: {
        display: {
            xs: 'block',
            md: 'none',
        },
    },
    // SMALL SCREEN LOGIN AND SIGNUP BUTTONS PARENT
    mobileButtonParent: {
        // Shared styles for all buttons inside this parent
        '& button': {
            minWidth: '100px',
            minHeight: '45px',
            width: '100px',
            height: '45px',
            borderRadius: commonBorderRadius,
            fontFamily: commonFontFamily,
            fontSize: commonFontSizeMedium,
            textTransform: 'none',
        },
    },

    // NORMAL PC LOGIN AND SIGNUP BUTTONS PARENT
    pcButtonParent: {
        display: { xs: 'none', md: 'flex' },
        ml: 2,
        '& button': {
            minWidth: '100px',
            minHeight: '45px',
            width: '120px',
            height: '53px',
            borderRadius: commonBorderRadius,
            textTransform: "none",
            fontFamily: commonFontFamily,
            fontWeight: commonFontWeightLight,
            fontSize: commonFontSizeMedium,
        },
    },

    signUpButton: {
        border: "none",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        color: "black",
    },

    loginButton: {
        backgroundColor: commonButtonBackgroundColor,
    },
};

export default mainStyles;