button = document.getElementById("calender");
var open = false;

const Calender = document.createElement('div');
const parent = document.getElementById('calender-id');
Calender.className = "astrocalender";
Calender.innerHTML = "Calender Content";



button.onclick = ()=>{
    open = !open;
    if(open){
        parent.append(Calender);
    }
    else{
        parent.removeChild(Calender);
    }
}