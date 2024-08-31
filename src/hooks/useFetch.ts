import { useEffect, useState } from "react";
import { API_URL } from "../utils/constants";

export const useFetch = (path: string) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/${path}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch(console.log);
  }, []);

  return {
    data,
  };
};
