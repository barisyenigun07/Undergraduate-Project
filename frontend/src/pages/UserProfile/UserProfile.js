import { Avatar, Box, Divider, Paper, Container, Stack, Typography, Tabs, AppBar, Tab } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getUser } from '../../api/user.api';

import bg from '../../bg-logo.jpg'
import { Email, Phone } from '@mui/icons-material';
import { getHouseAdvertsByUser } from '../../api/houseAdvert.api';
import { getHousemateSearchingAdvertsByUser } from '../../api/housemateSearchingAdvert.api';
import { getHousemateWantingAdvertsByUser } from '../../api/housemateWantingAdvert.api';
import { getBelongingsAdvertsByUser } from '../../api/belongingsAdvert.api';
import HouseAdvertCard from '../../components/Card/HouseAdvertCard';
import BelongingsAdvertCard from '../../components/Card/BelongingsAdvertCard';
import HousemateSearchingAdvertCard from '../../components/Card/HousemateSearchingCard';
import HousemateWantingAdvertCard from '../../components/Card/HousemateWantingAdvertCard';
import AppBar3 from '../../components/Navbar/AppBar3';

const UserProfile = () => {
  const [user, setUser] = useState({});
  const [houseAdverts, setHouseAdverts] = useState([]);
  const [housemateSearchingAdverts, setHousemateSearchingAdverts] = useState([]);
  const [housemateWantingAdverts, setHousemateWantingAdverts] = useState([]);
  const [belongingsAdverts, setBelongingsAdverts] = useState([]); 
  
  const [value, setValue] = useState(0);

  const { userId } = useParams();
  
  const navigate = useNavigate();


  
  const handleTabs = (event, value) => {
    setValue(value);
  }

  const fetchUserDetails = async () => {
    try {
      const userDetails = await getUser(userId);
      setUser(userDetails);
      console.log(user);
    }
    catch (err) {
      console.log("Error!");
    }
  }

  const getHouseAdverts = async () => {
    if (user && user.role?.name === "HOUSE_OWNER") {
      try {
        const houseAds = await getHouseAdvertsByUser(user.id);
        setHouseAdverts(houseAds);
      }
      catch (err) {

      } 
    }
  }

  const getHousemateSearchingAdverts = async () => {
    if (user && user.role?.name === "STUDENT") {
      try {
        const housemateSearchingAds = await getHousemateSearchingAdvertsByUser(user.id);
        setHousemateSearchingAdverts(housemateSearchingAds);
      } catch (error) {
        
      }
    }
  }

  const getHousemateWantingAdverts = async () => {
    if (user && user.role?.name === "STUDENT") {
      try {
        const housemateWantingAds = await getHousemateWantingAdvertsByUser(user.id);
        setHousemateWantingAdverts(housemateWantingAds);
      } catch (error) {
        
      }
    }
  }

  const getBelongingsAdverts = async () => {
    if (user && user.role?.name === "STUDENT") {
      try {
        const belongingsAds = await getBelongingsAdvertsByUser(user?.id);
        setBelongingsAdverts(belongingsAds);
      }
      catch (error) {

      }
    }
  }

  
  useEffect(() => {
    fetchUserDetails();
  }, [userId]);

  useEffect(() => {
    getHouseAdverts();
  }, [])

  useEffect(() => {
    getHousemateSearchingAdverts();
  }, []);

  useEffect(() => {
    getHousemateWantingAdverts();
  }, []);

  useEffect(() => {
    getBelongingsAdverts();
  }, []);



  return (
    <Box>
      <Box sx={{width: "100%", height: "400px", backgroundImage: `url(${bg})`}}>
        <AppBar3/>
        <Box 
        sx={{
          display: "flex",
          justifyContent: "center"
          }}
        >
          {user?.profilePhotoUrl == null ? <Avatar sx={{width: 70, height: 70, mt: 2}}>{user?.username[0]}</Avatar> : <Avatar src={`http://localhost:8080/user/${user?.id}/image/download`} alt={`${user?.username}`} sx={{width: 70, height: 70, mt: 2}}/>}
        </Box>
        <Box mt={3} textAlign={"center"}>
          <Typography variant='h4' color={"white"}>{user?.name} - @{user?.username}</Typography>
          {user?.role?.name === "HOUSE_OWNER" ? <Typography variant='h6' color={"white"}>House Owner</Typography> : <Typography variant='h6' color={"white"}>Student</Typography>}
          <Typography variant='h6' color={"white"}> <Email/> {user?.email} {"\t\t\t"} <Phone/> {user?.contactInfo} </Typography>
        </Box>
      </Box>
      <Box sx={{width: "100%"}}>
          {user.role?.name === "HOUSE_OWNER" ? 
            <Box sx={{mt: 5}}>
              <Typography variant='h4' ml={3}>
                House Adverts of User
                
              </Typography>
              <Divider></Divider>
              <Stack direction={"row"} spacing={2} m={3}>
                {houseAdverts.map(houseAdvert => <HouseAdvertCard item={houseAdvert}/>)}
              </Stack>
            </Box>
            :
            <Box>
              <Tabs variant='contained' value={value} onChange={handleTabs} centered>
                <Tab label="Belongings Adverts"/>
                <Tab label="Housemate Searching Advert"/>
                <Tab label="Wanting To Be Housemate Advert"/>
              </Tabs>
              <TabPanel value={value} index={0}>
                {(belongingsAdverts.length === 0) ? <Typography>No Belongings Advert Found</Typography> : belongingsAdverts.map(belongingsAdvert => <BelongingsAdvertCard item={belongingsAdvert}/>)}
              </TabPanel>
              <TabPanel value={value} index={1}>
                {(housemateSearchingAdverts.length === 0) ? <Typography>No Housemate Searching Advert Found</Typography> : housemateSearchingAdverts.map(housemateSearchingAdvert => <HousemateSearchingAdvertCard item={housemateSearchingAdvert}/>)}
              </TabPanel>
              <TabPanel value={value} index={2}>
                {(housemateWantingAdverts.length === 0) ? <Typography>No Wanting To Be Housemate Advert Found</Typography> : housemateWantingAdverts.map(housemateWantingAdvert => <HousemateWantingAdvertCard item={housemateWantingAdvert}/>)}
              </TabPanel>
            </Box>
          }
      </Box>
      
    </Box>
  )
}

function TabPanel(props) {
  const {children, value, index} = props;
  return (
    <div hidden={value !== index}>
      {
        value === index && (
          <div>
            {children}
          </div>
        )
      }
    </div>
  );
}

export default UserProfile