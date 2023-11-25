import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "79300740452f4e298b5f272f349ec8f0",
  },
  headers: {
    "Content-Type": "application/json",
  },
});
