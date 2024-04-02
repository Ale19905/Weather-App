import { useState } from 'react'
import Form from './Components/Form'
import GetWeather from './Services/GetWeather'
import WeatherUI from './Components/WeatherUI'

function App() {
  const [place, setPlace] = useState('')
  const [time, setTime] = useState(null)
  const [isInput, setIsInput] = useState(false) 
  const [error, setError] = useState(false)

  function handleSubmit(e){
    setIsInput(true)
    e.preventDefault()

      GetWeather(e.target[0].value)
      .then((data) => {
        console.log(data);
        if(data === true){
          setError(true)
          setTime(null)
        }else{
          setTime(data)
          setError(false)
        }
      })
      .catch((error) => console.log('error'))
      
  }
  


  return (
    <>
    
      
        <h1 className='title'>Weather App</h1>
              
    
    
    
            <form action="submit" className="form" onSubmit={handleSubmit}>
                <input type="text" placeholder="London, United States, Mexico"/>
                <button >
                    <img src="src\assets\searchmagnifierinterfacesymbol1_79893.svg"  alt="search_btn" width={20} height={20} />
                </button>
                        
            </form>
    

      

        {time  
          ? <WeatherUI 
              place={time.location.name} 
              country={time.location.country} 
              temp={time.current.temp_c}
              ConditionImage={time.current.condition.icon}
              LocalTime={time.location.localtime}
              daytime={time.current.condition.text}
          />
          : error 
          ? <p className='text'>No se encontro una ciudad con ese nombre, intente de nuevo</p> 
          : <p className='text'>Introduce una ciudad</p>
        }

    </>
  )
}

export default App
