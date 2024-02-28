function fahrenheit() {
  let temperatura = document.getElementById("celsius");
  let temp = Number(temperatura.value);
  let resultado = 1.8 * temp + 32;
  let kelvin = temp + 273;
  let final = `${resultado} °F e Kelvin ${kelvin}`;

  document.getElementById("resultado").innerText = final;
}


//var celcuis = 10;
//var fah = 0;

//DEIXAR O NOME DIFERENTE DA FUNCAO 

//function fahrenheit(){
//alert()    

//receber o dado do documento
//celcuis = document.getElementId('celcius').value;
//operacao
//fah = (celcius * 1.8) + 32;
//escrevendo no documento o resultado 
//document.getElementId('resultado').value = fah;
//}