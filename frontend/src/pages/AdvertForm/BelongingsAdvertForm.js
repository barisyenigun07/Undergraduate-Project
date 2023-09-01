import { useFormik } from 'formik'
import React from 'react'
import { createBelongingsAdvert } from '../../api/belongingsAdvert.api';
import { Box, Button, TextField, Typography, Container, Paper } from '@mui/material';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


const BelongingsAdvertForm = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      detail: "",
      price: 0.0,
      type: "",
      status: "",
      isShippable: false,
      isExchangeable: false,
      photos: []
    },

    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("title2", values.title2);
        formData.append("detail", values.detail);
        formData.append("price", values.price);
        formData.append("type", values.type);
        formData.append("status", values.status);
        formData.append("isShippable", values.isShippable);
        formData.append("isExchangeable", values.isExchangeable);
        
        for (const key of Object.keys(values.photos)) {
          formData.append("photos", values.photos[key]);
        }

        await createBelongingsAdvert(formData);
      }

      catch (err) {
        console.log(err);
      }
    }
  })
  return (
    <div>
      <Box sx={{ width: '100%', ml: 2, mt: 4, }}>
        <Typography variant="h3" gutterBottom>
          Add Advert
        </Typography>
      </Box>
      <Box sx={{ mt: 1, justifyContent: "center", display: "flex", textAlign: "center", }}>
        <Box sx={{ mt: 1, justifyContent: "center", display: "flex", textAlign: "center", width: 0.8 }}>
          <form onSubmit={formik.handleSubmit}>
            <Box>
              <Box>
                <TextField
                  id='title'
                  name='title'
                  type='text'
                  multiline
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  label="Title"
                  sx={{
                    mt: 2,
                    width: '450px',
                  }}
                />
              </Box>
              <Box>
                <TextField
                  id='detail'
                  name='detail'
                  type='text'
                  multiline
                  value={formik.values.detail}
                  onChange={formik.handleChange}
                  label="Detail"
                  sx={{
                    mt: 2,
                    width: '450px',
                  }}
                />
              </Box>
              <Box>
                <TextField
                  id='price'
                  name='price'
                  type={"number"}
                  multiline
                  value={formik.values.price}
                  onChange={formik.handleChange}
                  label="price"
                  sx={{
                    mt: 2,
                    width: '450px',
                  }}
                />
              </Box>
              <Box>
                <TextField
                  id='type'
                  name='type'
                  type='text'
                  multiline
                  value={formik.values.type}
                  onChange={formik.handleChange}
                  label="type"
                  sx={{
                    mt: 2,
                    width: '450px',
                  }}
                />
              </Box>
            </Box>
            <Box>
              <Box>
                <TextField
                  id='title2'
                  name='title2'
                  type='text'
                  multiline
                  value={formik.values.title2}
                  onChange={formik.handleChange}
                  label="Title2"
                  sx={{
                    mt: 2,
                    width: '450px',
                  }}
                />
              </Box>
              <Box>
                <TextField
                  id='price'
                  name='price'
                  type={"number"}
                  multiline
                  value={formik.values.price}
                  onChange={formik.handleChange}
                  label="price"
                  sx={{
                    mt: 2,
                    width: '450px',
                  }}
                />
              </Box>
              <Box>
                <TextField
                  id='type'
                  name='type'
                  type='text'
                  multiline
                  value={formik.values.type}
                  onChange={formik.handleChange}
                  label="type"
                  sx={{
                    mt: 2,
                    width: '450px',
                  }}
                />
              </Box>
            </Box>
            <Box>
              <Box>
                <TextField
                  id='status'
                  name='status'
                  type='text'
                  value={formik.values.status}
                  onChange={formik.handleChange}
                  label="status"
                  sx={{
                    mt: 2,
                    width: '450px',
                  }}
                />
              </Box>
              <Box>
                <TextField
                  id='isShippable'
                  name='isShippable'
                  type='text'
                  value={formik.values.isShippable}
                  onChange={formik.handleChange}
                  label="isShippable"
                  sx={{
                    mt: 2,
                    width: '450px',
                  }}
                />
              </Box>
              <Box>
                <TextField
                  id='isExchangeable'
                  name='isExchangeable'
                  type='text'
                  value={formik.values.isExchangeable}
                  onChange={formik.handleChange}
                  label="isExchangeable"
                  sx={{
                    mt: 2,
                    width: '450px',
                  }}
                />
              </Box>
              <Box>
                <Button variant='contained' component="label" sx={{ mt: 1 }}>
                  Upload Photos
                  <input
                    type='file'
                    multiple
                    hidden
                    onChange={(event) => {
                      formik.values.photos = event.currentTarget.files;
                    }}
                  />
                </Button>
              </Box>
              <Box>
                <Button variant='contained' component="label" sx={{ mt: 2, backgroundColor:'#8e1904' }}>
                  Create Advert
                  <div>
                    <Popup trigger=
                      {<button></button>}
                      modal nested>
                      {
                        close => (
                          <div className='modal'>
                            <div className='content'>
                              İLANINIZ BAŞARIYLA OLUŞTURULDU.
                            </div>
                            <div>
                              <button onClick=
                                {() => close()}>
                                Close modal
                              </button>
                            </div>
                          </div>
                        )
                      }
                    </Popup>
                  </div>
                </Button>
              </Box>
            </Box>
          </form>
        </Box>
      </Box>
    </div >
  )
}

export default BelongingsAdvertForm