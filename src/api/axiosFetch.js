import axios from "axios";

export const axiosFetch = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character",
});
