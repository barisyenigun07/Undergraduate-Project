import React from "react";
import {
  Box,
  TextField,
  Button,
  Grid,
  Paper,
  Typography,
  Stack,
  Divider,
  Select,
  MenuItem,
  InputLabel,
  FormControl
} from "@mui/material";

import {useFormik} from "formik";
import validationSchema from './validations'



const Register = () => {

  const formik = useFormik({
    initialValues:{ 
      name: "",
      username: "",
      phone: "",
      email: "",
      password: "",
      passwordConfirm:""
    },
    onSubmit: async(values, bag) =>{
      console.log(values);
    },
    validationSchema
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
          <Box
          >
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
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Stack spacing={2}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "30px",
                    color: "#000",
                  }}
                >
                  REGISTER
                </Typography>
                <br /> <br />
              </Box>
              <form 
                  onSubmit={formik.handleSubmit}
                >
              <Box sx={{ px: 8,}}>
                <TextField
                  id="name"
                  label="Name"
                  variant="outlined"
                  size="small"
                  sx={{ width: 1, maxWidth: "540px" }}
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  error={formik.touched.name && formik.errors.name}
                />
              </Box>
              <Box sx={{ px: 8,  mt:2}}>
                <TextField
                  id="username"
                  label="Username"
                  variant="outlined"
                  size="small"
                  sx={{ width: 1, maxWidth: "540px" }}
                  name="username"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.username}
                  error={formik.touched.username && formik.errors.username}
                />
              </Box>
              <Box sx={{ px: 8, mt:2 }}>
                <TextField
                  id="phone-number"
                  label="Phone Number"
                  variant="outlined"
                  size="small"
                  sx={{ width: 1, maxWidth: "540px" }}
                  name="phone"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                  error={formik.touched.phone && formik.errors.phone}
               />
              </Box>
              <Box sx={{ px: 8, mt:2 }}>
                <TextField
                  id="email"
                  label="Email"
                  variant="outlined"
                  size="small"
                  sx={{ width: 1, maxWidth: "540px" }}
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  error={formik.touched.email && formik.errors.email}
                 />
              </Box>
              <Box sx={{ px: 8,mt:2 }}>
                <TextField
                  id="password"
                  label="Password"
                  variant="outlined"
                  size="small"
                  sx={{ width: 1, maxWidth: "540px" }}
                  name="password"
                  type={"password"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  error={formik.touched.password && formik.errors.password}
                />
              </Box>
              <Box sx={{ px: 8, mt:2 }}>
                <TextField
                  id="password-again"
                  label="Password Again"
                  variant="outlined"
                  size="small"
                  sx={{ width: 1, maxWidth: "540px" }}
                  name="passwordConfirm"
                  type={"password"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.passwordConfirm}
                  error={formik.touched.passwordConfirm && formik.errors.passwordConfirm}
                />
              </Box>

              {/*
              <Box sx={{ px: 8, textAlign: 'left', mt:2 }}>
                <FormControl fullWidth>
                  <InputLabel>Select the type of user</InputLabel>
                  <Select
                  defaultValue={"Student"}
                    label="Select the type of user"
                    onChange={handleChange}
                  >
                    <MenuItem value={"Student"} >Student</MenuItem>
                    <MenuItem value={"House Owner"} >House Owner</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              */}
              <Box sx={{ px: 8
                
                , mt:2 }}>
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
                    maxWidth: "540px",
                  }}
                >
                  Register
                </Button>
              </Box>
              </form>

              <Divider>Or</Divider>

              <Box sx={{ px: 8 }}>
                <Button
                  href="/login"
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
                      color: "#ffff",
                    },
                    maxWidth: "540px",
                  }}
                >
                  Login
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

export default Register;
