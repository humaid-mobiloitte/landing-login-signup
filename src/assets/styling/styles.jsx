const primaryColor = "#1f9874";
const secondaryColor = "#025043";
const fontFamily = "Inter, sans-serif";
const borderRadius = "0.625em"; // 10px
const inputHeight = "3rem"; // 52px
const fontSizeSmall = "0.7rem";
const fontSizeMedium = "0.875em"; // 14px
const fontSizeLarge = "1.5rem"; // 24px
const spacingSmall = "0.625em"; // 10px
const spacingMedium = "2%";

const styles = {
  // Button styles
  button: {
    padding: spacingSmall,
    fontSize: fontSizeMedium,
    borderRadius,
    backgroundColor: primaryColor,
    textTransform: "none",
    fontFamily,
  },
  // Container styles
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  // Card styles
  card: {
    display: "flex",
    borderRadius: "1.4em", // 20px -> 1.25em
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
  },
  // FOR SIGNUP PAGE
  signUpCard: {
    maxWidth: "840px",
    maxHeight: "86vh",
  },
  // FOR LOGIN PAGE
  loginCard: {
    maxWidth: "900px",
    maxHeight: "auto",
  },
  // FOR OTP PAGES
  otpCards: {
    maxWidth: "780px",
    maxHeight: "auto",
  },
  // Image container styles
  imageContainer: {
    width: "50%",
    height: "100%",
    backgroundPosition: "center",
    display: { xs: "none", md: "block" },
  },
  // Image styles
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  // Input group styles
  inputGroup: {
    fontSize: "0.8rem",
    fontFamily,
  },
  // Input field styles
  inputField: {
    width: "100%",
    borderRadius,
    "& .MuiOutlinedInput-root": {
      borderRadius,
      height: inputHeight,
    },
    "& input::placeholder": {
      fontFamily,
      fontSize: "0.85rem",
    },
  },
  // Password input field styles for signup
  signUpPasswordInputField: { margin: "3% 0" },
  // Password input field styles for login
  loginPasswordInputField: { marginTop: "3%" },
  // Left card section styles
  leftCard: {
    width: "100%",
    padding: `${spacingMedium} 2.8% 0 2.8%`,
  },
  // Title styles
  title: {
    margin: "0 0",
    padding: "0 0",
    fontWeight: 800,
    fontSize: fontSizeLarge,
    fontFamily,
    textTransform: "none",
  },
  // Subtitle styles
  subtitle: {
    fontSize: "0.7rem",
    fontFamily,
    width: "100%",
  },
  // SUBTITLE FOR SIGNUP
  signUpSubtitle: { mt: -0.5, mb: 0.8 },
  // SUBTITLE FOR LOGIN
  loginSubtitle: { mt: -0.4, mb: 1 },
  // Error text styles
  errorText: {
    fontSize: fontSizeSmall,
    marginLeft: "-0.8rem",
    marginTop: "0.2rem",
    position: "absolute",
  },
  // Checkbox error text styles
  checkBoxErrorText: {
    fontSize: fontSizeSmall,
    marginTop: "-18px",
    position: "relative",
  },
  // OR text styles
  orTextStyle: {
    fontFamily,
    textAlign: "center",
    fontSize: "0.9rem",
  },
  // Google button styles
  googleButtonStyle: { backgroundColor: "#ffffff", color: "black" },
  // Google icon styles
  googleIconStyle: { width: "25px", height: "auto", marginRight: "10px" },
  // Bottom text for login/signup pages
  bottomTextForBoth: {
    marginTop: "1%",
    textAlign: "center",
    fontSize: "0.9rem",
  },
  // Link text styles
  linkTextStyle: {
    textDecoration: "none",
    color: secondaryColor,
  },
  // Forgot password text styles
  forgotPasswordStyle: { cursor: "pointer", color: secondaryColor },
  // Remember Me and Forgot Password row
  rememMeForgotPass: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  // OTP input container styles
  otpInputContainer: {
    display: "flex",
    gap: 2,
    justifyContent: "center",
  },
  // OTP digit styles
  otpDigitStyles: { textAlign: "center", fontSize: "20px", padding: "0" },
  // OTP box styles
  otpBox: {
    width: "3.5rem",
    height: "2.6rem",
    "& .MuiOutlinedInput-root": { height: "100%", padding: "0" },
    "& .MuiOutlinedInput-input": { padding: "0", height: "100%" },
  },
  // OTP resend text styles
  resendOTP: { cursor: "pointer", color: secondaryColor, fontWeight: "bold" },
  // OTP timer styles
  timerOTP: { color: "gray", fontWeight: "bold" },
  // OTP error message styles
  errorOTP: { fontSize: fontSizeSmall, marginTop: "10px" },
  // Resend OTP message styles
  resendOTPMessage: {
    backgroundColor: "rgba(83,182,81,1)",
    color: "white",
    padding: "10px",
    textAlign: "center",
    borderRadius: "4px",
    marginTop: "10px",
  },
  // OTP success button styles
  otpSuccessButtons: { backgroundColor: "lightgrey", color: "black" },
  // OTP success page icon styles
  otpSuccIcon: { width: "7rem", height: "auto", color: primaryColor },
  // OTP success card content alignment
  otpSuccCardContent: { alignItems: "center" },
  // OTP success subtitle alignment
  otpSuccSubtitle: { textAlign: "center" },
  // Card content layout
  cardContent: {
    display: "flex",
    flexDirection: "column",
    gap: "1.08rem",
  },
};

export default styles;
