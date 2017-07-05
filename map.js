
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
      google.maps.event.addListener(marker, 'mouseover', function() {
          $('.infoMap').show();
          });
         google.maps.event.addListener(marker, 'mouseout', function() {
              $('.infoMap').hide();
      });
      google.maps.event.addListener(marker2, 'mouseover', function() {
          $('.infoMap2').show();
          });
         google.maps.event.addListener(marker2, 'mouseout', function() {
              $('.infoMap2').hide();
      });
      google.maps.event.addListener(marker3, 'mouseover', function() {
          $('.infoMap3').show();
          });
         google.maps.event.addListener(marker3, 'mouseout', function() {
              $('.infoMap3').hide();
      });
      google.maps.event.addListener(marker4, 'mouseover', function() {
          $('.infoMap4').show();
          });
         google.maps.event.addListener(marker4, 'mouseout', function() {
              $('.infoMap4').hide();
      });
      google.maps.event.addListener(marker5, 'mouseover', function() {
          $('.infoMap5').show();
          });
         google.maps.event.addListener(marker5, 'mouseout', function() {
              $('.infoMap5').hide();
      });
  };
};
  myLocation();
