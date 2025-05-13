import type { CountryResponse } from "@Constants/CountryTypes";
import axios from "axios";

export const fetchCountry = async (name:string) : Promise<CountryResponse> => {
  try {
      const response = await axios.get<CountryResponse[]>(`https://restcountries.com/v3.1/name/${name}?fullText=true`);

  return response.data[0];
  } catch (err) {
    throw new Error("Failed to fecth country data" + err);
  }
}