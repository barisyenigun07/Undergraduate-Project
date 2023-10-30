import { Box, Divider, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getHousemateSeachingAdvert } from '../../api/housemateSearchingAdvert.api';

const HousemateSearchingAdvertDetail = () => {
  const [housemateSearchingAdvert, setHousemateSearchingAdvert] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getHousemateSearchingAd = async () => {
      const housemateSearchingAd = await getHousemateSeachingAdvert(id);
      setHousemateSearchingAdvert(housemateSearchingAd);
    }
    getHousemateSearchingAd();
  }, [id]);
  return (
    <>
      <Typography variant='h3'>{housemateSearchingAdvert?.title}</Typography>
      <Divider/>
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <Box sx={{boxShadow: 5}}>
            <Stack spacing={1}>
              <Typography>Monthly Rent Fee: {housemateSearchingAdvert?.monthlyRentFee}</Typography>
              <Typography>House Type: {housemateSearchingAdvert?.houseType}</Typography>
              <Typography>Room Count: {housemateSearchingAdvert?.roomCount}</Typography>
              <Typography>Area: {housemateSearchingAdvert?.roomCount}</Typography>
              <Typography>Area: {housemateSearchingAdvert?.area}</Typography>
              <Typography>Area: {housemateSearchingAdvert?.warmingType}</Typography>
              <Typography>Area: {housemateSearchingAdvert?.feePerPerson}</Typography>
              {housemateSearchingAdvert?.isOnSite ? <Typography>Is On Site?: Yes</Typography> : <Typography>Is On Site: No</Typography>}
              <Typography>Living People Count: {housemateSearchingAdvert?.livingPeopleCount}</Typography>
            </Stack>
          </Box>
        </Grid>
        <Grid>
          
        </Grid>
      </Grid>
    </>
  )
}

export default HousemateSearchingAdvertDetail