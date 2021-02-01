function CheckOperSys(){
  var Device = navigator.platform;
var chk = Device.charAt(0)
if(chk == "L"){
document.getElementById("show").innerHTML="SITE FOR ANDRIOD Mobile";
}
else{
location.replace("https://spat-cloud.github.io/data/ERROR.html");
}
}
