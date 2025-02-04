import React from "react";
import { Box, Typography, TextField, InputAdornment, Button } from "@mui/material";

const HomePage = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        fontFamily: "Arial, sans-serif",
        backgroundImage: "url('src/assets/images/landing_page_background.svg')", // Replace with SVG path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Fix background position
        minHeight: "100vh",
        mt: { xs: 8, md: 10 }, // Add margin-top to account for navbar
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center", md: "flex-start" },
          alignItems: "center",
          px: { xs: 2, md: 8 },
          py: { xs: 4, md: 10 },
        }}
      >
        {/* Left Content */}
        <Box
          sx={{
            maxWidth: 500,
            textAlign: { xs: "center", md: "left" },
            ml: { md: "15%" }, // Push content to the center from the left
            // mr: { md: "25%" }, // Adjust this value to position the right edge near the center
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: "2rem", md: "3rem" } }}>
            Find Your Dream Job <br />
            with AI-Powered <br />
            Recommendations
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ mb: 3, fontSize: { xs: "0.9rem", md: "1rem" } }}>
            Upload Your CV And Let Our AI Find The Best Matches For You
          </Typography>

          {/* Search Box */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 1,
              backgroundColor: "#fff",
              boxShadow: 2,
              borderRadius: 2,
              p: 1,
              alignItems: "center",
            }}
          >
            <TextField placeholder="Industry" variant="outlined" size="small" sx={{ flex: 1, width: { xs: "100%", sm: "auto" } }} />
            <TextField placeholder="Location" variant="outlined" size="small" sx={{ flex: 1, width: { xs: "100%", sm: "auto" } }} />
            <TextField placeholder="Search Job" variant="outlined" size="small" sx={{ flex: 2, width: { xs: "100%", sm: "auto" } }} />
            <Button variant="contained" sx={{ backgroundColor: '#1f9874' }}>Find Job</Button>
          </Box>
        </Box>

        {/* Right Side is intentionally left empty */}
      </Box>
    </Box>
  );
};

export default HomePage;
