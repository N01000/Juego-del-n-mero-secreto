let numeroSecreto;
let intentos=0;
let listaNumerosSorteados=[];
let numeroMaximo=10;
function asignarTextoElemento(elemento, texto){
    let elementoHMTL=document.querySelector(elemento);
    elementoHMTL.innerHTML=texto;
    return;
}
function verificarIntento(){
    let numeroUsuario= parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto);
    if (numeroUsuario===numeroSecreto){
        asignarTextoElemento('p',`acertaste el numero en ${intentos}${(intentos===1)?' vez':' veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(numeroUsuario>numeroSecreto){
            asignarTextoElemento('p','el numero secreto es menor');
        }
        else{
            asignarTextoElemento('p','El numero secreto es mayor');
        intentos++;
        limpiarCaja();
        }
    return;
}}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario').value='';
}
function generarNumeroSecreto(){
   let numeroGenerado =Math.floor(Math.random()*10)+1;
   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);
   if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros');
    }else{
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();

        }else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
        }}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p', `Indicar numero del 1 al ${numeroMaximo}`);
    numeroSecreto= generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesIniciales();
