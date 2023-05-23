import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material"


const BelongingsCard = ({item}) => {
    return (
      <Card sx={{minWidth: 345}}>
        <CardMedia
          component={"img"}
          alt='item'
          image={`http://localhost:8080/belongings-advert/${item.id}/image/download?filename=${item.imageUrls[0]}`}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component={"div"}>
            {item.title}
          </Typography>
          <Typography variant='body2' color={"text.secondary"}>
            {item.detail}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>Details</Button>
          <Button size='small'>Add Favorite</Button>
        </CardActions>
      </Card>
    )
  }

  export default BelongingsCard;