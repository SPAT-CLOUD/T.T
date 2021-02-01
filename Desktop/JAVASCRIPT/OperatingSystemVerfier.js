function CheckOperSys(){
  var Device = navigator.platform;
var chk = Device.charAt(0)
if(chk == "W"){
window.alert("Welcome");
}
else{
location.replace("https://spat-cloud.github.io/data/ERROR.html");
}
}
