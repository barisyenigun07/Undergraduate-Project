import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { getHouseAdvertPage } from '../../api/houseAdvert.api';

const AdvertForm = () => {
  const [advertType, setAdvertType] = useState("");
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  return (
    <div>
        <select>
          <option></option>
        </select>
    </div>
  )
}

export default AdvertForm;