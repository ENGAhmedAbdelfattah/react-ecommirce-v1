import axios from "axios";

const baseUrl = axios.create({
  baseURL: "https://e-commerce-v1-885b.onrender.com",
});

export default baseUrl;
