import { useFormik } from 'formik'
import React from 'react'
import { createHousemateSearchingAdvert } from '../../../api/housemateSearchingAdvert.api'

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

        }
    }
  })  
  return (
    <div>HousemateSearchingAdvert</div>
  )

}

export default HousemateSearchingAdvert