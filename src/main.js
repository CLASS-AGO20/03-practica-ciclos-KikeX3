export default class App {

    factorial(numero){
        let factorial = 1;

        for (let i = numero ; i > 0 ; i = i - 1 ){
            
            factorial = factorial * i;

        }
        return factorial
    }

    convertirAstring(numero){

    }

    obtenerDivisibles(numero){

    }

    elevar(numero,potencia){

    }
}

let app = new App();

console.log(app.factorial(5));
