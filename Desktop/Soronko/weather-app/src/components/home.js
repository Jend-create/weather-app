import React, { useState } from 'react'
import axios from "axios"
import useLocalStorage from './useLocalStorage'

export default Weather
function Weather() {
    const [country, setCountry]= useState("")
    const [city, setCity] = useLocalStorage("city", "Accra")
    const [weather, setWeather] = useLocalStorage("")
    
    function handleCountry (e) {
        setCountry(e.target.value)
        // console.log(country)
    }

    function handleCity (e) {
        setCity(e.target.value)
        // console.log(city)
    }
         
const getWeather = (e) =>{
    e.preventDefault()
    if (country && city)
    axios.get (`http://api.weatherstack.com/current?access_key=6cd5ec0516a81f9f5794950a136eecb3&query=${country},${city}`)
    .then((res) => {
        setWeather(res.data)
        console.log(res)
    })
    .catch((error)=>{
        console.log(error);
    })}
    return (    
        <div className="container">
            <form className="section-center">
                <h1>Hello! New User? </h1>
                    <p>Please signup to gain access to current weather info. across the globe.</p> <br/><br/>
                    <br/>
          <label >Country:</label><br/>
                <input type="text" placeholder="Country" value={country} onChange={handleCountry}/><br/><br/>
           <label >City:</label><br/>
                <input type="text" placeholder="City" value={city} onChange={handleCity}/><br/><br/>
                <button  onClick={getWeather} onChange={e => {setWeather(e.target.value)}}>
                    Search
                </button>
                
                {weather&&( <div>
                            <br></br>
                <p>It is currently, {weather.current.observation_time} and {weather.current.temperature} Degree Celsius. </p>
                <p>{weather.current.weather_descriptions}</p>
                <img src={weather.current.weather_icons} alt=''/>
                <p>Latitude: "{weather.location.lat}", Longitude: "{weather.location.lon}"</p>
                        </div>)}
                      </form> 
        </div>
    )}