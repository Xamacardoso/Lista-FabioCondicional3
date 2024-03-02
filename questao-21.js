import {arredondar, getnumber,write} from "./utils/io_utils.js"

//21. Realize arredondamentos de números utilizando a regra usual da matemática: se a parte fracionaria for maior do que ou igual a 0,5, o numero é arredondado para o inteiro imediatamente superior, caso contrario, é arredondado para o inteiro imediatamente inferior.

write(" ----- ARREDONDAMENTOS -----\n")

function main(){
    
    // Entrada
    const numero = getnumber(" NUMERO: ")

    // Processamento e Saída
    arredondar(numero)
    
    if (numero != 0){
        main()
    }else{
        
    }
    
}

main()