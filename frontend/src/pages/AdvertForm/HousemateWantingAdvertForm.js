import { useFormik } from 'formik'
import React from 'react'

import { createHousemateWantingAdvert } from '../../api/housemateWantingAdvert.api';
import { Button, TextField } from '@mui/material';

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
                value={formik.values.title}
                onChange={formik.handleChange}
            />
            <TextField
                id='detail'
                name='detail'
                type='text'
                value={formik.values.detail}
                onChange={formik.handleChange}
            />
            <TextField
                id='maxFeeMonthly'
                name='maxFeeMonthly'
                type={"number"}
                value={formik.values.maxFeeMonthly}
                onChange={formik.handleChange}
            />
            <TextField
                id='gender'
                name='gender'
                type='text'
                value={formik.values.gender}
                onChange={formik.handleChange}
            />
            <TextField
                id='isSmoking'
                name='isSmoking'
                type="text"
                value={formik.values.isSmoking}
                onChange={formik.handleChange}
            />
            <TextField
                id='hasPet'
                name='hasPet'
                type='text'
                value={formik.values.hasPet}
                onChange={formik.handleChange}
            />
            <Button type='submit' color='error'>Publish</Button>
        </form>
    </div>
  )
}

export default HousemateWantingAdvertForm