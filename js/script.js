var APIKey = `66b406692f030c3ba7fc95fb4eedd63d`;
var searchHistory = []
var lastCity = ``


document.querySelector(`.search`).addEventListener("submit", function (event){
    event.preventDefault()
    var city = document.querySelector('.weather').value

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`)
    .then((response) => response.json())
    .then((data) =>{
        console.log(data)
        var temp = data.main.temp
        var humidity = data.main.humidity
        var windSpeed = data.wind.speed
        var lat = data.coord.lat
        var lon = data.coord.lon
        var icon = data.weather[0].icon
        var iconUrl = `http://openweathermap.org/img/w/${icon}.png`
        var cityName = data.name
        var date = new Date()
        var day = date.getDate()
        var month = date.getMonth()
        var year = date.getFullYear()
        var currentDate = `${month}/${day}/${year}`

        document.querySelector(`.city`).textContent = `${cityName} (${currentDate})`
        document.querySelector(`.city`).appendChild(document.createElement(`img`)).src = iconUrl
        document.querySelector(`.temp`).textContent = `Temperature: ${temp}`
        document.querySelector(`.humidity`).textContent = `Humidity: ${humidity}`
        document.querySelector(`.windSpeed`).textContent = `Wind Speed: ${windSpeed}`

    //     fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${APIKey}`)
    //     .then((response) => response.json())
    //     .then((data) =>{
    //         console.log(data)
    //         var uvIndex = data.current.uvi
    //         document.querySelector(`.uvIndex`).textContent = `UV Index: ${uvIndex}`
    // })

})
})