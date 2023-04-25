import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const HouseCard = ({item}) => {
  return (
    <Card sx={{ minWidth: 345 }}>
      <CardMedia
        component="img"
        alt="item"
        image={`http://localhost:8080/house-advert/${item.id}/image/download?filename=${item.imageUrls[0]}`}
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
        <Button size="small">Details</Button>
        <Button size="small">Add Favorite</Button>
      </CardActions>
    </Card>
  )
}

export default HouseCard
