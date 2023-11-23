import './App.css';
import coldIcon from './snow-flake-icon.png'
import hotIcon from './hot.png'
import moderateIcon from './avg.png'
import {useState, useEffect} from "react";

function App() {
    const [city, setCity] = useState("Kiev");
    const [data, setData] = useState(null);
    // const [weatherToday, setWeatherToday] = useState({})

    useEffect(() => {
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=3318b3493fd842e180842919232111&q=${city}&days=50&aqi=no&alerts=no`)
            .then(response => response.json())
            .then((data) => setData(data.forecast.forecastday))
            .catch(console.log)

    }, [city])
    return (
        <div className="body">
            <h1>{city} forecast</h1>
            <div className="main">
                {data && data.map(({date, day}, index) => {
                    const setTemperatureIcon = (averageTemperature) => {
                        if (averageTemperature <= 5) {
                            return {"src":coldIcon, "alt": "cold icon"}
                        } else if (averageTemperature >= 30) {
                            return {"src":hotIcon, "alt": "hot icon"}
                        } else {
                            return {"src":moderateIcon, "alt": "moderate icon"}
                        }
                    }
                    const weatherToday = {
                        "key": date,
                        "date": date,
                        "condition": {"src" : day.condition.icon, "alt" : day.condition.text},
                        "maxTemp": day.maxtemp_c,
                        "minTemp": day.mintemp_c,
                        "avgTemp": day.avgtemp_c,
                        "tempIcon": setTemperatureIcon(day.avgtemp_c),
                    }

                    return (
                        <div key={index} className="item">
                            <p className="day">{weatherToday.date}</p>
                            <img src={weatherToday.condition.src} alt={weatherToday.condition.alt} className="img-weather"/>
                            <div className="bottom-items">
                                <p className="p-state">{weatherToday.maxTemp} / <span
                                    className="gray">{weatherToday.minTemp}</span></p>
                                <img src={weatherToday.tempIcon.src} alt={weatherToday.tempIcon.alt} className="cold"/>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

    );
}

export default App;
