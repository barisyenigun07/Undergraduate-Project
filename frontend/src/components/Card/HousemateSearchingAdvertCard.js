import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const HousemateSearchingAdvertCard = ({item}) => {
  const navigate = useNavigate();
  return (
    <Card sx={{minWidth: 345}}>
        <CardContent>
            <Typography variant='h5' component={"div"}>{item.title}</Typography>
            <Typography variant='body2'>{item.detail}</Typography>
            
        </CardContent>
        <CardActions>
            <Button size='small' onClick={() => navigate(`/housemate-searching-advert/${item.id}`)}>Details</Button>
        </CardActions>
    </Card>
  )
}

export default HousemateSearchingAdvertCard