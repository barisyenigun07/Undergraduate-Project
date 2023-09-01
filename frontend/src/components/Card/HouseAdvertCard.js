import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SimpleImageSlider from 'react-simple-image-slider';
import { useNavigate } from 'react-router-dom';

const HouseAdvertCard = ({item}) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ minWidth: 345 }}>
      <SimpleImageSlider
        width={345}
        height={200}
        images={item.imageUrls?.map(imageUrl => `http://localhost:8080/house-advert/${item.id}/image/download?filename=${imageUrl}`)}
        showBullets={true}
        showNavs={true}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {item.detail}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => navigate(`/house-advert/${item.id}`)}>Details</Button>
      </CardActions>
    </Card>
  )
}

export default HouseAdvertCard