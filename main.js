
navigator.geolocation.getCurrentPosition(success);

function success(pos) {
    var crd = pos.coords;

    //makes the http request
    var myRequest = new XMLHttpRequest();
    myRequest.open('GET', "https://fcc-weather-api.glitch.me/api/current?lat=" + crd.latitude + "&lon="+ crd.longitude + "",true);
    myRequest.send();
    myRequest.onreadystatechange = processRequest;



    //gets the json respone from the http request
    function processRequest()  {
        if(myRequest.readyState == 4 && myRequest.status == 200) {
          var response = JSON.parse(myRequest.responseText);
            console.log(response);

        //changes the html page
        document.getElementById("location").innerHTML = response.name + "," + response.sys.country;
        document.getElementById("temperature").innerHTML = response.main.temp * 9 / 5 + 32;
        document.getElementById("weather").innerHTML = response.weather[0].description;
        }
    }
    
}



