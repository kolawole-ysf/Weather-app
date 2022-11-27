const api = {
	Key: 'e1201e3ea0ed461a981566807cf203f7',
	baseurl: 'https://api.openweathermap.org/data/2.5/',
};

//get variables
const btn=document.querySelector('.city-btn');
const cityName=document.querySelector('.city-name');
const temp=document.querySelector('.temp');
const humidity=document.querySelector('.humidity');
const inputvalue=document.querySelector('.city');
const date=document.querySelector('.date');
const low=document.querySelector('.low-temp');
const high=document.querySelector('.high-temp');
const icons=document.querySelector('.weather-icon');

btn.addEventListener('click',getInputValue);

function getInputValue(){
    getWeatherData(inputvalue.value)
}

function getWeatherData(city){
    fetch(`${api.baseurl}weather?q=${city}&APPID=${api.Key}`)
	.then(response => response.json())
	.then(displayWeather)
	.catch(err => console.error(err));
}

function displayWeather(response){
    console.log(response)
    cityName.innerHTML=`${response.name}, ${response.sys.country}`;
    humidity.innerText=`${response.weather[0].description}`;
    temp.innerHTML=`${Math.round(response.main.temp-273)}<span><sup>o</sup>C</Span>`
    low.innerHTML= `Min : ${Math.round(response.main.temp_min-273)}<span><sup>o</sup>C</Span>`
    high.innerHTML= `Max : ${Math.round(response.main.temp_max-273)}<span><sup>o</sup>C</Span>`
    let weaIcon=response.weather[0].main;
    icons.src=weatherIcon(weaIcon)
    let now=new Date();
    date.innerText=datebuilder(now);

}

function datebuilder(d){
    let days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let months=['January','February','March','April','May','June','July','August','September','October','November','December']
    let day=d.getDay();
    let tDate=d.getDate()
    let month=d.getMonth()
    let year=d.getFullYear()
    
    return `${days[day]} ${tDate} ${months[month]}, ${year}`
    console.log(months[month])
}
function weatherIcon(icon){
    if(icon==='Clear'){
        let icon=document.querySelector('.weather-icon').src='https://img.icons8.com/fluency/2x/partly-cloudy-day.png'
        return icon;
    }
    if(icon==='Clouds'){
        let icon=document.querySelector('.weather-icon').src='https://img.icons8.com/fluency/2x/clouds.png'
        return icon;
    }
    if(icon==='Cloud'){
        let icon=document.querySelector('.weather-icon').src='https://img.icons8.com/fluency/2x/cloud.png'
        return icon;
    }
    if(icon==='Rain'){
        let icon=document.querySelector('.weather-icon').src='https://img.icons8.com/fluency/2x/intense-rain.png'
        return icon;
    }
    if(icon==='Storm'){
        let icon=document.querySelector('.weather-icon').src='https://img.icons8.com/fluency/2x/storm.png'
        return icon;
    }
    if(icon==='Sun'){
        let icon=document.querySelector('.weather-icon').src='https://img.icons8.com/fluency/2x/sun.png'
        return icon;
    }
    if(icon==='Snow'){
        let icon=document.querySelector('.weather-icon').src='https://img.icons8.com/fluency/2x/snow.png'
        return icon;
    }
    if(icon==='Drizzle'){
        let icon=document.querySelector('.weather-icon').src='https://img.icons8.com/fluency/2x/light-rain.png'
        return icon;
    }
    if(icon==='Atmosphere'){
        let icon=document.querySelector('.weather-icon').src='https://img.icons8.com/fluency/2x/fog-night.png'
        return icon;
    }
    
}