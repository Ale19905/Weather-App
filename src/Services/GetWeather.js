export default async function GetWeather(place){
    const API_KEY = '5bea98dc9ee74791bc1180406242003'
    /*
    fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${place}&aqi=no`)
    .then((res) => res.json()) 
    .then((Response) => {
        console.log(Response)
    })
    .catch((error) => console.log('fetch error'))  
    */

    try{
        const res = await window.fetch(`http://api.weatherapi.com/v1/current.json?key=5bea98dc9ee74791bc1180406242003&q=${place}&aqi=no`)
        const data = await res.json()

        if(res.ok){
            console.log(data);
            return data
        }else{
            const error = true
            return error
        }

    }catch(error){
        throw new Error(error)
    }
    
}