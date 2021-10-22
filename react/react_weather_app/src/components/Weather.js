import React from 'react';
import "../App.css";


export default function Weather({ data }) {
    return (
       
        <div className="weather_data">
            <div className="weather_title">
                <h1> {data.city_name} </h1>
                <h3> {data.weather_status} </h3>
                <p> {data.weather_desc} </p>
            </div>
            <div className="weather_status">
                <ul className="list">
                    <li>
                        <div className="title">Temp :</div>  <span> {data.temp}C° </span>
                    </li>
                    <li>
                        <div className="title">Humidity :</div>  <span>{data.humidity}%</span>
                    </li>
                    <li>
                        <div className="title">Wind :</div>  <span>{data.wind}km/s</span>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}
