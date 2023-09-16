const input = document.querySelector('input');
const log = document.getElementById('nom');
const name = document.querySelector('.inputdiv');

const job = document.querySelector('.lab-container');
const opinion = document.querySelector('.op-container');

const barfa = document.getElementById('bar');

let trabajo = false
let opiniones = false

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

function jobMostrar(){
    job.style.display = "block";
    trabajo = true;
    job.scrollIntoView();
}

function jobOcultar(){
    job.style.display = "none";
    trabajo = false;
}

function jobOpacity(){
    if(job.style.display == "block"){
        jobOcultar();
    }
    else if(opiniones == true){
        opOcultar();
        jobMostrar();
    }
    else{
        jobMostrar();
    }
}

function opMostrar(){
    opinion.style.display = "block";
    opiniones = true;
    opinion.scrollIntoView();
}

function opOcultar(){
    opinion.style.display = "none";
    opiniones = false;
}

function opiOpacity(){
    if(opinion.style.display == "block"){
        opOcultar();
    }
    else if(trabajo == true){
        jobOcultar();
        opMostrar();
    }
    else{
        opMostrar();
    }
}

let barInvisible = true;

barfa.addEventListener('click', function() {
    const barcont = document.querySelector('.bar-container');
    const body = document.body;

    if(barInvisible == true){
        barcont.style.transform = "translateX(0%)";
        body.style.overflow = "hidden"
        barInvisible = false;

    }
    else{
        barcont.style.transform = "translateX(100%)";
        body.style.overflow = "auto";
        barInvisible = true;
    }
})

/*
function barOpacity(){
    if(bar.style.display == "none"){
        barMostrar();
    }
    else{
        barOcultar();
    }

}

function barMostrar(){
    bar.style.display = "inline-block";
}

function barOcultar(){
    bar.style.display = "none";
}

*/