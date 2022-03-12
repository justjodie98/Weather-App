let weather = {
    apiKey: "61ed699b2cb904f4395631962fc0b0b9", /* api key from OpenWeather, please don't use this one get your own 
    api key from https://openweathermap.org/ */
    fetchWeather: function(city) {
      fetch ("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=61ed699b2cb904f4395631962fc0b0b9").then((response) => response.json())
      .then((data) => this.displayWeather(data));
    }, // OpenWeather url includes city, temp(metric) and appid(key)
    
    // This is the data I want to display
    displayWeather: function(data) {
      const {name} = data; // name of city
      const {country} = data.sys; // country initials 
      const {temp, feels_like, pressure} = data.main;
      const {description, icon} = data.weather[0]; // description of weather
      const {temp_min, temp_max} = data.main;
      const {humidity} = data.main; // humidity
      const {speed} = data.wind; // wind speed 
      
     
      document.querySelector(".city-name").innerText = name + "," + " " + country; // city,country
      document.querySelector(".city-temp").innerText = Math.floor(temp) + "°C"; // temp°C
      document.querySelector(".description").innerText = "Feels like  " + Math.floor(feels_like) + "°C" + "," + " " +               description; // feels like, description of weather
      document.querySelector(".icon").src= "http://openweathermap.org/img/wn/" + icon + "@2x.png"; //icon for weather
      document.querySelector(".min").innerText = "Min: " + Math.floor(temp_min) + "°C";
      document.querySelector(".max").innerText = "Max: " + Math.floor(temp_max) + "°C";
      document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
      document.querySelector(".pressure").innerText = "Pressure: " + pressure + "hPa";
      document.querySelector(".wind").innerText = "Wind speed: " + speed + "m/s";
    },
  
    // showing the results 
  search: function() {
  this.fetchWeather(document.querySelector(".search-bar").value);
   }};
      document.querySelector(".search-btn").addEventListener("click", function() {
        weather.search();
  });
   // using the enter button to search for results 
      document.querySelector("input").addEventListener("keyup", function(event) {
        if (event.which == 13) {
         weather.search(); 
   }
  });
    // changing the temp from celcius to farenheit      
   document.querySelector(".toggle-btn").addEventListener("click", function() {
     minLabel = document.querySelector(".min").innerText;
     minLabel = minLabel.replace("Min: ", "");
     minLabel = minLabel.replace("°C", "");
     Math.floor(minLabel);
     minF = minLabel * 1.8 + 32;
  document.querySelector(".min").innerText = "Min: " + Math.floor(minF) + "°F";
    
      maxLabel = document.querySelector(".max").innerText;
      maxLabel = maxLabel.replace("Max: ", "");
      maxLabel = maxLabel.replace("°C", "");
      Math.floor(maxLabel);
      maxF = maxLabel * 1.8 + 32;
  document.querySelector(".max").innerText = "Max: " + Math.floor(maxF) + "°F";
  
     cityTempLabel = document.querySelector(".city-temp").innerText;
     cityTempLabel = cityTempLabel.replace("°C", "");
     Math.floor(cityTempLabel);
     cityTempF = cityTempLabel * 1.8 + 32;
  document.querySelector(".city-temp").innerText = Math.floor(cityTempF) + "°F";
   }); 
   
   // Displaying the time
  const today = new Date();
  const date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
  const time = today.getHours() + ":" + today.getMinutes();
  const dateTime = today;
  
  document.querySelector(".time").innerText = dateTime;