import axios from "axios";
import { getToken } from "../util/getToken";

const token = getToken();

export const getAuthUser = async () => {
    return axios.get("/auth_user", {headers: {Authorization: `Bearer ${token}`}})
                .then(res => res.data)
                .catch(err => {throw err});
}

export const updateUser = async (formData) => {
    axios.put("/user/update", formData, {headers: {Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data"}})
         .catch(err => {throw err});
}

export const getUser = async (id) => {
    return await axios.get(`/user/${id}`)
                .then(res => res.data)
                .catch(err => {throw err});
}

export const logout = async () => {
    
}