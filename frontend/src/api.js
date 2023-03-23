import axios from "axios";

export const fetchHouseList = async ({ pageParam = 1 }) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/house?page=${pageParam}`
  );
  return data;
};

export const register = async (input) => {
  
  const { data } = await axios.post(
    "/register",
    input
  );
  
  return data;
};

export const login = async (input) => {
  await axios.post("/login", input)
              .then(res => res.data)
              .then(data => window.sessionStorage.setItem("token", data.token))
              .catch(err => alert(err))
}
