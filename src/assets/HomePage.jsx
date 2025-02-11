import React from "react";
import { Box, Typography, TextField, InputAdornment, Button, FormControl,Select, MenuItem } from "@mui/material";
import { Work, LocationOn, Search } from "@mui/icons-material"; // Import icons
import { TextContent } from "../data/data";
import mainStyles from "./styling/mainStyles";

const HomePage = () => {
  return (
    <Box sx={mainStyles.mainContainer}>

      {/* Hero Section */}
      <Box sx={mainStyles.heroSection}>

        {/* Left Content */}
        <Box sx={mainStyles.leftContent}>

          {/* TITLE */}
          <Typography sx={mainStyles.title}>
            {TextContent.title.homePage}
          </Typography>

          {/* SUBTITLE */}
          <Typography sx={mainStyles.subtitle}>
            {TextContent.subtitle.homePage}
          </Typography>

          {/* Search Box */}
          <Box sx={mainStyles.searchBox}>
            
            {/* Industry Dropdown */}
            <FormControl size="small" sx={mainStyles.dropdown}>
              <Select
                displayEmpty
                defaultValue=""
                startAdornment={
                  <InputAdornment position="start">
                    <Work />
                  </InputAdornment>
                }
                renderValue={(selected) =>
                  selected ? selected : <span >{TextContent.labels.homePage.menuSelector}</span>
                }
                // industry placeholder ki visibility kam krne k liye aur padding k liye
                sx={mainStyles.industryIcon}
              >
                {/* <MenuItem value="" disabled>
                  Industry
                </MenuItem> */}
                <MenuItem value="tech">{TextContent.labels.homePage.menuItem1}</MenuItem>
                <MenuItem value="finance">{TextContent.labels.homePage.menuItem2}</MenuItem>
                <MenuItem value="health">{TextContent.labels.homePage.menuItem3}</MenuItem>
                <MenuItem value="education">{TextContent.labels.homePage.menuItem4}</MenuItem>
              </Select>
            </FormControl>


            {/* Divider */}
            <Box sx={mainStyles.divider}/>

            {/* Location Field */}
            <TextField
              placeholder={TextContent.placeholders.homePage.location}
              variant="outlined"
              size="small"
              sx={mainStyles.textField}
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
            <Box sx={mainStyles.divider}/>

            {/* Search Job Field */}
            <TextField
              placeholder={TextContent.placeholders.homePage.searchJob}
              variant="outlined"
              size="small"
              sx={mainStyles.textField}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
                disableUnderline: true,
              }}
            />
            <Button variant="contained" sx={mainStyles.searchButton}>
              {TextContent.buttons.homePage}
            </Button>
          </Box>

        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
