// var button=document.querySelector('')
// fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
// + city 
// + "&appid=c91ac500a393ac5f17d15cf97c7ebf12&units=metric")
//     .then(res => res.json())
//     .then(data => console.log(data))
let wet ={
    apikey:  "c91ac500a393ac5f17d15cf97c7ebf12",
    weatherData: function (city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            +city
            +"&units=metric&appid="
            +this.apikey
        ).then((res) => res.json())
        .then((data) => this.displayweather(data));
    },
    displayweather: function(data){
        const { name }=data;
        const { icon,description}=data.weather[0];
        const { temp,humidity}=data.main;
        const { speed }=data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        //displaying on the web page
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src= 
        "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText="Temparature: "+temp+"°C";
        document.querySelector(".humidity").innerText ="Humidity: "+humidity+"%";
        document.querySelector(".wind").innerText ="Wind speed: "+speed+"km/hr";
        document.body.style.background = "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function(){
        this.weatherData(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button").addEventListener('click', function(){
    wet.search()
});

document.querySelector(".search-bar").addEventListener('keyup', function(event){
    if (event.key=='Enter'){
        wet.search()
    }
});
