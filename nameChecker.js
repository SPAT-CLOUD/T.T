<script>
function gtdwn(){
var x = document.getElementById("ct").value;
if((x==='')||(x===null)){
alert('Enter NAME');
window.navigator.vibrate([200,122,1212,121,214,2212,212,4545,545,545,454]);
return false;
}
else if(x.length>=10){
document.getElementById("Name").style.color="green";
document.getElementById("Name").innerHTML="Thanks For Downloading " + x + " Wait For Some Time (10secs) If Movie Is Not Downloading Ask Who Shared this or Creator";
setTimeout(() => document.write("Taking To Download Page " + x + " Please Wait..."),4000);
setTimeout("bo()",6000);
}else if(x.length!==10){
window.alert('Length should be 10');
}
}
</script>
