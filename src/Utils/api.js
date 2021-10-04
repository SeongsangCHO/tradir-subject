import axios from "axios";
import { BASE_URL, END_POINT } from "Utils/constant";

const BEER_API = axios.create({
  baseURL: BASE_URL,
});

export const getBeerList = async () => {
  try {
    const res = await BEER_API.get(END_POINT.beers);
    return res;
  } catch (error) {
    console.error(error);
  }
};
