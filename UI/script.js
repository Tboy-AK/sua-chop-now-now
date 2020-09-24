

window.onload = function() { 

  getLocation();
}


function getLocation() {
  if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(showPosition);

  } else { 
    console.log("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  const location =
 `latitude : ${position.coords.latitude} longitude : ${position.coords.longitude}`;

 console.log(location);
}
