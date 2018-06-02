$(document).ready(function(){
    console.log('init app')
    var gender = prompt('Ingrese su Genero','Male/Female/Other')
    var edad = prompt('Ingrese su Edad');
    var edad = parseInt(edad);
    var flag = 0
    
    while(flag === 0){            
            if (!gender || !edad){
                //console.log(!gender,!edad)
                console.log('Alguno de los datos no fue completado o son incorrectos, vuelva a intentarlo')
                gender = prompt('Ingrese su Genero','Male/Female/Other')
                edad = prompt('Ingrese su Edad');
                edad = parseInt(edad,10);  
            }else{   
                switch (gender){
                    case 'Male':
                    case 'male':
                    case 'MALE':
                        gender = 'Sr.' 
                        flag = 1   
                        break
                    case 'Female':
                    case 'female':
                    case 'FEMALE':
                        gender = 'Sra.' 
                        flag = 1   
                        break
                    case 'Other':
                    case 'other':
                    case 'OTHER':
                        gender = 'Srx.' 
                        flag = 1   
                    break
                    default:
                        gender = ''   
                        break 
                }
                if (flag === 1){
                    if(edad>=18 && edad < 100){ 
                        edad = 'usted es mayor de edad puede ingresar'
                    }else if(edad>=100){
                        edad = 'usted esta zarpadamente mayor, obvio que puede ingresar'
                    }else{
                        edad = 'usted es menor de edad no puede ingresar'
                    }    
                    console.log(gender,edad)
                }
            }
    }
})