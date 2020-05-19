class Bola {
    constructor(xPos, yPos, diametro, velocidad = 0, masa = 1){
        this.x = xPos;
        this.y = yPos;
        this.d = diametro;
        this.v = velocidad;
        this.m = masa;
        this.bordeD = this.x + this.d/2;
        this.bordeI = this.x - this.d/2;
        
    }

    mostrar(limites= false){
      circle(this.x, this.y, this.d);
      
      if (limites){
        rect(this.bordeD, 0, 1, height);
        rect(this.bordeI, 0, 1, height);
      
      }
    }

    mover(){
      this.x += this.v;
      this.bordeD = this.x + this.d/2;
      this.bordeI = this.x - this.d/2;
    }
  
    choque(obj){
      return !(this.bordeI > obj.bordeD || this.bordeD < obj.bordeI);
    }
    
    rebota(obj){
      let suma = this.m + obj.m;
      let vf = (this.m - obj.m) * this.v/suma + 2*obj.m*obj.v/suma;
      
      return vf;
    }
}