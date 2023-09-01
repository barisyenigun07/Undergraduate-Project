import axios from 'axios';
import { getToken } from '../util/getToken';

const token = getToken();

export const createHousemateSearchingAdvert = async (data) => {
    axios.post("/housemate-searching-advert", data, {headers: {Authorization: `Bearer ${token}`}})
         .catch(err => {throw err});
}

export const getHousemateSearchingAdvertPage = async (page = 0, size = 10) => {
    return axios.get(`/housemate-searching-advert/page?page_no=${page}&size=${size}`)
                .then(res => res.data)
                .catch(err => {throw err});
}

export const getHousemateSearchingAdvertsByUser = async (userId) => {
    return axios.get(`/housemate-searching-advert/user?user_id=${userId}`)
                .then(res => res.data)
                .catch(err => {throw err});
}

export const getHousemateSeachingAdvert = async (id) => {
    return axios.get(`/housemate-searching-advert/${id}`)
                .then(res => res.data)
                .catch(err => {throw err});
}

export const updateHousemateSearchingAdvert = async (id, data) => {
    axios.put(`/housemate-searching-advert/${id}`, data, {headers: {Authorization: `Bearer ${token}`}})
         .catch(err => {throw err});
}

export const deleteHousemateSearchingAdvert = async (id) => {
    axios.delete(`housemate-searching-advert/${id}`, {headers: {Authorization: `Bearer ${id}`}})
         .catch(err => {throw err});
}