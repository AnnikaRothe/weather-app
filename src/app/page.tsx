"use client";

import Image from "next/image";
import Navbar from "./components/navbar";
import { useQuery } from "react-query";
import axios from "axios";
import { Console } from "console";
import { format } from "date-fns";
import { parseISO } from "date-fns/parseISO";

interface WeatherData {
  cod: string;
  message: number;
  cnt: number;
  list: WeatherEntry[];
  city: CityInfo;
}

interface WeatherEntry {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: WeatherInfo[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  sys: {
    pod: string;
  };
  dt_txt: string;
}

interface WeatherInfo {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface CityInfo {
  id: number;
  name: string;
  coord: {
    lat: number;
    lon: number;
  };
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export default function Home() {
  const { isLoading, error, data } = useQuery<WeatherData>(
    "repoData",
    async () => {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=grube&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&cnt=56`
      );
      return data;
    }
  );

  const firstData = data?.list[0];

  console.log("data", data?.city.name);

  if (isLoading)
    return (
      <div className="flex items-center min-h-screen justify-center text-xl">
        <p className="animate-bounce">Loading...</p>
      </div>
    );

  return (
    <div className="flex flex-col gap-4 bg-gray-100 min-h-screen">
      <Navbar />
      <main className="px-3 max-w-7xl mx-auto flex flex-col gap-ß w-full pb-10 pt-4">
        {/* today data*/}
        <section>
          <div>
            <h2 className="flex gap-1 text-2xl items-end">
              <p>{format(parseISO(firstData?.dt_txt ??''), 'EEEE')}</p>
              <p>({format(parseISO(firstData?.dt_txt ??''), 'dd.MM.yyyy')})</p>
            </h2>
          </div>
        </section>
        {/* 7 days forcast data*/}
        <section></section>
      </main>
    </div>
  );
}
