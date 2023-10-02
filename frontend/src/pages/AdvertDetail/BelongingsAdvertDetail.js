import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Phone } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import { useParams } from 'react-router-dom'
import { getBelongingsAdvert } from './../../api/belongingsAdvert.api';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import AppBar3 from './../../components/AppBar3';
import Footer from './../../components/Footer/Footer';


const BelongingsAdvertDetail = () => {
  const [belongingsAdvert, setBelongingsAdvert] = useState({});
  
  const { id } = useParams();
  
  useEffect(() => {
    const getBelongingsAd = async () => {
        const belongingsAd = await getBelongingsAdvert(id);
        setBelongingsAdvert(belongingsAd);
    }

    getBelongingsAd();
  }, [id]);
  return (
    <Box>
        {/*<Carousel
            autoPlay={false}
            swipeable={true}
            draggable={true}
            showDots={true}
            infinite={true}
            partialVisbile={true}
        >
            {belongingsAdvert?.imageUrls?.map((imageUrl, index) => {
                return (
                    <div className='slider' key={index}>
                        <img src={`http://localhost:8080/belongings-advert/${belongingsAdvert.id}/image/download?filename=${imageUrl}`} alt='belongings' width={"550px"} height={"300px"}/>
                    </div>
                );
            })}
        </Carousel>*/}
  
        
  
  
        
        <AppBar3/>
        {/*<Carousel
            responsive={responsive}
            autoPlay={false}
            swipeable={true}
            draggable={true}
            showDots={true}
            infinite={true}
            partialVisbile={false}
            dotListClass='custom-dot-list-style'
        >
            {houseAdvert?.imageUrls?.map((imageUrl, index) => {
                return (
                    <div className='slider' key={index}>
                        <img src={`http://localhost:8080/house-advert/${houseAdvert?.id}/image/download?filename=${imageUrl}`} alt='house' width={"550px"} height={"300px"}/>
                    </div>
                );
            })}
          </Carousel>*/}
          <Box mt={2} sx={{display: "flex", justifyContent: "center"}}>
          {belongingsAdvert?.imageUrls?.map(imageUrl => <img src={`http://localhost:8080/house-advert/${belongingsAdvert?.id}/image/download?filename=${imageUrl}`} alt='House' style={{margin: "2px"}} width={"550px"} height={"300px"}/>)}
          </Box>
        <Box mt={3} sx={{display: "flex", justifyContent: "center"}}>
            <Box m={2} p={2} sx={{boxShadow: 12}}>
                <Typography variant='h4'>{belongingsAdvert?.title}</Typography>
                <br/> <br/>
                <Typography variant='h6'>Detail <br/> {belongingsAdvert?.detail}</Typography>
                <br/> <br/>
                <Typography> Price: {belongingsAdvert?.price}₺</Typography>
                <Typography>Type: {belongingsAdvert?.type}</Typography>
                <Typography>Status: {belongingsAdvert?.status}</Typography>
                {belongingsAdvert?.isShippable ? <Typography>Is Shippable: Yes</Typography> : <Typography>Is Shippable: No</Typography>}
                {belongingsAdvert?.isExchangeable ? <Typography>Is Exchangeable: Yes</Typography> : <Typography>Is Exchangeable: No</Typography>}
                
              </Box>
              <Box width={350} height={350} m={2}>
                <Box sx={{boxShadow: 12}}>
                  <Link style={{textDecoration: "none", color: "black"}} to={`/user/${belongingsAdvert?.userResponse?.id}`}> 
                  <Typography variant='h5'>Publisher Info</Typography> <br/>
                  
                  {belongingsAdvert?.userResponse?.profilePhotoUrl == null ? <Avatar>{belongingsAdvert?.userResponse?.username[0]}</Avatar> : <Avatar src={`http://localhost:8080/user/${belongingsAdvert?.userResponse?.id}/image/download`} sx={{width: "100px", height: "100px"}}/>}
                  
                  <Typography>{belongingsAdvert?.userResponse?.name}</Typography>
                  <Typography><Phone/> Contact Info: {belongingsAdvert?.userResponse?.contactInfo}</Typography>
                  </Link>
                </Box>
                
              </Box>
            
        </Box>
        <Footer/>
    </Box>
    
  )
}

export default BelongingsAdvertDetail