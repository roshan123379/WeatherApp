export function Api(){

    const header = document.querySelector(".header")

    const name = document.createElement("div")
    name.classList.add("name")
    name.textContent="Weather"
    header.appendChild(name)


    const form = document.createElement("form")
    form.classList.add("form")
    header.appendChild(form)

    const input = document.createElement("input")
    input.classList.add("search")
    input.type="text"
    input.placeholder="Enter the City Name"
    form.appendChild(input)

    const submit = document.createElement("button")
    submit.classList.add("submit")
    submit.textContent="Search"
    form.appendChild(submit)
    
    
    let api="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
   
    let key= "&appid=5c91cf270cad64a57b726def75ca54aa"

    let search = document.querySelector(".search")
    
    async function test(city){
        return (await fetch(api + city + key)).json()
    }
    
    let  Submit = document.querySelector(".submit")
     Submit.addEventListener("click",(e)=>{
        e.preventDefault()
            test(search.value).then(function(data){
                console.log(data)
                document.querySelector(".cityName").innerHTML=data.name
        
                document.querySelector(".tempNum").textContent=Math.round(data.main.temp)+ "°C"
                document.querySelector(".cloudy").textContent=data.weather[0].main
                document.querySelector(".humivalue").textContent=data.main.humidity + "%"
                document.querySelector(".windvalue").textContent=data.wind.speed + "m/s"
                document.querySelector(".pressurevalue").textContent=data.main.pressure + "pa"
                document.querySelector(".mintempvalue").textContent = Math.round(data.main.temp_min)+ "°C"
                document.querySelector(".maxtempvalue").textContent = Math.round(data.main.temp_max)+ "°C"
                document.querySelector(".countryvalue").textContent=data.sys.country
        
                document.querySelector(".tempImg").style.display="block"

                if(data.weather[0].main=="Clouds"){
                    document.querySelector(".tempImg").src="https://cdn-icons-png.flaticon.com/512/5903/5903939.png"
                }
                else if(data.weather[0].main=="Clear"){
                    document.querySelector(".tempImg").src="https://cdn-icons-png.flaticon.com/512/3222/3222808.png"
                }
                else if(data.weather[0].main=="Mist"){
                    document.querySelector(".tempImg").src="https://cdn-icons-png.flaticon.com/512/1197/1197102.png"
                }
                else if(data.weather[0].main=="Rain"){
                    document.querySelector(".tempImg").src="https://cdn-icons-png.flaticon.com/512/5136/5136120.png"
                }
                else if(data.weather[0].main=="Drizzle"){
                    document.querySelector(".tempImg").src="https://cdn2.iconfinder.com/data/icons/weather-filled-outline-3/64/weather07-512.png"
                }
                else if(data.weather[0].main=="Haze"){
                    document.querySelector(".tempImg").src=" https://cdn-icons-png.flaticon.com/512/1197/1197102.png"
                }
                else if(data.weather[0].main=="Smoke"){
                    document.querySelector(".tempImg").src="https://cdn-icons-png.flaticon.com/512/1197/1197102.png"
                }
               else{
                document.querySelector(".tempImg").src=""
               }
                
            })
                .catch((error)=>console.log(error))

                
            
         })
    

     
        

}

