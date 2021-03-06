export default class App {

    factorial(numero){
        let factorial = 1;

        for (let i = numero ; i > 0 ; i = i - 1 ){
            
            factorial = factorial * i;

        }
        return factorial
    }

    convertirAstring(numero){
        let string = "";
        let i = 1;

        while(i <= numero){
            string = string + "*";
            i = i + 1;
        }
        return string;
    }

    obtenerDivisibles(numero){

        let divisibles = 0;
        let i = numero;

        do{

            if(numero%i === 0){
                divisibles = divisibles + 1;
            }

            i = i - 1;
        }while(i>0);
       
        return divisibles;

    }

    elevar(numero,potencia){

       let base = numero;
       let pot = potencia;
       let r = 1;

       for(let i = 0; i < pot; i++){
           r = r * base;
       }
       return r;
    }
}

let app = new App();

console.log(app.factorial(5));

console.log(app.convertirAstring(120));

console.log(app.obtenerDivisibles(6));

console.log(app.elevar(5));

console.log(app.elevar(3,2));