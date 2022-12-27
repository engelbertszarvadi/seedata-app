import axios from "axios";

const url = process.env.REACT_APP_LOCAL_URL;

export const getMeasurementsByIdAPI = async (request: number) => {
  const response = await axios.post(`${url}/getUserMeasurements`, {
    id: request,
  });

  if (response && response.data.status) {
    return response.data.measurements;
  } else throw new Error();
};
