import client from "./client";
import HtmlClient from "./HtmlClient";

const endPoint = "/English_wiki";

function splitData(str) {
  let ar = str.split(",");
  return ar.filter((d) => d != "");
}

function random(array) {
  let item = array[(array.length * Math.random()) | 0];
  return item;
}

const getListings = () => client.get(endPoint);
const getDetails = (url) => HtmlClient.get(`${endPoint}/${url}`);

const getRandomArticle = async () => {
  let response = await client.get(endPoint);
  console.log("***************************************");
  // console.log(random(splitData(response.data)));
  let article = random(splitData(response.data));
  let data = await client.get(`${endPoint}/${article}`);
  console.log("***************************************");
  console.log(data.data);
};

export default {
  getListings,
  getDetails,
};
