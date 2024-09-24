var map;
var coords = document.getElementById('coords')
var GEOTOGGLE = false

if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            GEOTOGGLE = true
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            console.log(lat, lng);
            coords.innerText = "lat:" + lat +" " + "long: "+ lng;
            map = L.map('map').setView([lat,lng], 15);
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map);
            L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{maxZoom: 20,subdomains:['mt0','mt1','mt2','mt3']}).addTo(map);
            },
            (error) => {
            console.error("Errorrrrr", error);
             var randoNeg = Math.random() < 0.5 ? -1 : 1;
    const lat = Math.random() * 90 * randoNeg;
    const lng = Math.random() * randoNeg * 179;
    console.log(lat, lng);
    coords.innerText = "lat:" + lat +" " + "long: "+ lng;
    map = L.map('map').setView([lat,lng], 30);
    L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{maxZoom: 20,subdomains:['mt0','mt1','mt2','mt3']}).addTo(map);
            }
        );
    }
else {
    var randoNeg = Math.random() < 0.5 ? -1 : 1;
    const lat = Math.random() * 90 * randoNeg;
    const lng = Math.random() * randoNeg * 179;
    console.log(lat, lng);
    coords.innerText = "lat:" + lat +" " + "long: "+ lng;
    map = L.map('map').setView([lat,lng], 15);
  //  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //maxZoom: 19,
    //attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map);
    L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{maxZoom: 20,subdomains:['mt0','mt1','mt2','mt3']}).addTo(map);
}



function randoButt() {
            var randoNeg = Math.random() < 0.5 ? -1 : 1;
            var latNew = Math.random() * 89 * randoNeg;
            var lngNew = Math.random() * 179 * randoNeg;
            var newPosition = {latNew, lngNew};
            coords.innerText = "lat:" + latNew +" " + "long: "+ lngNew;
            coords.innerText = "lat:" + latNew +" " + "long: "+ lngNew;
            console.log(newPosition);
            map.flyTo([latNew,lngNew], 15);
        }

function coordButt() {
            var randoNeg = Math.random() < 0.5 ? -1 : 1;
            var latInput = document.getElementById("latInput").value;
            console.log(latInput);
            var latNew = parseFloat(latInput);
            var lngInput = document.getElementById("lngInput").value; 
            console.log(lngInput);
            var lngNew = parseFloat(lngInput);
            var newPosition = {latNew, lngNew};
            console.log(newPosition);
            coords.innerText = "lat:" + latNew +" " + "long: "+ lngNew;
            coords.innerText = "lat:" + latNew +" " + "long: "+ lngNew;
            map.flyTo([latNew,lngNew], 15);
}

function seePyramids() {
    var latNew = parseFloat("29.97416777");
    var lngNew = parseFloat("31.1339477975");
    var newPosition = {latNew, lngNew};
    coords.innerText = "lat:" + latNew +" " + "long: "+ lngNew;
    coords.innerText = "lat:" + latNew +" " + "long: "+ lngNew;
    console.log(newPosition);
    map.flyTo([latNew,lngNew], 15);
}
// 27.171165982 , 78.038666512

function seeTaj() {
    var latNew = parseFloat("27.171165982");
    var lngNew = parseFloat("78.038666512");
    var newPosition = {latNew, lngNew};
    coords.innerText = "lat:" + latNew +" " + "long: "+ lngNew;
    coords.innerText = "lat:" + latNew +" " + "long: "+ lngNew;
    console.log(newPosition);
    map.flyTo([latNew,lngNew], 15);
}

function seeCaracol() {
    var latNew = parseFloat("16.763889");
    var lngNew = parseFloat("-89.1175");
    var newPosition = {latNew, lngNew};
    coords.innerText = "lat:" + latNew +" " + "long: "+ lngNew;
    coords.innerText = "lat:" + latNew +" " + "long: "+ lngNew;
    console.log(newPosition);
    map.flyTo([latNew,lngNew], 15);
}