window.onload = init;

function init() { 
var button = document.getElementById("addButton");
button.onclick = handleButtonClick;
}
function SimuData() {
    $.ajax({
            type: "POST",
            url:"http://localhost:8082/sensores/DatoSensores.php?q=1",
            dataType: 'json',
            async: false}).responseText;
        var Respuesta=jQuery.parseJSON(JSON);
      data.setValue(0, 1,Respuesta[0].temperatura);
      data.setValue(1, 1,Respuesta[0].humedad);
      data.setValue(2, 1,Respuesta[0].humedad2);
      data.setValue(3, 1,Respuesta[0].humedad3);;
}

setInterval(function offFan() {
    var of=false;
    var tempmas= Respuesta.temperatura ;
    document.getElementById(offFan);
    button.onclick = document.getElementById(offFan);
}, 700);

setInterval(function onFan() {
    var on=true;
    var tempmenos= Respuesta.temperatura;
    button.onclick = document.getElementById(onFan);
}, 700);

setInterval(function offWater() {
    var off=false;
    var humemenos= Respuesta.humedad;
    var humemenos2= Respuesta.humedad2;
    var humemenos3= Respuesta.humedad3; 
    button.onclick = document.getElementById(offWater);
}, 700);

setInterval(function onWater() {
    var on=true;
    var humemenos= Respuesta.humedad;
    var humemenos2= Respuesta.humedad2;
    var humemenos3= Respuesta.humedad3;
    button.onclick = document.getElementById(onWater)

}, 700);
