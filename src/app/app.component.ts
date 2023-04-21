import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora';

  pantalla:string = "0";
  acumulador:number = 0;
  resultado:number = 0;
  signo:string = "";

  concatenar(num:string):void{

    if(this.pantalla === "0"){
      this.pantalla = num;
    }
    else{
    this.pantalla = this.pantalla + num;
    }
    
    this.acumulador = parseFloat(this.pantalla);

  }

  operaciones(signo:string):void{

    if(this.signo === ""){

      this.resultado = parseFloat(this.pantalla);

    } 
      else if(this.signo === "+"){
      this.resultado += this.acumulador;
      }
      else if(this.signo === "-"){
      this.resultado -= this.acumulador;
      }
      else if(this.signo === "*"){
      this.resultado *= this.acumulador;
      }
      else if(this.signo === "/"){
      this.resultado /= this.acumulador;
      }

      this.acumulador = 0;
    
      this.signo = signo;

      this.pantalla = "";
  }

  igual():void{

    if(this.signo == "+"){
      this.resultado += this.acumulador;
      }
      else if(this.signo == "-"){
      this.resultado -= this.acumulador;
      }
      else if(this.signo == "*"){
      this.resultado *= this.acumulador;
      }
      else if(this.signo == "/"){
      this.resultado /= this.acumulador;
      }

      this.acumulador = 0;

      this.signo = "";

    this.pantalla = String(this.resultado);

    if(this.pantalla === "NaN"){
      this.pantalla = "INDETERMINACIÓN";
    }

  }

  clearActual(){
    this.pantalla = "";
  }

  clearTotal(){
    this.pantalla = "";
    this.acumulador = 0;
    this.resultado = 0;
  }

  decimal():void{
    if(this.pantalla.includes(".") || this.pantalla[this.pantalla.length-1] === ".")
    {

    }
    else if(this.pantalla === ""){
    this.pantalla += "0.";
    }
    else
    {
      this.pantalla += ".";
    }
  }

  borrar():void{
    if(this.pantalla !== "0"){
    this.pantalla = this.pantalla.substring(0, this.pantalla.length-1);
    }
  }
  
  cambiarSigno():void{
    if(this.pantalla.charAt(0)==="-"){
      this.pantalla=this.pantalla.substring(1, this.pantalla.length);
    }
    else if(this.pantalla==="0"){
      this.pantalla = "-";
    }
    else{
      this.pantalla = "-" + this.pantalla;
    }

    this.acumulador = parseFloat(this.pantalla);

  }

}
