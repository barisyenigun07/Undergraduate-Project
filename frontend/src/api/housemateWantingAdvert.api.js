import axios from 'axios';
import { getToken } from '../util/getToken';

const token = getToken();

export const createHousemateWantingAdvert = async (data) => {
    axios.post("/housemate-wanting-advert", data, {headers: {Authorization: `Bearer ${token}`}})
         .catch(err => {throw err});
}

export const getHousemateWantingAdverts = async () => {
    return axios.get("/housemate-wanting-advert")
                .then(res => res.data)
                .catch(err => {throw err});
}

export const getHousemateWantingAdvertPage = async (page = 0, size = 10) => {
    return axios.get(`/housemate-wanting-advert/page?page_no=${page}&size=${size}`)
         .then(res => res.data)
         .catch(err => {throw err});
}

export const getHousemateWantingAdvertsByUser = async (userId) => {
    return axios.get(`/housemate-wanting-advert/user?user_id=${userId}`)
                .then(res => res.data)
                .catch(err => {throw err});
}

export const getHousemateWantingAdvert = async (id) => {
    return axios.get(`/housemate-wanting-advert/${id}`)
         .then(res => res.data)
         .catch(err => {throw err});
}

export const updateHousemateWantingAdvert = async (id, data) => {
    axios.put(`/housemate-wanting-advert/${id}`, data, {headers: {Authorization: `Bearer ${token}`}})
         .catch(err => {throw err});
}

export const deleteHousemateWantingAdvert = async (id) => {
    axios.delete(`/housemate-searching-advert/${id}`, {headers: {Authorization: `Bearer ${token}`}})
         .catch(err => {throw err});
}