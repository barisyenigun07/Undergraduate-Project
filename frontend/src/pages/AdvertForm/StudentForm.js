import { InputLabel, MenuItem, Select, Stack, Box, Typography, Divider } from '@mui/material';
import React, { useState } from 'react'
import HousemateSearchingAdvertForm from './HousemateSearchingAdvertForm';
import HousemateWantingAdvertForm from './HousemateWantingAdvertForm';
import BelongingsAdvertForm from './BelongingsAdvertForm';
import AppBar3 from '../../components/AppBar3';

const StudentForm = () => {
  const [advertType, setAdvertType] = useState("");
  
  const handleChange = (e) => {
    setAdvertType(e.target.value);
  }
  return (
    <>
        <AppBar3/>
        <Box sx={{ width: '100%', ml: 2, mt: 4, }}>
            <Typography variant="h3" gutterBottom>
                Add Advert
            </Typography>
        </Box>
        <Divider/>
        <Stack spacing={2} mt={2}>
            <InputLabel id='advert-type-label'>İlan Türü</InputLabel>
            <Select
                labelId='advert-type-label'
                value={advertType}
                onChange={handleChange}
                fullWidth
            >
                <MenuItem value={"Housemate Searching"}>Ev Arkadaşı Arama</MenuItem>
                <MenuItem value={"Housemate Wanting"}>Ev Arkadaşı Olma</MenuItem>
                <MenuItem value={"Belongings"}>Eşya</MenuItem>
            </Select>
            {advertType === "Housemate Searching" ? 
                <HousemateSearchingAdvertForm/>
            :
            advertType === "Housemate Wanting" ?
                <HousemateWantingAdvertForm/>
            :
            advertType === "Belongings" ? 
                <BelongingsAdvertForm/>
            :
            null
            }
        </Stack>
    </>
  )
}


export default StudentForm;