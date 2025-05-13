import type { CountryResponse } from "@Constants/CountryTypes";
import { useState } from "react"
import { fetchCountry } from "src/axios/countryData";

type Props = {
  setCountry : (country: CountryResponse | null) => void;
  setError : (Error : string) => void;
  Error: string;
  setLoading : (loading : boolean) => void;
}

export default function InputField({setCountry , setError ,Error ,setLoading} : Props) {

  const [inputValue , setInputVlaue] = useState("");

  async function handleSearch() {
    try {
      setLoading(true);
      // takes value from input and pass to fetch country data
      const data = await fetchCountry(inputValue);
      setCountry(data);
      setError("");
    } catch (err){
      setError("Country not found" + err);
      setCountry(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-5">
        <div className="flex mt-5 items-center sm:w-[500px] w-[300px] rounded-2xl custom-shadow bg-white ">
          <input type="text" id="input" value={inputValue} onChange={(e)=> setInputVlaue(e.target.value)} placeholder="Enter country" className="outline-0 p-2 flex-1 rounded-2xl "/>
        <button className="btn sm:w-[100px] w-[80px] p-2 rounded-2xl bg-yellow-500 cursor-pointer" onClick={handleSearch}>Search</button>
      </div>
      {Error && <p className="text-red-500 text-xs">{Error}</p>}
    </div>
  )
}
