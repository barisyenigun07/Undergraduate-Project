import { Card, CardContent, Typography, CardActions, Button } from "@mui/material"
import SimpleImageSlider from "react-simple-image-slider/dist/ImageSlider";


const BelongingsCard = ({item}) => {
    return (
      <Card sx={{minWidth: 345}}>
        <SimpleImageSlider
          width={345}
          height={200}
          images={item.imageUrls?.map(imageUrl => `http://localhost:8080/belongings-advert/${item.id}/image/download?filename=${imageUrl}`)}
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