import { useEffect, useState } from "react";
import { getMeasurementsByIdAPI } from "../../../api/getMeasurementsByIdAPI";

interface Measurements {
  readonly measurements: {
    measurementId: number;
    value: number;
    unit: string;
    description: string;
  };
}

export const DataGridRows = () => {
  const [data, setData] = useState<any>();

  const handleFetch = () => {
    getMeasurementsByIdAPI(1).then((response) => {
      setData(response);
    });
  };

  useEffect(() => {
    handleFetch();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (data.length() > 0) {
    return [
      {
        id: data?.measurementId,
        value: data?.measurements.value,
        unit: data?.measurements.unit,
        uploadDate: "",
        description: data?.measurements.description,
      },
    ];
  } else {
    return { id: "1", value: "1", description: "1" };
  }
};
