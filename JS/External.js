alert("Complete el siguiente formulario para obtener su tarjeta de credito de nuestro banco")



//const firstName = prompt("Ingrese su Nombre");
//const lastName = prompt("Ingrese su apellido");
.
for (let i = 0; i < 3; i++){
    const firstName = prompt("ingrese usuario");
    const lastName = prompt("ingrese contrasena");
    const documento = parseInt(prompt("Ingrese su numero de documento"));
    if (firstName != "" && lastName != "" && documento !="") {
        function firstlastName(){
            return "Nombre y Apellido: " + firstName + " " + lastName + "\n" + "Docuemnto: " + documento;
        }
        alert(firstlastName())
        break;
    }else {
        console.log("contrasena equivocada. intente de nuevo le quedan", 2 - i);
    }
    if (i == 2){
        alert("unautorized")
    }

}



/*
if (firstName == "" && lastName ==""
    || firstName == "" 
    || lastName == "" ){
        for (i = 0; i < 3; i++){
        alert("Por favor complete todos los campos")
        }
    }
*/

const estadoCivil = prompt("Casado/a - Soltero/a")
if (estadoCivil == "casado" 
    || estadoCivil == "Casado" 
    || estadoCivil == "casada" 
    || estadoCivil == "Casada"){
        const family = parseInt(prompt("Ingrese cantidad de Hijos/as"));

        if (family <=10){
            for (index = 1; index <= family; index++){
            let nameHijos = prompt("Ingrese nombre de su hijo N" + index)     
            }

        } else if (family > 10){
            console.log("No le podremos dar tarjeta");
            alert("No le podremos dar tarjeta");
        }
        
    }

    const income = parseInt(prompt("Ingrese su sueldo neto mensual"));
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
            







