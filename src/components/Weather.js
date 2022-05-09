import React from 'react';
import { useState } from 'react';
import useFetch from '../hooks/useFetch';

const colors = ["lightskyblue", "lightsteelblue", "lightgray", "lightblue"]

const imagesbg = ["https://static.diariofemenino.com/uploads/psicologia/218851-sonar-nubes.jpg","https://cdn.pixabay.com/photo/2014/11/16/15/15/field-533541_960_720.jpg", "https://images6.alphacoders.com/438/438947.jpg", "https://images.alphacoders.com/777/77763.jpg", "https://live.staticflickr.com/1895/30449232538_9ebd2b9f9e_b.jpg", "https://www.wallpapers4u.org/wp-content/uploads/clouds_height_blue_white_5700_1920x1080.jpg"]

const Weather = () => {

    const { weather } = useFetch()

    const [ isCelcius, setIsCelcius ] = useState(true);

    const changeTemp = () => setIsCelcius(!isCelcius);

    const randomColor = Math.floor(Math.random() * colors.length);

    const randomImage = Math.floor(Math.random() * imagesbg.length);

    document.body.style = `background-image: url(${imagesbg[randomImage]});
    background-size: 110%;
    background-repeat: no-repeat;
    `   
    return (
    <div>
        <div className="container" >
            <h1 className="first-title">Weather <span>App</span></h1>
            <h2 className="location">{weather.name}, {weather.sys?.country}</h2>
            <div className="container-weather" style={{background: colors[randomColor]}}>
                {/* <div className='overlay' style={{background: colors[randomColor]}}></div> */}
                <div className="container-temp">
                    <img src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`} alt="" />
                    <h2 className="temperature"> {isCelcius ? `${Math.floor( ((1.8*(weather.main?.temp - 273 ) + 32) -32 ) /1.8 )} °C `: `${Math.floor( 1.8*(weather.main?.temp - 273 ) + 32)} °F`}</h2>
                    <small><b> min: {isCelcius ? `${Math.round( ((1.8*(weather.main?.temp_min - 273 ) + 32) -32 ) /1.8 )} °C` : `${Math.round(1.8*(weather.main?.temp_min - 273 ) + 32)} °F`} / max: {isCelcius ? `${Math.round(((1.8*(weather.main?.temp_max - 273 ) + 32) -32 ) /1.8)} °C `: `${Math.round(1.8*(weather.main?.temp_max - 273 ) + 32)} °F`}</b></small>
                </div>
                <div className="container-info">
                    <h2 className="weather-info-title">Weather information</h2>
                    <h3 className="weatherInfo">"<div className="info-element">{weather.weather?.[0].description}</div>"</h3>
                    <h3> <i className="fa-solid fa-wind"></i> <div className="info-element"> Wind speed:</div>  {weather.wind?.speed} m/s</h3>
                    <h3> <i className="fa-solid fa-temperature-three-quarters"></i> <div className="info-element">Pressure:</div>  {weather.main?.pressure} mb</h3>
                    <h3> <i className="fa-solid fa-droplet"></i> <div className="info-element"> Humidity:</div>  {weather.main?.humidity}%</h3>
                </div>
            </div>
            <button onClick={changeTemp} >{isCelcius? "Celsius to Fahrenheit" : "Fahrenheit to Celsius"}</button> 
        </div>
    <footer>Made with 💖​ in Academlo</footer>
    </div>
    );
};

export default Weather;