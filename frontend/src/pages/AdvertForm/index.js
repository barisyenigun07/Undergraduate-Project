import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';

const AdvertForm = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      detail: ""
    }
  })
  return (
    <>
      <Box flexDirection={"row"}>
        
      </Box>  
    </>
  )
}

export default AdvertForm;