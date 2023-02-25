const input = document.querySelector('input');
const log = document.getElementById('nom');
const name = document.querySelector('.inputdiv');
const bar1 = document.querySelector('.percent-progress');
const bartext1 = document.getElementById('bartext1');


input.addEventListener('input', updateValue);

function updateValue(e){
    log.textContent = e.target.value; 
}

function inputMostrar(){
  name.style.display = "block";
}

function inputOcultar(){
    name.style.display = "none"
}

function opacityChange(){
    if(name.style.display == "none"){
        inputMostrar();
    }
    else{
        inputOcultar();
    }
}



