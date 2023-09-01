import { useFormik } from 'formik'
import React from 'react'
import { createHousemateSearchingAdvert } from '../../api/housemateSearchingAdvert.api'
import { Button, TextField } from '@mui/material'

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
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          id='title'
          name='title'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        <TextField
          id='detail'
          name='detail'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.detail}
        />
        <TextField
          id='monthlyRentFee'
          name='monthlyRentFee'
          type={"number"}
          onChange={formik.handleChange}
          value={formik.values.monthlyRentFee}
        />
        <TextField
          id='houseType'
          name='houseType'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.houseType}
        />
        <TextField
          id='roomCount'
          name='roomCount'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.roomCount}
        />
        <TextField
          id='area'
          name='area'
          type={"number"}
          onChange={formik.handleChange}
          value={formik.values.area}
        />
        <TextField
          id='warmingType'
          name='warmingType'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.warmingType}
        />
        <TextField
          id='feePerPerson'
          name='feePerPerson'
          type={"number"}
          onChange={formik.handleChange}
          value={formik.values.feePerPerson}
        />
        <TextField
          id='isOnSite'
          name='isOnSite'
          type={"text"}
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        <TextField
          id='livingPeopleCount'
          name='livingPeopleCount'
          type={"number"}
          onChange={formik.handleChange}
          value={formik.values.livingPeopleCount}
        />
        <Button type='submit' color='error'>Publish</Button>
      </form>
      
    </div>
  )

}

export default HousemateSearchingAdvert