export function content(){


    const content = document.querySelector(".content")

    const contentImg = document.createElement("img")
    contentImg.classList.add("contentImg")
    contentImg.src="https://i.pinimg.com/736x/1e/e4/7e/1ee47e77906a39b3045603b25ddb185e.jpg"
    content.appendChild(contentImg)

    const blur = document.createElement("div")
    blur.classList.add("blur")
    content.appendChild(blur)

    // left div

    const leftDiv = document.createElement("div")
    leftDiv.classList.add("leftDiv")
    blur.appendChild(leftDiv)

    const cityName = document.createElement("div")
    cityName.classList.add("cityName")
    leftDiv.appendChild(cityName)


    const temperatureDiv = document.createElement("div")
    temperatureDiv.classList.add("temperatureDiv")
    leftDiv.appendChild(temperatureDiv)

    

    const tempNum = document.createElement("div")
    tempNum.classList.add("tempNum")
    temperatureDiv.appendChild(tempNum)

    
    const temp2 = document.createElement("div")
    temp2.classList.add("temp2")
    temperatureDiv.appendChild(temp2)

    const tempImgDiv = document.createElement("div")
    tempImgDiv.classList.add("tempImgDiv")
    temp2.appendChild(tempImgDiv)



    const tempImg = document.createElement("img")
    tempImg.classList.add("tempImg")
    tempImg.style.display="none"
    tempImgDiv.appendChild(tempImg)

    const cloudy = document.createElement("div")
    cloudy.classList.add("cloudy")
    temp2.appendChild(cloudy)

    // right div

    const rightDiv = document.createElement("div")
    rightDiv.classList.add("rightDiv")
    blur.appendChild(rightDiv)

    

    const humidity = document.createElement("div")
    humidity.classList.add("humidity")
    rightDiv.appendChild(humidity)

    let humiImg = document.createElement("img")
    humiImg.classList.add("humiImg")
    humiImg.src="https://cdn-icons-png.flaticon.com/512/3262/3262966.png"
    humidity.appendChild(humiImg)

    let humivalue = document.createElement("div")
    humivalue.classList.add("humivalue")
    humidity.appendChild(humivalue)

    let huminame = document.createElement("div")
    huminame.classList.add("huminame")
    huminame.textContent="Humidity"
    humidity.appendChild(huminame)

    const wind = document.createElement("div")
    wind.classList.add("wind")
    rightDiv.appendChild(wind)

    let windImg = document.createElement("img")
    windImg.classList.add("windImg")
    windImg.src="https://cdn-icons-png.flaticon.com/128/1585/1585400.png"
    wind.appendChild(windImg)

    let windvalue = document.createElement("div")
    windvalue.classList.add("windvalue")
    wind.appendChild(windvalue)

    let windname = document.createElement("div")
    windname.classList.add("windname")
    windname.textContent="Wind"
    wind.appendChild(windname)


    const pressure= document.createElement("div")
    pressure.classList.add("pressure")
    rightDiv.appendChild(pressure)


    let pressureImg = document.createElement("img")
    pressureImg.classList.add("pressureImg")
    pressureImg.src="https://icon-library.com/images/pressure-icon-png/pressure-icon-png-7.jpg"
    pressure.appendChild(pressureImg)

    let pressurevalue = document.createElement("div")
    pressurevalue.classList.add("pressurevalue")
    pressure.appendChild(pressurevalue)

    let pressurename = document.createElement("div")
    pressurename.classList.add("pressurename")
    pressurename.textContent="Pressure"
    pressure.appendChild(pressurename)

    const mintemp = document.createElement("div")
    mintemp.classList.add("mintemp")
    rightDiv.appendChild(mintemp)

    let mintempImg = document.createElement("img")
    mintempImg.classList.add("mintempImg")
    mintempImg.src="https://cdn-icons-png.flaticon.com/512/4270/4270872.png"
    mintemp.appendChild(mintempImg)

    let mintempvalue = document.createElement("div")
    mintempvalue.classList.add("mintempvalue")
    mintemp.appendChild(mintempvalue)

    let mintempname = document.createElement("div")
    mintempname.classList.add("mintempname")
    mintempname.textContent="Min-Temp"
    mintemp.appendChild(mintempname)

    const maxtemp = document.createElement("div")
    maxtemp.classList.add("maxtemp")
    rightDiv.appendChild(maxtemp)

    let maxtempImg = document.createElement("img")
    maxtempImg.classList.add("maxtempImg")
    maxtempImg.src="https://cdn2.iconfinder.com/data/icons/weather-120/130/_High_Temperature-512.png"
    maxtemp.appendChild(maxtempImg)

    let maxtempvalue = document.createElement("div")
    maxtempvalue.classList.add("maxtempvalue")
    maxtemp.appendChild(maxtempvalue)

    let maxtempname = document.createElement("div")
    maxtempname.classList.add("maxtempname")
    maxtempname.textContent="Max-Temp"
    maxtemp.appendChild(maxtempname)

    const country = document.createElement("div")
    country.classList.add("country")
    rightDiv.appendChild(country)

     let countryImg = document.createElement("img")
     countryImg.classList.add("countryImg")
     countryImg.src="https://www.svgrepo.com/show/192576/earth-globe-global.svg"
     country.appendChild(countryImg)

    let countryvalue = document.createElement("div")
    countryvalue.classList.add("countryvalue")
    country.appendChild(countryvalue)

    let countryname = document.createElement("div")
    countryname.classList.add("countryname")
    countryname.textContent="country"
    country.appendChild(countryname)
    
   
}