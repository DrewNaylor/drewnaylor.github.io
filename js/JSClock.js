// Clock Part 1 - Put Anywhere Before Part 2


// Anytime Anywhere Web Page Clock Generator
// Clock Script Generated at
// http://www.rainbow.arch.scriptmania.com/tools/clock

function tS(){ x=new Date(); x.setTime(x.getTime()); return x; } 
function lZ(x){ return (x>9)?x:'0'+x; } 
function tH(x){ if(x==0){ x=12; } return (x>12)?x-=12:x; } 
function dE(x){ if(x==1||x==21||x==31){ return 'st'; } if(x==2||x==22){ return 'nd'; } if(x==3||x==23){ return 'rd'; } return 'th'; } 
function dT(){ if(fr==0){ fr=1; document.write('<font size=2 face=Arial><b><span id="tP">'+eval(oT)+'</span></b></font>'); } document.getElementById('tP').innerHTML=eval(oT); setTimeout('dT()',1000); } 
function aP(x){ return (x>11)?'pm':'am'; } 
function y4(x){ return (x<500)?x+1900:x; } 
var dN=new Array('Sunday','Monday','Today is: Tuesday','Wednesday','Thursday','Friday','Saturday'),mN=new Array('January','February','March','April','May','June','July','August','September','October','November','December'),fr=0,oT="dN[tS().getDay()]+' '+tS().getDate()+dE(tS().getDate())+' '+mN[tS().getMonth()]+' '+y4(tS().getYear())+' '+':'+':'+' '+tH(tS().getHours())+':'+lZ(tS().getMinutes())+':'+lZ(tS().getSeconds())+' '+aP(tS().getHours())";


// Clock Part 1 - Ends Here
// Clock Part 2 - This Starts/Displays Your Clock

<script language="JavaScript">dT();</script>

// Clock Part 2 - Ends Here