// // src/components/TextContent.js
// // FOR LOGIN, SIGNUP, OTP, OTP-SUCCESS PAGES
// const TextContent = {
//     login: {
//       title: "Login now",
//       subtitle: "Welcome back! Please enter your details below. Lorem ipsum dolor sit amet consectetur.",
//       placeholders: {
//         email: "Enter your email",
//         password: "Enter your password",
//       },
//       labels: {
//         rememberMe: "Remember me",
//         forgotPassword: "Forgot password?",
//       },
//       buttons: {
//         login: "Log in",
//         googleSignIn: "Sign in with Google",
//       },
//       links: {
//         dontHaveAccount: "Don't have an account?",
//         signUp: "Sign up",
//       },
//       orText: "OR",
//     },
  
//     signup: {
//       title: "Create Your Account",
//       subtitle: "To get started, please create an account with us. It's a quick and straightforward process that will only take a few minutes.",
//       placeholders: {
//         email: "Enter email address",
//         password: "Enter password",
//         reenterPassword: "Re-enter password",
//       },
//       labels: {
//         termsAndConditions: "I agree to your Terms & Conditions and Privacy Policy.",
//       },
//       buttons: {
//         createAccount: "Create an account",
//         googleSignIn: "Sign in with Google",
//       },
//       links: {
//         alreadyHaveAccount: "Already have an account?",
//         login: "Login",
//       },
//       orText: "OR",
//     },
  
//     otpVerification: {
//       title: "OTP Verification",
//       subtitle: "Please enter the 6-digit verification code that was sent to your email. The code is valid for 3 minutes.",
//       buttons: {
//         verify: "Verify OTP",
//       },
//       labels: {
//         resend: "Resend",
//         resendMessage: "A new OTP has been sent to your email.",
//       },
//       errors: {
//         invalidOtp: "Invalid OTP. Please try again.",
//       },
//       placeholders: {
//         otpDigit: "•", // Placeholder for OTP input fields
//       },
//     },
  
//     accountCreated: {
//       title: "Account created",
//       subtitle: "Your account has been created successfully!",
//       completeProfileTitle: "Complete your profile",
//       buttons: {
//         uploadResume: "Upload your CV/Resume",
//         createResume: "Create your CV/Resume",
//       },
//     },
//   };
  
//   export default TextContent;

// src/components/TextContent.js
const TextContent = {
  title: {
    login: "Login now",
    signup: "Create Your Account",
    otp: "OTP Verification",
    accountCreated: "Account created",
    accountCreated_T2: "Complete your profile"
  },

  subtitle: {
    login: "Welcome back! Please enter your details below. Lorem ipsum dolor sit amet consectetur.",
    signup: "To get started, please create an account with us. It's a quick and straightforward process that will only take a few minutes.",
    otp: "Please enter the 6-digit verification code that was sent to your email. The code is valid for 3 minutes.",
    accountCreated: "Your account has been created successfully!",
  },

  placeholders: {
    email: "Enter email address",
    password: "Enter password",
    reenterPassword: "Re-enter password",
  },

  labels: {
    rememberMe: "Remember me",
    forgotPassword: "Forgot password?",
    termsAndConditions: "I agree to your Terms & Conditions and Privacy Policy.",
  },

  buttons: {
    login: "Log in",
    createAccount: "Create an account",
    googleSignIn: "Sign in with Google",
    verifyOtp: "Verify OTP",
    uploadResume: "Upload your CV/Resume",
    createResume: "Create your CV/Resume",
  },

  links: {
    dontHaveAccount: "Don't have an account?",
    signUp: "Sign up",
    alreadyHaveAccount: "Already have an account?",
    login: "Login",
    resendOtp: "Resend",
  },

  misc: {
    orText: "OR",
    otpSuccessIconColor: "#1f9874",
  },
};

export default TextContent;
