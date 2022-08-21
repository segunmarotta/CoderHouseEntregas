alert("Complete el siguiente formulario para obtener su tarjeta de credito de nuestro banco." +"\n" + "Muchas gracias.")

let firstName;  
let lastName;  
let documento; 

for (let i = 0; i < 3; i++){
    firstName = prompt("Ingrese usuario");
    lastName = prompt("Ingrese contrasena");
    documento = parseInt(prompt("Ingrese su numero de documento"));
    if (firstName != "" && lastName != "" && documento !=""){
        function firstlastName(){
            return "Nombre y Apellido: " + firstName + " " + lastName + "\n" + "Docuemnto: " + documento;
        }
        alert(firstlastName())
        console.log(firstlastName())
        break;
    }else {
        console.log("Por favor complete todos los campos. Intente de nuevo le quedan", 2 - i);
    }
    if (i == 2){
        alert("unautorized")
    }
}

const estadoCivil = prompt("Casado/a - Soltero/a")
let family;
if (estadoCivil == "casado" 
    || estadoCivil == "Casado" 
    || estadoCivil == "casada" 
    || estadoCivil == "Casada"){
        family = parseInt(prompt("Ingrese cantidad de Hijos/as"));
        if (family <=10){
            for (index = 1; index <= family; index++){
            let nameHijos = prompt("Ingrese nombre de su hijo N" + index)     
            }
        }
    }

console.log("Estado Civil =", estadoCivil); //para que en la consola muestre cada valor
console.log("Cantidad de Hijos =", family); //para que en la consola muestre cada valor


const income = parseInt(prompt("Ingrese su sueldo neto mensual en USD"));
const gastos = parseInt(prompt("gastos"));
let cupo;
let cantidadDeTarjetas;
const creditCard = prompt("Tiene tarjeta de credito de otros bancos?");
if (creditCard == "yes"
    || creditCard == "Yes" 
    || creditCard == "si"
    || creditCard == "Si") {
        cantidadDeTarjetas = parseInt(prompt("Cuantas tarjetas ya tiene?"));
        cupo = parseInt(prompt("Ingrese el cupo total (Suma de todos los limites de sus tarjetas)"));
    }

console.log("Ingreso =", income); //para que en la consola muestre cada valor
console.log("Gastos =", gastos); //para que en la consola muestre cada valor
console.log("Cantidad de tarjetas =", cantidadDeTarjetas); //para que en la consola muestre cada valor
console.log("Cupo tarjetas =", cupo); //para que en la consola muestre cada valor


const job = prompt("Trabajas en relacion de dependencia?");
const activity = prompt("Tipo de trabajo");

console.log("Relacion de dependencia =", job); //para que en la consola muestre cada valor
console.log("Actividad =", activity); //para que en la consola muestre cada valor



if((job == "si" && income < 1000)
    || (job == "Si" && income < 1000)
    || (job == "yes" && income < 1000)
    || (job == "Yes" && income < 1000)){
        console.log(firstlastName(), "\n", "No le podremos dar tarjetas.");
        alert(firstlastName() + "\n" + "No le podremos dar tarjetas.");
    }
    else if ((job =="si" && gastos >= income)
            || (job =="Si" && gastos >= income)
            || (job =="yes" && gastos >= income)
            || (job =="Yes" && gastos >= income)) {
        console.log(firstlastName(), "\n", "No le podremos dar tarjetas ya que sus gastos son iguales o mayores a sus ingresos.");
        alert(firstlastName() + "\n" + "No le podremos dar tarjetas ya que sus gastos son iguales o mayores a sus ingresos.");   
    }
    else if (cupo < income*2) {
        console.log(firstlastName(), "\n","No le podremos dar tarjetas ya que su cupo es menor a sus ingresos x2.");
        alert(firstlastName() + "\n" + "No le podremos dar tarjetas ya que su cupo es menor a sus ingresos x2.");
    }
    else if ((job == "no" && income < 3000 && gastos >= income)
            || (job == "No" && income < 3000 && gastos >= income)){
        console.log(firstlastName(), "\n", "No le podremos dar tarjetas ya que su ingreso es menor a 3000 y a su vez sus gastos son igules o mayores a sus ingresos.");
        alert(firstlastName() + "\n" + "No le podremos dar tarjetas ya que su ingreso es menor a 3000 y a su vez sus gastos son iguales o mayores a sus ingresos.");
    }
    else if (cantidadDeTarjetas > 5){
        console.log(firstlastName(), "\n", "No le podremos dar tarjeta usted ya tiene muchas tarjetas de otros bancos");
        alert(firstlastName() + "\n" + "No le podremos dar tarjeta usted ya tiene muchas tarjetas de otros bancos");
    }
    else if (family > 10){
        console.log(firstlastName(), "\n", "No le podremos dar tarjeta");
        alert(firstlastName() + "\n" + "No le podremos dar tarjeta");
    }
    else {
        console.log(firstlastName(), "\n", "Fue aceptado para recibir nuestras tarjetas. Nos estaremos contactando con usted");
        alert(firstlastName() + "\n" + "Fue aceptado para recibir nuestras tarjetas. Nos estaremos contactando con usted");
    }









