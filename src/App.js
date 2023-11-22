import './App.css';
import coldIcon from './snow-flake-icon.png'
import hotIcon from './hot.png'
import moderateIcon from './avg.png'
import {useState, useEffect} from "react";

function App() {
    const [city, setCity] = useState("Kiev");
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=3318b3493fd842e180842919232111&q=${city}&days=7&aqi=no&alerts=no`)
            .then(response => response.json())
            .then((data) => setData(data.forecast.forecastday))
    }, [])
    return (
        <div className="body">
            <h1>{city} forecast</h1>
            <div className="main">
                {data && data.map((data) => {
                    let temperatureIcon;
                    if (data.day.avgtemp_c <= 5) temperatureIcon = coldIcon;
                    else if (data.day.avgtemp_c >= 30) temperatureIcon = hotIcon;
                    else temperatureIcon = moderateIcon;

                    return (
                        <div key={data.date} className="item">
                            <p className="day">{data.date}</p>
                            <img src={data.day.condition.icon} alt={data.day.condition.text} className="img-weather"/>
                            <div className="bottom-items">

                                <p className="p-state">{data.day.maxtemp_c} / <span
                                    className="gray">{data.day.mintemp_c}</span></p>
                                <img src={temperatureIcon} alt="cold" className="cold"/>
                            </div>
                        </div>
                    )})}
            </div>
        </div>

    );
}

export default App;
