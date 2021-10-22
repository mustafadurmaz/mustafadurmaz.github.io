import React from "react";
import axios from "axios";
import "./App.css"
import Form from "./components/Form";
import Weather from "./components/Weather";
import { useState } from "react";

const API_KEY = "d0f30d0ef26524ab8fc67add631bf76d";
export default function App() {

  const [form, setForm] = useState({
    term: "",
    city_name: "",
    temp: "",
    humidity: "",
    wind: "",
    weather_status: "",
    weather_desc: "",
    weather_icon: ""
  });

  const handleChange = (e) => {
    setForm({ term: e.target.value });
  };

  const handleClick = () => {
     axios("https://api.openweathermap.org/data/2.5/weather?q=" + form.term + "&units=metric&appid=" + API_KEY)
      .then(res => setForm({
        city_name: res.data.name,
        temp: res.data.main.temp,
        humidity: res.data.main.humidity,
        wind: res.data.wind.speed,
        weather_status: res.data.weather[0].main,
        weather_desc: res.data.weather[0].description,
        weather_icon: res.data.weather[0].icon
      })

      );

  }

  return (
    <div className="App">
      <div className="container">
        <h1 className="header">Weather App</h1>
        <Form onChange={handleChange} onClick={handleClick} />
        <Weather data={form} />
      </div>

    </div>
  )
}
