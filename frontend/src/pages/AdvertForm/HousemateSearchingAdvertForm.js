import { useFormik } from 'formik'
import React from 'react'
import { createHousemateSearchingAdvert } from '../../api/housemateSearchingAdvert.api'
import { Box, Button, Grid, Stack, TextField } from '@mui/material'

const HousemateSearchingAdvert = () => {
  const formik = useFormik({
    initialValues: {
        title: "",
        detail: "",
        monthlyRentFee: 0.0,
        houseType: "",
        roomCount: "",
        area: 0.0,
        warmingType: "",
        feePerPerson: 0.0,
        isOnSite: false,
        livingPeopleCount: 0
    },

    onSubmit: async (values) => {
        try {
            await createHousemateSearchingAdvert(values);
        }

        catch (err) {
          console.log(err);
        }
    }
  })  
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={2}>
          <Box sx={{boxShadow: 5}}>
            <Stack spacing={2} padding={"10px"}>
              <TextField
                id='title'
                name='title'
                label="Title"
                type='text'
                onChange={formik.handleChange}
                value={formik.values.title}
              />
              <TextField
                id='detail'
                name='detail'
                label="Detail"
                type='text'
                onChange={formik.handleChange}
                value={formik.values.detail}
              />
            </Stack>
          </Box>
          <Box ml={2} mr={2} sx={{boxShadow: 5}}>
            <Grid container spacing={2} padding={"10px"}>
              <Grid item xs={6}>
                <Stack spacing={2}>
                  <TextField
                    id='monthlyRentFee'
                    name='monthlyRentFee'
                    label="Monthly Rent Fee"
                    type={"number"}
                    onChange={formik.handleChange}
                    value={formik.values.monthlyRentFee}
                  />
                  <TextField
                    id='houseType'
                    name='houseType'
                    label="House Type"
                    type='text'
                    onChange={formik.handleChange}
                    value={formik.values.houseType}
                  />
                  <TextField
                    id='roomCount'
                    name='roomCount'
                    label="Room Count"
                    type='text'
                    onChange={formik.handleChange}
                    value={formik.values.roomCount}
                  />
                  <TextField
                    id='area'
                    name='area'
                    label="Area"
                    type={"number"}
                    onChange={formik.handleChange}
                    value={formik.values.area}
                  />
                </Stack>
              </Grid>
              <Grid item xs={6}>
                <Stack spacing={2}>
                  <TextField
                    id='warmingType'
                    name='warmingType'
                    label="Warming Type"
                    type='text'
                    onChange={formik.handleChange}
                    value={formik.values.warmingType}
                  />
                  <TextField
                    id='feePerPerson'
                    name='feePerPerson'
                    label="Fee Per Person"
                    type={"number"}
                    onChange={formik.handleChange}
                    value={formik.values.feePerPerson}
                  />
                  <TextField
                    id='isOnSite'
                    name='isOnSite'
                    label="Is On Site"
                    type={"text"}
                    onChange={formik.handleChange}
                    value={formik.values.title}
                  />
                  <TextField
                    id='livingPeopleCount'
                    name='livingPeopleCount'
                    label="Living People Count"
                    type={"number"}
                    onChange={formik.handleChange}
                    value={formik.values.livingPeopleCount}
                  />
                </Stack>
              </Grid>
            </Grid>
          </Box>
          <Button variant='contained' type='submit' color='error'>Publish</Button>
        </Stack>
      </form>
      
    </>
  )

}

export default HousemateSearchingAdvert