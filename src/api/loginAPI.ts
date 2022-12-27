import axios from "axios";
import { LoginInterface } from "../interfaces/interfaces";

const url = process.env.REACT_APP_LOCAL_URL;

export const loginAPI = async (request: LoginInterface) => {
  const response = await axios.post(`${url}/login`, request);

  if (response && response.data.status === "Success") {
    return false;
  } else return true;
};
