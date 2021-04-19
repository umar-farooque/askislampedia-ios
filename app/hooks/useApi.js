import { useState } from "react";

function splitData(str) {
  let ar = str.split(",");
  return ar.filter((d) => d != "");
}

function random(array) {
  let item = array[(array.length * Math.random()) | 0];
  return item;
}

export default useApi = (apiFunc, articles = false) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    if (!response.ok) return setError(true);

    setError(false);
    if (articles) return setData(splitData(response.data));
    console.log("====================================");
    console.log("response", response.data);
    console.log("====================================");
    setData(response.data);
  };

  return { data, error, loading, request };
};
