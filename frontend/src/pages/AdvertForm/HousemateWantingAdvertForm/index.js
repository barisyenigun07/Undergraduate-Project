import { useFormik } from 'formik'
import React from 'react'

import { createHousemateWantingAdvert } from './../../../api/housemateWantingAdvert.api';
import { TextField } from '@mui/material';

const HousemateWantingAdvertForm = () => {
  const formik = useFormik({
    initialValues: {
        title: "",
        detail: "",
        maxFeeMonthly: 0.0,
        gender: "",
        isSmoking: false,
        hasPet: false
    },

    onSubmit: async (values) => {
        try {
            await createHousemateWantingAdvert(values);
        } catch (error) {
            console.log(error);
        }
    }
  })
  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
            <TextField
                id='title'
                name='title'
                type='text'
                onChange={formik.handleChange}
            />
            <TextField
                id='detail'
                name='detail'
                type='text'
                onChange={formik.handleChange}
            />
            <TextField
            
            />
            <TextField
            
            />
            <TextField
            
            />
            <TextField
            
            />
        </form>
    </div>
  )
}

export default HousemateWantingAdvertForm