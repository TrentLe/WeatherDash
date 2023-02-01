var APIKey = `66b406692f030c3ba7fc95fb4eedd63d`;
var searchHistory = []
var lastCity = ``


document.querySelector(`.search`).addEventListener("submit", function (event){

    var city = document.querySelector('.weather').value

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`)
    .then((response) => response.json())
    .then((data) => console.log(data))

})