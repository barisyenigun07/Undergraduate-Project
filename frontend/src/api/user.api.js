import axios from "axios";

const token = sessionStorage.getItem("token");

export const getAuthUser = async () => {
    return axios.get("/user/auth", {headers: {Authorization: `Bearer ${token}`}})
                .then(res => res.data)
                .catch(err => {throw err});
}

export const updateUser = async (formData) => {
    axios.put("/user/update", formData, {headers: {Authorization: `Bearer ${token}`}})
         .catch(err => {throw err});
}