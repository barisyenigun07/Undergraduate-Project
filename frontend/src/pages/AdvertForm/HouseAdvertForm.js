import { Box, Button, Divider, TextField, Typography } from '@mui/material'
import { createHouseAdvert } from '../../api/houseAdvert.api'
import { useFormik } from 'formik'
import AppBar3 from '../../components/AppBar3';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const HouseAdvertForm = () => {
  const navigate = useNavigate();  
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
            
            for (const key of Object.keys(values.photos)) {
                formData.append("photos", values.photos[key]);
            }

            await createHouseAdvert(formData);
            navigate("/home");
        }
        catch (err) {
            console.log(err);
        }
        
    }
  })  
  return (
    <div>
        <AppBar3/>
        <Typography sx={{ml: 5, mt: 3}} variant='h4'>Add House Advert</Typography>
        <Divider></Divider>
        <Box mt={3} sx={{display: "flex", justifyContent: "center"}}>
        <form onSubmit={formik.handleSubmit}>
            <TextField
                label="Title"
                id='title'
                name='title'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.title}
                sx={{width: "600px"}}
            /> <br/> <br/>
            <TextField
                label="Detail"
                id='detail'
                name='detail'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.detail}
                sx={{width: "600px"}}
            /> <br/> <br/>
            <TextField
                label="Price"
                id='price'
                name='price'
                type={"number"}
                onChange={formik.handleChange}
                value={formik.values.price}
                sx={{width: "600px"}}
            /> <br/> <br/>
            <TextField  
                label="Room Count"
                id='roomCount'
                name='roomCount'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.roomCount}
                sx={{width: "600px"}}
            /> <br/> <br/>
            <TextField
                label="Area"
                id='area'
                name='area'
                type={"number"}
                onChange={formik.handleChange}
                value={formik.values.area}
                sx={{width: "600px"}}
            /> <br/> <br/>
            <TextField
                label="Warming Type"
                id='warmingType'
                name='warmingType'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.warmingType}
                sx={{width: "600px"}}
            /> <br/> <br/>
            <TextField
                label="House Type"
                id='houseType'
                name='houseType'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.houseType}
                sx={{width: "600px"}}
            /> <br/> <br/>
            <TextField
                label="Property Type"
                id='propertyType'
                name='propertyType'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.propertyType}
                sx={{width: "600px"}}
            /> <br/> <br/>
            <TextField
                label="Address"
                id='address'
                name='address'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.address}
                sx={{width: "600px"}}
            /> <br/> <br/>
            <TextField
                label="Has Furniture"
                id='hasFurniture'
                name='hasFurniture'
                type={"text"}
                onChange={formik.handleChange}
                value={formik.values.hasFurniture}
                sx={{width: "600px"}}
            /> <br/> <br/>
            <TextField
                label="Is On Site"
                id='isOnSite'
                name='isOnSite'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.isOnSite}
                sx={{width: "600px"}}
            /> <br/> <br/>
            <TextField
                label="Dues"
                id='dues'
                name='dues'
                type='number'
                onChange={formik.handleChange}
                value={formik.values.dues}
                sx={{width: "600px"}}
            /> <br/> <br/>
            <Button
                variant='contained'
                component="label"
            >
                Upload File
                <input
                    id='file'
                    name='file'
                    type='file'
                    multiple
                    hidden  
                    onChange={(event) => {
                        formik.values.photos = (event.currentTarget.files);
                        console.log(formik.values.photos);
                    }}              
                />
            </Button> <br/> <br/>

            <Button variant='contained' type='submit' color='error'>Publish</Button>
        </form>
        </Box>
    </div>
  )
}

export default HouseAdvertForm