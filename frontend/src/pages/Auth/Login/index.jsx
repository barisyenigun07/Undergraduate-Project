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
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { useFormik } from "formik";
import { login } from "../../../api";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    
    onSubmit: async (values) => {
      try {
        await login(values);
        navigate("/home");
      }
      catch (error) {
        console.log(error);
      }
    }
  })
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
              <form onSubmit={formik.handleSubmit}>
              <Box sx={{ px: 8 }}>
                <TextField
                  id="username-textfield"
                  label="Username"
                  variant="outlined"
                  size="small"
                  name="username"
                  type={"text"}
                  onChange={formik.handleChange}
                  value={formik.values.username}
                  sx={{ width: 1 }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box sx={{ px: 8 }}>
                <TextField
                  id="password-textfield"
                  label="Password"
                  variant="outlined"
                  size="small"
                  name="password"
                  type={"password"}
                  sx={{ width: 1 }}
                  onChange={formik.handleChange}
                  value={formik.values.password}
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
                  type="submit"
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
              </form>
              
  
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
