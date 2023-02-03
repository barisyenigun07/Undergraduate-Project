import React from "react";
import {
  Box,
  TextField,
  Button,
  Grid,
  Typography,
  Stack,
  Divider,
  Link,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Alert,
} from "@mui/material";

import { useFormik } from "formik";
import validationSchema from "./validations";

import { fetchRegister } from "../../../api";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      username: "",
      contactInfo: "",
      email: "",
      password: "",
      passwordRepeat: "",
      role: "",
    },
    validationSchema,
    onSubmit: async (values, bag) => {
      try {
        const registerResponse = await fetchRegister(values);
        console.log(values);
      } catch (error) {
        bag.setErrors({ general: error.response.data.message });
      }
    },
  });

  return (
    <>
      <Grid container spacing={2}>
        <Grid
          item
          xs={7}
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
              <Box>
                {formik.errors.general && (
                  <Alert status="error">{formik.errors.general}</Alert>
                )}
              </Box>
              <form onSubmit={formik.handleSubmit}>
                <Box sx={{ px: 8 }}>
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
                    helperText={formik.touched.name && formik.errors.name}
                  />
                </Box>
                <Box sx={{ px: 8, mt: 2 }}>
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
                    helperText={
                      formik.touched.username && formik.errors.username
                    }
                  />
                </Box>
                <Box sx={{ px: 8, mt: 2 }}>
                  <TextField
                    id="phone-number"
                    label="Phone Number"
                    variant="outlined"
                    size="small"
                    sx={{ width: 1, maxWidth: "540px" }}
                    name="contactInfo"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                    helperText={formik.touched.phone && formik.errors.phone}
                  />
                </Box>
                <Box sx={{ px: 8, mt: 2 }}>
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
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </Box>
                <Box sx={{ px: 8, mt: 2 }}>
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
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                  />
                </Box>
                <Box sx={{ px: 8, mt: 2 }}>
                  <TextField
                    id="password-again"
                    label="Password Again"
                    variant="outlined"
                    size="small"
                    sx={{ width: 1, maxWidth: "540px" }}
                    name="passwordRepeat"
                    type={"password"}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.passwordConfirm}
                    helperText={
                      formik.touched.passwordConfirm &&
                      formik.errors.passwordConfirm
                    }
                  />
                </Box>

                <Box sx={{ px: 8, textAlign: "left", mt: 2 }}>
                  <FormControl fullWidth>
                    <InputLabel>Select the type of user</InputLabel>
                    <Select
                      id="role"
                      name="role"
                      defaultValue={"Student"}
                      label="Select the type of user"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.role}
                      helperText={formik.touched.role && formik.errors.role}
                    >
                      <MenuItem value={"Student"}>Student</MenuItem>
                      <MenuItem value={"House Owner"}>House Owner</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <Box
                  sx={{
                    px: 8,

                    mt: 2,
                  }}
                >
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
              <Link href="/home">Üye Olmadan Devam Et</Link>
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
