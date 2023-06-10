import axios from 'axios';
import getToken from '../util/getToken';
import { useNavigate } from 'react-router-dom';

const token = getToken();

export const register = async (data) => {
    axios.post("/register", data)
         .catch(err => {throw err});
}

export const login = async (data) => {
    axios.post("/login", data)
         .then((res) => {
            console.log(res);
            localStorage.setItem("token", res.data.token)
        })
         .catch(err => {throw err});
}

export const changePassword = async (data) => {
    axios.put("/change_password", data, {headers: {Authorization: `Bearer ${token}`}})
         .catch(err => {throw err});
}