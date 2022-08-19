alert("Complete el siguiente formulario para obtener su tarjeta de credito de nuestro banco." +"\n" + "Muchas gracias.")

let firstName;  
let lastName;  
let documento; 

for (let i = 0; i < 3; i++){
    firstName = prompt("ingrese usuario");
    lastName = prompt("ingrese contrasena");
    documento = parseInt(prompt("Ingrese su numero de documento"));
    if (firstName != "" && lastName != "" && documento !=""){
        function firstlastName(){
            return "Nombre y Apellido: " + firstName + " " + lastName + "\n" + "Docuemnto: " + documento;
        }
        alert(firstlastName())
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
        } else if (family > 10){
            console.log("No le podremos dar tarjeta");
            alert("No le podremos dar tarjeta");
        }  
    }


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
        if (cantidadDeTarjetas <= 5){
            cupo = parseInt(prompt("Ingrese el cupo total (Suma de todos los limites de sus tarjetas)"));          
        }else if (cantidadDeTarjetas > 5){
            console.log("No le podremos dar tarjeta");
            alert("No le podremos dar tarjeta");
        }
    }


    const job = prompt("Trabajas en relacion de dependencia?");
    const activity = prompt("Tipo de trabajo");

    if((job == "si" && income < 1000)
    || (job == "Si" && income < 1000)
    || (job == "yes" && income < 1000)
    || (job == "Yes" && income < 1000)){
        console.log("No le podremos dar tarjetas.");
        alert("No le podremos dar tarjetas.");
    }else if (job =="si" && gastos >= income) {
        console.log("No le podremos dar tarjetas ya que sus gastos son iguales o mayores a sus ingresos.");
        alert("No le podremos dar tarjetas ya que sus gastos son iguales o mayores a sus ingresos.");   
    }else if (cupo < income*2) {
        console.log("No le podremos dar tarjetas ya que su cupo es menor a sus ingresos x2.");
        alert("No le podremos dar tarjetas ya que su cupo es menor a sus ingresos x2.");
    }else if (job == "no" && income < 3000 && gastos >= income) { //revisar esto porque no funcionaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        console.log("No le podremos dar tarjetas ya que su ingreso es menor a 3000 y a su vez sus gastos son igules o mayores a su ingreso.");
        alert("No le podremos dar tarjetas ya que su ingreso es menor a 3000 y a su vez sus gastos son igules o mayores a su ingreso.");
    }else {
        console.log("Fue aceptado para recibir nuestras tarjetas.Nos estaremos conctactando con usted");
        alert("Fue aceptado para recibir nuestras tarjetas.Nos estaremos conctactando con usted");
    }

    



/* Otra forma de resolver el formulario por cantidad de Hijos
        switch (family){
            case 1:
                let nameHijos = prompt("Ingrese nombre de su hijo");
                alert("Hijo numero 1" + nameHijos)
                break;
            case 2:
                for (index = 1; index <= 2; index++){
                    let nameHijos = prompt("Ingrese nombre de su hijo N" + index)          
                }
                break;
            case 3:
                for (index = 1; index <= 3; index++){
                    let nameHijos = prompt("Ingrese nombre de su hijo N" + index)          
                }
                break;
            case 4:
                for (index = 1; index <= 4; index++){
                    let nameHijos = prompt("Ingrese nombre de su hijo N" + index)          
                }
                break;
            default:
            break;         
                }
                if (family >= 5){
                    console.log("No le podremos dar tarjeta");
                    alert("No le podremos dar tarjeta")
                }
                
            }
*/
            







