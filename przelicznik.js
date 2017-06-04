function alfa() {
  document.getElementById('check').onclick = function() {
    var donated = document.getElementById('inpoot').value;
    var donated = donated * 0.45;
    if (donated <= 0) {
      document.getElementById('outpoot').innerHTML = "Szkoda, nie oddawałaś/oddawałeś jeszcze krwi. Być może warto sprawdzić, czy możesz to robić?";
    } else if (donated >= 5 && donated < 6) {
      document.getElementById('outpoot').innerHTML = "Nieźle, oddałaś/oddałeś już " + donated + " l. krwi! Jeśli jesteś kobietą, przysługuje Ci już tytuł zasłużonego dawcy krwi - mężczyzni muszą oddać 6 litrów."
    } else if (donated >= 6 && donated < 15) {
      document.getElementById('outpoot').innerHTML = "Dobra robota, oddałaś/oddałeś już " + donated + " l. krwi! Czy wiesz, że przysługuje Ci już tytuł zasłużonego dawcy krwi?";
    } else if (donated >= 15 && donated < 18) {
      document.getElementById('outpoot').innerHTML = "Wspaniale, oddałaś/oddałeś już " + donated + " l. krwi! Jeśli jesteś kobietą, przysługuje Ci już tytuł zasłużonego dawcy krwi - mężczyzni muszą oddać 18 litrów.";
    } else if (donated >= 18) {
      document.getElementById('outpoot').innerHTML = "Znakomicie! Oddałaś/oddałeś już " + donated + " l. krwi! Jestem dumny z Twoich osiągnięć! Wiedz, że przysługuje Ci tytuł zasłużonego dawcy krwi i różne przywileje z tego tytułu.";
    } else {
      document.getElementById('outpoot').innerHTML = "Oddałaś/oddałeś już " + donated + " l. krwi!";
    }
    console.log(donated);
  }
};

function myLocation() {
  navigator.geolocation.getCurrentPosition(showMyPosition);
}
function showMyPosition(position) {
  var currentLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  var mapOption = {
    center: currentLocation,
    zoom: 11
  };
  map = new google.maps.Map(document.getElementById("googleMap"), mapOption);
  setMarker(currentLocation);
}
function setMarker(currentLocation) {
  var marker = new google.maps.Marker({
    position: currentLocation
  })
  marker.setMap(map);

  var ckikLocation1 = new google.maps.LatLng(52.232721, 21.060168);
  var marker2 = new google.maps.Marker({
    position: ckikLocation1
  });
  marker2.setMap(map);

    var ckikLocation2 = new google.maps.LatLng(52.286843, 20.951481);
    var marker3 = new google.maps.Marker({
      position: ckikLocation2
    });
    marker3.setMap(map);

    var ckikLocation3 = new google.maps.LatLng(52.225729, 21.000714);
    var marker4 = new google.maps.Marker({
      position: ckikLocation3
    });
    marker4.setMap(map);

    var ckikLocation4 = new google.maps.LatLng(52.206634, 21.192229);
    var marker5 = new google.maps.Marker({
      position: ckikLocation4
    });
    marker5.setMap(map);
  markerOver(marker, marker2, marker3, marker4, marker5);

  function markerOver(marker, marker2, marker3, marker4, marker5) {
      google.maps.event.addListener(marker, 'click', function() {
          $('.infoMap').show();
          });
         google.maps.event.addListener(marker, 'mouseout', function() {
              $('.infoMap').hide();
      });
      google.maps.event.addListener(marker2, 'click', function() {
          $('.infoMap2').show();
          });
         google.maps.event.addListener(marker2, 'mouseout', function() {
              $('.infoMap2').hide();
      });
      google.maps.event.addListener(marker3, 'click', function() {
          $('.infoMap3').show();
          });
         google.maps.event.addListener(marker3, 'mouseout', function() {
              $('.infoMap3').hide();
      });
      google.maps.event.addListener(marker4, 'click', function() {
          $('.infoMap4').show();
          });
         google.maps.event.addListener(marker4, 'mouseout', function() {
              $('.infoMap4').hide();
      });
      google.maps.event.addListener(marker5, 'click', function() {
          $('.infoMap5').show();
          });
         google.maps.event.addListener(marker5, 'mouseout', function() {
              $('.infoMap5').hide();
      });
  };
}

  alfa();
  myLocation();
