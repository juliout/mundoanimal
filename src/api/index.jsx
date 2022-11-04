import axios from "axios";

export const Api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL
})

export const ApiPrivate = axios.create({
  baseURL: 'https://agregador.bigdates.com.br:3010'
})