import { useFormik } from 'formik'
import React, { useState } from 'react'

import { createHousemateWantingAdvert } from '../../api/housemateWantingAdvert.api';
import { Box, Button, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HousemateWantingAdvertForm = () => {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [detail, setDetail] = useState("");
    const [maxFeeMonthly, setMaxFeeMonthly] = useState(0.0);
    const [gender, setGender] = useState("Male");
    const [isSmoking, setIsSmoking] = useState(false);
    const [hasPet, setHasPet] = useState(false);

    const handleSubmit = async () => {
        const data = {
            title: title,
            detail: detail,
            maxFeeMonthly: maxFeeMonthly,
            gender: gender,
            isSmoking: isSmoking,
            hasPet: hasPet
        };

        try {
            await createHousemateWantingAdvert(data);
            navigate("/");
        }
        catch (err) {

        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
                <Box sx={{boxShadow: 5, padding: "10px"}}>
                    <Stack spacing={2}>
                        <TextField
                            id='title'
                            name='title'
                            label="Title"
                            type='text'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <TextField
                            id='detail'
                            name='detail'
                            label="Detail"
                            type='text'
                            value={detail}
                            multiline
                            onChange={(e) => setDetail(e.target.value)}
                        />
                    </Stack>
                </Box>
                <Box sx={{boxShadow: 5, padding: "10px"}}>
                    <Stack spacing={2}>
                        <TextField
                            id='maxFeeMonthly'
                            name='maxFeeMonthly'
                            label="Max Fee Monthly"
                            type={"number"}
                            value={maxFeeMonthly}
                            onChange={(e) => setMaxFeeMonthly(e.target.value)}
                        />
                        <FormLabel id='gender-radio'>Gender</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby='gender-radio'
                            name='gender-radio-button'
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                        >
                            <FormControlLabel value={"Male"} control={<Radio/>} label="Male"/>
                            <FormControlLabel value={"Female"} control={<Radio/>} label="Female"/>
                        </RadioGroup>
                        <FormLabel id='is-smoking-radio'>Is Smoking</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby='is-smoking-radio'
                            name='is-smoking-radio-button'
                            value={isSmoking}
                            onChange={(e) => setIsSmoking(e.target.value)}
                        >
                            <FormControlLabel value={true} control={<Radio/>} label="Yes"/>
                            <FormControlLabel value={false} control={<Radio/>} label="No"/>
                        </RadioGroup>
                        <FormLabel id='has-pet-radio'>Has Pet</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby='has-pet-radio'
                            name='has-pet-radio-button'
                            value={hasPet}
                            onChange={(e) => setHasPet(e.target.value)}
                        >
                            <FormControlLabel value={true} control={<Radio/>} label="Yes"/>
                            <FormControlLabel value={false} control={<Radio/>} label="No"/>
                        </RadioGroup>
                    </Stack>
                </Box>
                <Button variant='contained' type='submit' color='error'>Publish</Button>
            </Stack>
        </form>
    </div>
  )
}

export default HousemateWantingAdvertForm