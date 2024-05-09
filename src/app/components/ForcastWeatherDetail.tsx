import Container from "./Container";
import React from "react";
import WeatherIcon from "./WeatherIcon";
import { WeatherDetailsProps } from "./WeatherDetails";

export interface ForcastWeatherDetailProps extends WeatherDetailsProps {
  weatherIcon: string;
  date: string;
  day: string;
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  description: string;
}

export default function ForcastWeatherDetail(props: ForcastWeatherDetailProps) {
  const {
    weatherIcon= "02d",
    date= "09.05",
    day= "Thursday",
    temp,
    feels_like,
    temp_min,
    temp_max,
    description,
  } = props;
  return (
    <Container className="gap-4">
      <section className=" flex gap-4 items-center px-4">
        <div>
          <WeatherIcon iconName={weatherIcon} />
          <p>{date}</p>
          <p className="text-sm">{day}</p>
        </div>
      </section>
    </Container>
  );
}
