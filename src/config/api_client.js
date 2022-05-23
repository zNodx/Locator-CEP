import axios from "axios";
//https://viacep.com.br/ws/01001000/json/

  const api_client = axios.create({
    baseURL: "https://viacep.com.br/ws/",
  });

export default api_client;