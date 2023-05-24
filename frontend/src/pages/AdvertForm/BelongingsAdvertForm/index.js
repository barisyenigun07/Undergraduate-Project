import { useFormik } from 'formik'
import React from 'react'
import { createBelongingsAdvert } from '../../../api/belongingsAdvert.api';
import { Box, Button, TextField } from '@mui/material';

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

            await createBelongingsAdvert(formData);
        }

        catch (err) {
            console.log(err);
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
              id='price'
              name='price'
              type={"number"}
              value={formik.values.price}
              onChange={formik.handleChange}
            />
            <TextField
              id='type'
              name='type'
              type='text'
              value={formik.values.type}
              onChange={formik.handleChange}
            />
            <TextField
              id='status'
              name='status'
              type='text'
              value={formik.values.status}
              onChange={formik.handleChange}
            />
            <TextField
              id='isShippable'
              name='isShippable'
              type='text'
              value={formik.values.isShippable}
              onChange={formik.handleChange}
            />
            <TextField
              id='isExchangeable'
              name='isExchangeable'
              type='text'
              value={formik.values.isExchangeable}
              onChange={formik.handleChange}
            />
            <Button variant='contained' component="label">
              Upload Photos
              <input
                type='file'
                multiple
                hidden
                onChange={(event) => {
                  formik.values.photos(event.currentTarget.files)
                }}
                />
            </Button>
        </form>
    </div>
  )
}

export default BelongingsAdvertForm