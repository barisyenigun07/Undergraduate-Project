import { height } from "@mui/system";
import React from "react";
import bg from "./bg-logo.jpg";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

const Landing = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height:'100vh',
        backgroundImage: `url(${bg})`
      }}
    >
      <TextField
        id="outlined-basic"
        label="Konum, ilan no ya da detay bilgiyi girerek arayın (Örn. 1234-123456)"
        variant="outlined"
        sx={{
          backgroundColor: "white",
          borderRadius: 5,
          width:'550px'
        }}
      />
      <Button href="#" variant="contained" sx={{ml:1}}>Ara</Button>
    </Box>
  );
};

export default Landing;
