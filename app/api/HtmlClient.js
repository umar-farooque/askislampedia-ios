import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://askislampedia.com/Quranic-portlet/rest/getTitles",
  headers: {
    Accept: "text/html",
    "X-API-KEY": "123",
    "X-MARKS-THE-SPOT": "yarrrrr",
  },
});

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    return response;
  }

  return response;
};

export default apiClient;
