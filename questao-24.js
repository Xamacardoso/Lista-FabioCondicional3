import {getnumber,write} from "./utils/io_utils.js"

//24. Leia os coeficientes (A, B e C) de uma equações de 2° grau e escreva suas raízes. Vale lembrar que o coeficiente A deve ser diferente de 0 (zero).

write(" ----- RAIZES DA EQUACAO -----\n")

function main(){
    
    // Entrada
    write(" ax² + bx + c = 0\n")

    const eqa = getnumber(" Digite um valor para o coeficiente a: ")
    if (eqa == 0){
        write(" 'a' NAO PODE SER 0!!")
    }
    const eqb = getnumber(" Digite um valor para o coeficiente b: ")
    const eqc = getnumber(" Digite um valor para o coeficiente c: ")

    // Processamento
    const delta = (eqb**2) - 4 * eqa * eqc
    if (delta<0){
        write(` EQUACAO INVALIDA! O VALOR DE DELTA É MENOR QUE 0! DELTA: ${delta}`)
    }
    const x1 = (-eqb + Math.sqrt(delta))/(2*eqa)
    const x2 = (-eqb - Math.sqrt(delta))/(2*eqa)
    // Saída
    write(` Raízes de x: ${x1} e ${x2}`)
    
    
}

main()