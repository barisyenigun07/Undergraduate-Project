import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const HousemateWantingAdvertCard = ({item}) => {
  const navigate = useNavigate();
  return (
    <Card>
      <CardContent>
        <Typography variant='h5' component={"div"}>{item.title}</Typography>
        <Typography variant='body2'>{item.detail}</Typography>
      </CardContent>
      <CardActions>
        <Button size='small' onClick={() => navigate(`/housemate-wanting-advert/${item.id}`)}>Details</Button>
      </CardActions>
    </Card>
  )
}

export default HousemateWantingAdvertCard