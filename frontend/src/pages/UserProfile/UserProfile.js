import { Box, Grid } from '@mui/material'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { getUser } from '../../api/user.api';

import bg from '../../bg-logo.jpg'

const UserProfile = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  const fetchUserDetails = () => {
    try {
      const userDetails = getUser(id);
      setUser(userDetails);
    }
    catch (err) {

    }
  }

  return (
    <Box>
      <Box sx={{width: "100%", height: "100vm", backgroundImage: `url(${bg})`}}>
        
      </Box>
    </Box>
  )
}

export default UserProfile