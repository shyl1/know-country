type Currency = {
  symbol: string;
  name: string;
}

type Currencies = {
  [code: string] :Currency ;
}

export type CountryResponse = {
  name : {
    common: string;
  };
  capital : string[];
  flags : {
    png: string;
    svg: string;
  };
  population : number;
  timezones: string[];
  currencies :Currencies;
}