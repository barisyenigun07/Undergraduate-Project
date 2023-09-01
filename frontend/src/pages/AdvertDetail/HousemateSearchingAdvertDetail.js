import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getHousemateSeachingAdvert } from '../../api/housemateSearchingAdvert.api';

const HousemateSearchingAdvertDetail = () => {
  const [housemateSearchingAdvert, setHousemateSearchingAdvert] = useState({});
  const { id } = useParams();

  const getHousemateSearchingAd = async () => {
    const housemateSearchingAd = await getHousemateSeachingAdvert(id);
    setHousemateSearchingAdvert(housemateSearchingAd);
  }

  useEffect(() => {
    getHousemateSearchingAd();
  }, [id]);
  return (
    <Box sx={{marginTop: "5px", width: "100%", boxShadow: 12}}> 
        {housemateSearchingAdvert?.title}
        
    </Box>
  )
}

export default HousemateSearchingAdvertDetail