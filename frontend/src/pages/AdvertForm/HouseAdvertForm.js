import { Alert, Box, Button, CircularProgress, Divider, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Snackbar, Stack, TextField, Typography } from '@mui/material'
import { createHouseAdvert } from '../../api/houseAdvert.api'
import AppBar3 from '../../components/AppBar3';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const HouseAdvertForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);  
  const navigate = useNavigate();
  
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState(0.0);
  const [roomCount, setRoomCount] = useState("");
  const [area, setArea] = useState(0.0);
  const [warmingType, setWarmingType] = useState("");
  const [houseType, setHouseType] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [address, setAddress] = useState("");
  const [hasFurniture, setHasFurniture] = useState(false);
  const [isOnSite, setIsOnSite] = useState(false);
  const [dues, setDues] = useState(0.0);
  const [photos, setPhotos] = useState([]);

  const handleSubmit = async () => {
    setLoading(true);
    try {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("detail", detail);
        formData.append("price", price);
        formData.append("roomCount", roomCount);
        formData.append("area", area);
        formData.append("warmingType", warmingType);
        formData.append("houseType", houseType);
        formData.append("propertyType", propertyType);
        formData.append("address", address);
        formData.append("hasFurniture", hasFurniture);
        formData.append("isOnSite", isOnSite);
        formData.append("dues", dues);
        
        for (const key of Object.keys(photos)) {
            formData.append("photos", photos[key]);
        }

        await createHouseAdvert(formData);
        setLoading(false);
        setSuccess(true);
        setTimeout(() => {
            navigate("/");
            window.location.reload();
        }, 1000);
        
    }
    catch(err) {
        setLoading(false);
        
    }
  }
  return (
    <>
        <AppBar3/>
        <Typography sx={{ml: 5, mt: 3}} variant='h4'>Ev İlanı Ekle</Typography>
        <Divider/>
        <Box mt={3} sx={{display: "flex", justifyContent: "center"}}>
        <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
            <Box sx={{
                boxShadow: 5,
                padding: "10px"
            }}>
                <Stack spacing={2}>
                <TextField
                    label="Başlık"
                    id='title'
                    name='title'
                    type='text'
                    variant='standard'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    
                /> 
                <TextField
                    label="Detay"
                    id='detail'
                    name='detail'
                    type='text'
                    onChange={(e) => setDetail(e.target.value)}
                    value={detail}
                    multiline
                />
                </Stack>
            </Box>
            <Box sx={{boxShadow: 5, padding: "10px"}}>
                <Grid container spacing={2}>
                    <Grid item xs={6} mt={3}>
                        <Stack spacing={2}>   
                        <TextField
                            label="Fiyat"
                            id='price'
                            name='price'
                            type={"number"}
                            onChange={(e) => setPrice(e.target.value)}
                            value={price}
                            sx={{width: "600px"}}
                        /> 
                        <TextField  
                            label="Oda Sayısı"
                            id='roomCount'
                            name='roomCount'
                            type='text'
                            onChange={(e) => setRoomCount(e.target.value)}
                            value={roomCount}
                            sx={{width: "600px"}}
                        /> 
                        <TextField
                            label="Alan"
                            id='area'
                            name='area'
                            type={"number"}
                            onChange={(e) => setArea(e.target.value)}
                            value={area}
                            sx={{width: "600px"}}
                        /> 
                        <TextField
                            label="Isınma Tipi"
                            id='warmingType'
                            name='warmingType'
                            type='text'
                            onChange={(e) => setWarmingType(e.target.value)}
                            value={warmingType}
                            sx={{width: "600px"}}
                        />
                        <TextField
                            label="Ev Tipi"
                            id='houseType'
                            name='houseType'
                            type='text'
                            onChange={(e) => setHouseType(e.target.value)}
                            value={houseType}
                            sx={{width: "600px"}}
                        />
                        </Stack>    
                    </Grid>
                    <Grid item xs={6} mt={3} mb={3}>
                        <Stack spacing={2}>
                        <TextField
                            label="Emlak Tipi"
                            id='propertyType'
                            name='propertyType'
                            type='text'
                            onChange={(e) => setPropertyType(e.target.value)}
                            value={propertyType}
                            sx={{width: "600px"}}
                        /> 
                        <TextField
                            label="Adres"
                            id='address'
                            name='address'
                            type='text'
                            multiline
                            onChange={(e) => setAddress(e.target.value)}
                            value={address}
                            sx={{width: "600px"}}
                        />
                        <TextField
                            label="Aidat"
                            id='dues'
                            name='dues'
                            type='number'
                            onChange={(e) => setDues(e.target.value)}
                            value={dues}
                            sx={{width: "600px"}}
                        />
                        <FormLabel id='has-furniture-radio'>Eşyalı Mı?</FormLabel>
                        <RadioGroup
                            aria-labelledby='has-furniture-radio'
                            row
                            value={hasFurniture}
                            onChange={(e) => setHasFurniture(e.target.value)}
                        >
                            <FormControlLabel value={true} control={<Radio/>} label="Yes"/>
                            <FormControlLabel value={false} control={<Radio/>} label="No"/>
                        </RadioGroup>
                        <FormLabel id='is-on-site-radio'>Site İçi Mi?</FormLabel>
                        <RadioGroup
                            aria-labelledby='is-on-site-radio'
                            row
                            value={isOnSite}
                            onChange={(e) =>setIsOnSite(e.target.value)}
                        >
                            <FormControlLabel value={true} control={<Radio/>} label="Evet"/>
                            <FormControlLabel value={false} control={<Radio/>} label="Hayır"/>
                        </RadioGroup>
                        </Stack> 
                    </Grid>
                </Grid>
            </Box>
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
                        const images = event.target.files;
                        const imageArr = Array.from(images);
                        setPhotos((prevState) => [...prevState, ...imageArr]);
                    }}              
                />
            </Button>
            <Stack direction={"row"} spacing={1}> 
            {photos && 
                photos.map((photo, index) => {
                    return (
                        <div key={index}>
                            <img src={URL.createObjectURL(photo)} alt='previewedImage' width={"250px"} height={"150px"}/>

                        </div>
                    );
                }) 
            }
            </Stack> 
            <Button variant='contained' type='submit' color='error' startIcon={(loading) ? <CircularProgress sx={{color: "white"}}/> : null}>Publish</Button>
            </Stack>
        </form>
        </Box>
        <Snackbar open={success} autoHideDuration={6000}>
            <Alert severity={success ? "success" : "error"}>
                İlan yayınlama başarılı!
            </Alert>
        </Snackbar>
    </>
  )
}

export default HouseAdvertForm