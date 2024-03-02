import {getnumber,write} from "./utils/io_utils.js"

//25. Verifique a validade de uma senha fornecida pelo usuário. A senha é 1234. O algoritmo deve escrever uma mensagem de permissão de acesso ou não.

write(" ----- ACESSO >> SENHA -----\n")

function main(){
    
   // Entrada
   const senha = 1234
   const entrada = getnumber(" SENHA: ")

   // Processamento
   if (entrada != senha){
    write(" SENHA INCORRETA!!\n ACESSO INVÁLIDO!!!")
    main()
   }else{
    write(" SENHA CORRETA!!\n ACESSO GARANTIDO!!")
   }

    
    
}

main()