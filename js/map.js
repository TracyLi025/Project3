function initMap(){
  var home = {lat: 20.024632, lng: 110.309653};
  var middeschool = {lat: 20.027554, lng: 110.306955};
  var highschool = {lat: , lng: };
  var park = {lat : , lng: };
  var marina = {lat : , lng: };
  var map = new google.maps.Map(
    document.getElementById('map'), {
    zoom: 11, center: gome
    }
  );

  var marker1 = new google.maps.Marker({
    position: home,
    map: map
  });
  
  var marker2 = new google.maps.Marker({
    position: middeschool,
    map: map
  });

  var marker3 = new google.maps.Marker({
    position: highschool,
    map: map
  });

  var marker4 = new google.maps.Marker({
    position: park,
    map: map
  });

  var marker5 = new google.maps.Marker({
    position: marina,
    map: map
  });
}