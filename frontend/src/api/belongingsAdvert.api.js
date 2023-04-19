
import axios from 'axios';

const token = sessionStorage.getItem("token");

export const createBelongingsAdvert = async (formData) => {
    axios.post("/belongings-advert", formData, {headers: {Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data"}})
         .catch(err => {throw err});
}

export const getBelongingsAdvertPage = async (page = 0, size = 10) => {
    return axios.get(`/belongings-advert/page?page_no=${page}&size=${size}`)
                .then(res => res.data)
                .catch(err => {throw err});
}

export const getBelongingsAdvert = async (id) => {
    return axios.get(`/belongings-advert/${id}`)
           .then(res => res.data)
           .catch(err => {throw err});
}

export const updateBelongingsAdvert = async (id, formData) => {
    axios.put(`/belongings-advert/${id}`, formData, {headers: {Authorization: `Bearer ${token}`}})
         .catch(err => {throw err});
}

export const deleteBelongingsAdvert = async (id) => {
    axios.delete(`/belongings-advert/${id}`, {headers: {Authorization: `Bearer ${token}`}})
         .catch(err => {throw err});
}

