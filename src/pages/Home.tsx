import CountryLayout from "src/component/CountryLayout";
import InputField from "../component/InputField";
import { useState } from "react";
import type { CountryResponse } from "@Constants/CountryTypes";
import Loader from "src/component/Loader";

export default function Home() {
  const [country , setCountry] = useState<CountryResponse | null>(null);
  const [Error ,setError] = useState("");
  const [loading , setLoading] = useState(false);

  return (
  <main className="container flex flex-col">
    <h1 className="font-bold flex text-center justify-center text-xl sm:text-5xl">Search Country</h1>
    <div className="flex flex-col">
      <InputField setCountry={setCountry} setError={setError} Error={Error} setLoading={setLoading} />
      {
        loading ? (
          <Loader/>
        ) : (
          <div>
            <CountryLayout country={country} error={Error} />
          </div>
        )
      }
    </div>
    </main>
  )
}
