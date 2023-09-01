import { Card, CardContent, Typography, CardActions, Button } from "@mui/material"
import { useNavigate } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";


const BelongingsAdvertCard = ({item}) => {
    const navigate = useNavigate();
    return (
      <Card sx={{minWidth: 345}}>
        <SimpleImageSlider
          width={345}
          height={200}
          images={item?.imageUrls?.map(imageUrl => `http://localhost:8080/belongings-advert/${item?.id}/image/download?filename=${imageUrl}`)}
          showBullets={true}
          showNavs={true}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component={"div"}>
            {item?.title}
          </Typography>
          <Typography variant='body2' color="text.secondary">
            {item?.detail}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small' onClick={() => navigate(`/belongings-advert/${item.id}`)}>Details</Button>
          
        </CardActions>
      </Card>
    )
  }

  export default BelongingsAdvertCard;