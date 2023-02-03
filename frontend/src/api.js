import axios from "axios";

export const fetchHouseList = async ({ pageParam = 1 }) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/house?page=${pageParam}`
  );
  return data;
};

export const fetchRegister = async (input) => {
  console.log(process.env.REACT_APP_BASE_ENDPOINT);
  const { data } = await axios.post(
    `${process.env.REACT_APP_BASE_ENDPOINT}/register`,
    input
  );
  console.log(process.env.REACT_APP_BASE_ENDPOINT, " ab");

  return data;
};
