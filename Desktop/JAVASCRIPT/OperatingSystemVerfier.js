function CheckOperSys(){
  var Device = navigator.platform;
var chk = Device.charAt(0)
if(chk == "W"){
window.alert("Welcome");
}
else{
window.alert("This Is Not For Linux Operating System Such as Andriod Phone && Iphone\nSupported For Windows Operating Systems");
document.write("Not Supported For Your Operating System".fontsize(80));
setTimeout("end()",4000);
}
}