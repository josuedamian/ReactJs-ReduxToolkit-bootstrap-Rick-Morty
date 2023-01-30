import { axiosFetch } from "../../api/axiosFetch";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const getData = createAsyncThunk(
  "DATA/getData",
  async ({ toast, page }, { rejectWithValue }) => {
    try {
      const { data } = await axiosFetch.get(`?page=${page}`);
      console.log(page);
      toast.success("Datos obtenidos correctamente");
      return data.results;
    } catch (error) {
      toast.error("Error al cargar los datos");
      return rejectWithValue("Error al cargar los datos");
    }
  }
);
