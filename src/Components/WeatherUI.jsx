export default function WeatherUI({place,country,temp, condition, ConditionImage,LocalTime, daytime}){
    
    return(
        <div className="weatherUI" style={{boxShadow: daytime === 'sunny'
                                        ? '0px 10px 100px yellow'
                                        : daytime === 'Overcast' 
                                        ? '0px 10px 100px white'
                                        : daytime === 'Partly cloudy'
                                        ? '0px 10px 100px rgb(255, 255, 165)'
                                        : daytime === 'Clear'
                                        ? '0px 10px 100px darkblue'
                                        : '0px 0px 0px black'

                                }}>
            <div className="City">
                <h1 className="city-name">{place}</h1>
                <p className="city-country">{country}</p>
                

            </div>
            <div className="weather_container">
            <div className="weather_subcontainer">
                <img src={ConditionImage} alt="weather icon" width={60} height={60}/>
                <p>{temp}ºC</p>
                <p>{condition}</p>

            </div>
           
                <p className="localtime">{LocalTime}</p>

            </div>
            
            
        
        </div>
    )
}