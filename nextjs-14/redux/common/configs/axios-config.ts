import axios from "axios";
import { API } from "../enums/API";

export default function AxiosConfig() {
  return {
    headers: {
      "Cache-Control": "no-cache",
      "Content-Type": "application/json",
      Authorization: `Bearer blah ~`,
      "Access-Control-Allow-Origin": "*",
    },
  };
}

export const instance = axios.create({ baseURL: API.SERVER });
