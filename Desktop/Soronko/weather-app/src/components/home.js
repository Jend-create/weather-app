import React, { useState } from 'react'
import axios from "axios"
import useLocalStorage from './useLocalStorage'


export default Weather
function Weather() {
    const [country, setCountry]= useState("")
    const [city, setCity] = useLocalStorage("city", "Accra")
    const [weather, setWeather] = useState(null)

    // Usage
    // Similar to useState but first arg is key to the value in local storage.
    // const [name, setName] = useLocalStorage('name', 'Bob');
  
     

    // const Search = e =>{ e.preventDefault()

    // let history ={
    //     ctry: country,
    //     cty: city
    // }
    // let historyArrayItem = JSON.stringify(history)
    // const historyArray = ['Accra', 'Lagos', 'Nairobe', 'Lome' ]
    // historyArray.push()

    // localStorage.setItem('history', historyArray)
    // localStorage.getItem('history', historyArray)
    // //axios process
    // }
   
        
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
    })
}
// {
//      const setLocalStorage = (search, defaultValue);
//      const stored = localStorage.getItem(search);
//      const initial = stored ? JSON.parse(stored) : defaultValue;
//      const [value, setValue] = useState(initial);
   
//      useEffect(() => {
//        localStorage.setItem(search, JSON.stringify(value));
//      }, [search, value]);
   
   return (  
      

        <div className="container">
            <form >
                <h1>Hello! Please signup to gain access to current weather info. across the globe.</h1> <br/><br/>
          <label >Country:</label><br/>
                <input type="text" placeholder="Country" value={country} onChange={handleCountry}/><br/><br/>
           <label >City:</label><br/>
                <input type="text" placeholder="City" value={city} onChange={handleCity}/><br/><br/>
                <button  onClick={getWeather} onChange={e => {setCity(e.target.value)}}>
                    Search
                </button>
                
                {
                    weather&&(
                        <div className='body'>
                            <br></br>
                            <p>{weather.current.weather_descriptions}</p>
                            <img src={weather.current.weather_icons} alt=''/>
                        </div>
                    )}
                         {/* { <div>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
} */}
                     </form> 
        </div>
    )}