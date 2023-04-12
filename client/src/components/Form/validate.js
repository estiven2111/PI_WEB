export default function validate(input){
const error = {};
    if(input.name.length < 5 ){
       
        error.name = "el nombre debe contener mas de 5 caracteres"
    }
    if (isNaN(input.rating) ) {
        error.rating = "debe ser un nuemero"
    }
    return error;
}