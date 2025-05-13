import type { CountryResponse } from "@Constants/CountryTypes"


type Props = {
  country : CountryResponse;
}
export default function CountryCard({country} : Props) {

  const currency = Object.values(country.currencies)[0];

  return (
    <div className="flex flex-col sm:gap-3 gap-1">
      <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] gap-3 p-2 custom-shadow backdrop-blur-md bg-black/20 max-sm:text-xs ">
        <span className="flex justify-center items-center font-semibold">{country.name.common}</span>
        <img src={country.flags.png} alt={country.name.common}  className="sm:w-28 sm:h-20 flex items-center w-10"/>
        <span className="flex items-center font-semibold">{country.capital}</span>
        <span className="flex items-center font-semibold">{country.population}</span>
        <span className="flex items-center font-semibold">{country.timezones}</span>
        <span className="flex items-center font-semibold">{currency.name} ({currency.symbol})</span>
      </div>
      <hr />
    </div>
  )
}
