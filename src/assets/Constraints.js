// constraints.js
export const emailConstraints = {
    pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}",
    maxLength: 100,
    helperText: "Please enter a valid email address",
  };
  
  export const passwordConstraints = {
    minLength: 6,
    maxLength: 20,
    helperText: "Password must be between 6 and 20 characters",
  };
  