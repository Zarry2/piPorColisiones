var x0, y0;
var bola1, bola2;
let pop;

var conteo = 0;
let pantalla;
let muestreo = 2499900;
var digitos;
var btnInicio;
var comienzo = false;
var pi;
var masaB1;

function setup() {
  createCanvas(windowWidth, 300);
  background(200);
  escenario();
  noStroke();
  
  pop = new Audio('pop.wav');
  pantalla = createDiv(conteo);
  pantalla.style('font-size', '50pt');
  pantalla.style("font-family","Helvetica");
  pantalla.position(width/3, height);

  digitos = createSlider(1, 8, 1, 1);
  digitos.position(width - 180, 50);
  
  pi = createP("Digitos = 0");
  pi.position(width - 150, 20)
  digitos.input(actualizarDigitos);
  
 
  
  bola2 = new Bola(x0/4, y0-20, 40, 0);

  
  btnInicio = createButton("Inicio");
  btnInicio.style("font-family","Helvetica");
  btnInicio.style("background-color","#00cc66");
  btnInicio.style("color","#ffffff");
  btnInicio.size(100,50);
  btnInicio.style("font-size", "25px");
  btnInicio.position(width - 160, 70);
  btnInicio.mousePressed(empezar);

  pantalla.html('π: 0');



}

function draw() {
  background(200);
  escenario();
  if (comienzo){
    simulacion();    
  }
}

function simulacion(){
  let sonido = false;
  
  for (var i = 0; i < muestreo; i++){
    bola1.mover();
    bola2.mover();
  
    if(bola1.choque(bola2)){
      const v1 = bola1.rebota(bola2);
      const v2 = bola2.rebota(bola1);

      bola1.v = v1;
      bola2.v = v2;

      sonido = true;
      conteo ++;
    }

    if (bola2.bordeI <= 50){
      bola2.v *= -1;
      sonido = true;
      conteo ++;
    }
  }
  
  if(sonido){
    pop.play();
  }
  
  fill(255, 80, 80);
  bola1.mostrar();
  fill(0, 153, 255);
  bola2.mostrar();
  pantalla.html('π: '+ conteo);

}

function escenario(){
  fill(0);
  var altura = height - height/5;
  //var anchura = 
  rect(50, 50, 10, altura);
  rect(50, altura+50, width, 10);
  y0 = altura + 50;
  x0 = width + 50;

}

function empezar(){
  comienzo = !comienzo;
  bola1 = new Bola(x0/2, y0-50, 100 , -3.5/muestreo, masaB1);
}

function actualizarDigitos(){
  var n = digitos.value() - 1;
  
  masaB1 = pow(100, n);
  pi.html('Digitos: ' + n);
}