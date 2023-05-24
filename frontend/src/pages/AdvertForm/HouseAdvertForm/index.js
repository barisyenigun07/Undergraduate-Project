import { Button, TextField } from '@mui/material'
import { createHouseAdvert } from '../../../api/houseAdvert.api'
import { useFormik } from 'formik'
import React from 'react'

const HouseAdvertForm = () => {
  const formik = useFormik({
    initialValues: {
        title: "",
        detail: "",
        price: 0.0,
        roomCount: "",
        area: 0.0,
        warmingType: "",
        houseType: "",
        propertyType: "",
        address: "",
        hasFurniture: false,
        isOnSite: false,
        dues: 0.0,
        photos: []
    },

    onSubmit: async (values) => {

        try {
            const formData = new FormData();
        
            formData.append("title", values.title);
            formData.append("detail", values.detail);
            formData.append("price", values.price);
            formData.append("roomCount", values.roomCount);
            formData.append("area", values.area);
            formData.append("warmingType", values.warmingType);
            formData.append("houseType", values.houseType);
            formData.append("propertyType", values.propertyType);
            formData.append("address", values.address);
            formData.append("hasFurniture", values.hasFurniture);
            formData.append("isOnSite", values.isOnSite);
            formData.append("dues", values.dues);
            formData.append("photos", values.photos);

            await createHouseAdvert(formData);
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
                onChange={formik.handleChange}
            />
            <TextField
                id='detail'
                name='detail'
                type='text'
                onChange={formik.handleChange}
            />
            <TextField
                id='price'
                name='price'
                type={"number"}
                onChange={formik.handleChange}
            />
            <TextField
                id='roomCount'
                name='roomCount'
                type='text'
                onChange={formik.handleChange}
            />
            <TextField
                id='area'
                name='area'
                type={"number"}
                onChange={formik.handleChange}
            />
            <TextField
                id='warmingType'
                name='area'
                type='text'
                onChange={formik.handleChange}
            />
            <TextField
                id='houseType'
                name='houseType'
                type='text'
                onChange={formik.handleChange}
            />
            <TextField
                id='propertyType'
                name='propertyType'
                type='text'
                onChange={formik.handleChange}
            />
            <TextField
                id='address'
                name='address'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.address}
            />
            <TextField
                id='hasFurniture'
                name='hasFurniture'
                type='text'
                
            />
            <TextField
                id='isOnSite'
            />
            <TextField
                id='dues'
            />
            <Button
                variant='contained'
                component="label"
            >
                Upload File
                <input
                    type='file'
                    multiple
                    hidden  
                    onChange={(event) => {
                        formik.values.photos(event.currentTarget.files);
                    }}              
                />
            </Button>

            <Button type='submit' color='error'>Publish</Button>
        </form>
    </div>
  )
}

export default HouseAdvertForm