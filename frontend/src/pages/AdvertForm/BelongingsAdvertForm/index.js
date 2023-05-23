import { useFormik } from 'formik'
import React from 'react'
import { createBelongingsAdvert } from '../../../api/belongingsAdvert.api';
import { Box, TextField } from '@mui/material';

const BelongingsAdvertForm = () => {
  const formik = useFormik({
    initialValues: {
        title: "",
        detail: "",
        price: 0.0,
        type: "",
        status: "",
        isShippable: false,
        isExchangeable: false,
        photos: []
    },

    onSubmit: async (values) => {
        try {
            const formData = new FormData();
            formData.append("title", values.title);
            formData.append("detail", values.detail);
            formData.append("price", values.price);
            formData.append("type", values.type);
            formData.append("status", values.status);
            formData.append("isShippable", values.isShippable);
            formData.append("isExchangeable", values.isExchangeable);
            formData.append("photos", values.photos);

            createBelongingsAdvert(formData);
        }

        catch (err) {
            console.log(err);
        }
    }
  })  
  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
            <Box sx={{p: "4px"}}>
                
            </Box>
        </form>
    </div>
  )
}

export default BelongingsAdvertForm