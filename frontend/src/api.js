import axios from "axios";

export const fetchHouseList = async ({ pageParam = 1}) => {
    const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_ENDPOINT}/house?page=${pageParam}`
    );
    return data
};

export const fetchRegister = async(input)=>{
    const {data} = await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/auth/register`,
        input
    );
    return data;
};