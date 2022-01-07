import axios from "axios";

const timeout = 5000;

export const http = axios.create({
  baseURL: process.env.TRELLO_API,
  params: {
    key: process.env.TRELLO_KEY,
    token: process.env.TRELLO_TOKEN
  },
  timeout
});
