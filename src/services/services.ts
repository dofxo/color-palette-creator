import axios from "axios";
import { PaletteType } from "../types/types";
import { dbUrl } from "../constants/constants";

export const getPalettesList = () => {
  return axios.get(`${dbUrl}/palettes`);
};

export const createPalette = (data: PaletteType) => {
  return axios.post(`${dbUrl}/palettes`, data);
};
