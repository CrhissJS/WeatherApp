import axios from "axios";
import {useState, useEffect} from "react";

const useFetch = () => {

    const [weather, setWeather] = useState({})

    useEffect(()=>{

        function success(pos) {
            var crd = pos.coords;
    
            console.log('Your current position is:');
            console.log('Latitude : ' + crd.latitude);
            console.log('Longitude: ' + crd.longitude);
            console.log('More or less' + crd.accuracy + 'meters.');
            
            axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=acebb4ad9cca4df994d748a14a4df488`)
            .then((res) => setWeather(res.data))

        }
    
        function error(err) {
            console.warn("User denied acces to location");
        }
    
        navigator.geolocation.getCurrentPosition(success, error);
    
    },[]);

    return {weather, setWeather}
}

export default useFetch;
