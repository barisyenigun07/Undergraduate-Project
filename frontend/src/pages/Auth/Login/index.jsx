import React from "react";
import {
  Box,
  TextField,
  Button,
  Grid,
  Paper,
  Typography,
  Stack,
  InputAdornment,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Login = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={7}             
          className="backgroundMain"
          sx={{            
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
         }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "44px",
                color: "#ffff",
              }}
            >
              WELCOME TO{<br />} İYTEMLAK!
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Box sx={{ textAlign: "center", mt: 14 }}>
            <Stack spacing={2}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "30px",
                    color: "#000",
                  }}
                >
                  LOGIN
                </Typography>
                <br /> <br />
                <br /> <br />
              </Box>
              <Box sx={{ px: 8 }}>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  size="small"
                  sx={{ width: 1 }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box sx={{ px: 8 }}>
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  size="small"
                  sx={{ width: 1 }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#3949AB",
                    textAlign: "center",
                  }}
                >
                  Forgot password?
                </Typography>
              </Box>

              <Box sx={{ px: 8 }}>
                <Button
                  href="/login"
                  variant="contained"
                  sx={{
                    borderRadius: 5,
                    bgcolor: "#8E1904",
                    p: 1,
                    width: 1,
                    "&:hover": {
                      bgcolor: "#571104",
                    },
                  }}
                >
                  Login
                </Button>
              </Box>
              <Divider>Or</Divider>

              <Box sx={{ px: 8 }}>
                <Button
                  href="/register"
                  variant="contained"
                  sx={{
                    color: "#3949AB",
                    borderRadius: 5,
                    border: 1,
                    borderColor: "#3949AB",
                    bgcolor: "#fff",
                    p: 1,
                    width: 1,
                    "&:hover": {
                      bgcolor: "#3949AB",
                      color: "#ffff"
                    },
                  }}
                >
                  Register
                </Button>
              </Box>
            </Stack>
          </Box>
        </Grid>
      </Grid>
      {/*
       
        <Button href="#" variant="contained" sx={{ ml: 1 }}>
          Ara
        </Button>
        */}
    </>
  );
};

export default Login;
