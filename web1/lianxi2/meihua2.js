var pics1=document.getElementById("pics");
var n=1;

setInterval(function(){
    if(n>4) n=1
    pics1.innerHTML="<img src='img2/r (" + n + ").jpg'/>";
    // pics1.innerHTML="6666";
    // odiv1.innerHTML = "<img src='img/"+oweek2[n]+".png' />";
    n++;
},2000);