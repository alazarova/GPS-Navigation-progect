function initialize() {
    var myLatLng = {lat: 42.6161504, lng: 23.3484939};
  var mapProp = {
    center:new google.maps.LatLng(42.6161504,23.3484939),
    zoom:15,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
}
google.maps.event.addDomListener(window, 'load', initialize);