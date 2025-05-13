import type { CountryResponse } from "@Constants/CountryTypes";
import CountryCard from "./CountryCard";

type Props = {
  country : CountryResponse | null ;
}

export default function CountryLayout({country }: Props) {

  return (
    <section className="container">

    {
      country && (
        <>
        {/* table of info */}
        <div className="flex flex-col">
          <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr]  p-2 border-b font-bold max-sm:text-xs sm:gap-3 gap-2">
            <span>Country Name</span>
            <span>Flag</span>
            <span>Capital</span>
            <span>Population</span>
            <span>Timezone</span>
            <span>Currency</span>
          </div>

          <div className="mt-2">
            <CountryCard  country={country}/>
          </div>
        </div>
        </>
        )
    }
    </section>
  )
}
