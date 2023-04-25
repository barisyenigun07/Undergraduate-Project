import axios from 'axios';
import getToken from '../util/getToken';


const token = getToken();

export const createHouseAdvert = async (data) => {
    axios.post("/house-advert", data, {headers: {Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data"}})
         .catch(err => {throw err});
    
}

export const getHouseAdverts = () => {
    return axios.get("/house-advert")
                .then(res => res.data)
                .catch(err => {throw err});
}

export const getHouseAdvertPage = async (page = 0, size = 10) => {
    return axios.get(`/house-advert/page?page_no=${page}&size=${size}`)
                .then(res => res.data)
                .catch(err => {throw err});
}

export const getHouseAdvert = async (id) => {
    return axios.get(`/house-advert/${id}`)
                .then(res =>  res.data)
                .catch(err => {throw err});
}

export const updateHouseAdvert = async (id, data) => {
    axios.put(`/house-advert/${id}`, data, {headers: {Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data"}})
         .catch(err => {throw err});
    
}

export const deleteHouseAdvert = async (id) => {
    axios.delete(`/house-advert/${id}`, {headers: {Authorization: `Bearer ${token}`}})
         .catch(err => {throw err});
}