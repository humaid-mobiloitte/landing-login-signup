import React from "react";
import { Box, Typography, TextField, InputAdornment, Button, FormControl,Select, MenuItem } from "@mui/material";
import { Work, LocationOn, Search } from "@mui/icons-material"; // Import icons
import styles from "./styling/styles";

const HomePage = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        fontFamily: "inter",
        backgroundImage:{md:"url('src/assets/images/HOMESCREEN_background.png')",xs:'none'},
        // backgroundImage: "url('src/assets/images/landing_page_background.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "91vh", //scrolling rok di
        mt: { xs: 16, md: 10 },
        overflow:'hidden'
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center", md: "flex-start" },
          alignItems: "center",
          px: { xs: 2, md: 'none' },
          py: { xs: 4, md: 20 },
        }}
      >
        {/* Left Content */}
        <Box
          sx={{
            maxWidth: 620,
            textAlign: { xs: "center", md: "left" },
            ml: { md: "14%" },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "900",
              mb: 2,
              fontSize: { xs: "2rem", md: "3.4rem" },
              fontFamily: "inter",
              lineHeight:'140%'
            }}
          >
            Find Your Dream Job with AI-Powered Recommendations
          </Typography>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            sx={{ mb: 3, fontSize: { xs: "0.9rem", md: "1.2rem" }, fontFamily: "inter" }}
          >
            Upload Your CV And Let Our AI Find The Best Matches For You
          </Typography>

          {/* Search Box */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              // gap: 1,
              backgroundColor: "#fff",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Custom shadow
              borderRadius: 2,
              p: 1,
              alignItems: "center",
              border: "1px solid rgba(0, 0, 0, 0.1)", // Optional border for more definition
              // YHA SE SHURU KRNA HAI
              width:"100%"
            }}
          >
            {/* Industry Dropdown */}
            <FormControl
              
              size="small"
              sx={{
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
              }}
            >
              <Select
                displayEmpty
                defaultValue=""
                startAdornment={
                  <InputAdornment position="start">
                    <Work />
                  </InputAdornment>
                }
                renderValue={(selected) =>
                  selected ? selected : <span style={{ color: "rgba(0, 0, 0, 0.5)" }}>Industry</span>
                }
                sx={{padding:'0.2rem'}}
              >
                {/* <MenuItem value="" disabled>
                  Industry
                </MenuItem> */}
                <MenuItem value="tech">Technology</MenuItem>
                <MenuItem value="finance">Finance</MenuItem>
                <MenuItem value="health">Healthcare</MenuItem>
                <MenuItem value="education">Education</MenuItem>
              </Select>
            </FormControl>


            {/* Divider */}
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                height: "1.5rem",
                width: "1px",
                backgroundColor: "#ccc",
              }}
            />

            {/* Location Field */}
            <TextField
              placeholder="Location"
              variant="outlined"
              size="small"
              sx={{
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
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOn />
                  </InputAdornment>
                ),
                disableUnderline: true,
              }}
            />

            {/* Divider */}
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                height: "1.5rem",
                width: "1px",
                backgroundColor: "#ccc",
              }}
            />

            {/* Search Job Field */}
            <TextField
              placeholder="Search Job"
              variant="outlined"
              size="small"
              sx={{
                flex: 2,
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
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
                disableUnderline: true,
              }}
            />

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#1f9874",
                padding: "0.6rem 1.4rem",
                textTransform:'none',
                borderRadius:'10px'
              }}
            >
              Find Job
            </Button>
          </Box>

        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
