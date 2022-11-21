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
const icons=document.querySelector('.icon');

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
    low.innerHTML= `Low: ${Math.round(response.main.temp_min-273)}<span><sup>o</sup>C</Span>`
    high.innerHTML= `High: ${Math.round(response.main.temp_max-273)}<span><sup>o</sup>C</Span>`
    let weaIcon=response.weather[0].main;
    icons.innerHTML=weatherIcon(weaIcon)
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
        let fIcon=`<i class="fa-light fa-sun-cloud"></i>`;
        return `${fIcon}`
    }
    if(icon==='Clouds'){
        let fIcon=`<i class="fa-solid fa-clouds"></i>`;
        return `${fIcon}`
    }
    if(icon==='Cloud'){
        let fIcon=`<i class="fa-solid fa-cloud"></i>`;
        return `${fIcon}`
    }
    if(icon==='Rain'){
        let fIcon=`<i class="fa-sharp fa-solid fa-raindrops"></i>`;
        return `${fIcon}`
    }
    if(icon==='Storm'){
        let fIcon=`<i class="fa-light fa-poo-storm"></i>`;
        return `${fIcon}`
    }
    if(icon==='Sun'){
        let fIcon=`<i class="fa-solid fa-sun"></i>`;
        return `${fIcon}`
    }
    if(icon==='Sun'){
        let fIcon=`<i class="fa-solid fa-sun"></i>`;
        return `${fIcon}`
    }
    
}