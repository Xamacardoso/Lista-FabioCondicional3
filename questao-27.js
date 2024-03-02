import {getnumber,diasparaamd,write} from "./utils/io_utils.js"

//27. Determine a idade de uma pessoa, em anos, meses e dias, dadas a data (dia, mês e ano) do seu nascimento e a data (dia, mês e ano) atual.



function main(){
    
   // Entrada
   write(" ----- DATA DE NASCIMENTO -----\n")
   
   const anonasc = getnumber(" QUE ANO VOCÊ NASCEU?: ")
   const mesnasc = getnumber(" QUE MES VOCÊ NASCEU?: ")
   const dianasc = getnumber(" QUE DIA VOCÊ NASCEU?: ")
   
   write("\n ----- DATA ATUAL -----\n")

   const anoatual = getnumber(" EM QUE ANO ESTAMOS?: ")
   const mesatual = getnumber(" EM QUE MES ESTAMOS?: ")
   const diaatual = getnumber(" QUE DIA É HOJE?: ")

   // Processamento
   const somadiasnasc = anonasc * 365 + mesnasc * 30 + dianasc
   const somadiasatual = anoatual * 365 + mesatual * 30 + diaatual
   const idade_dias = somadiasatual-somadiasnasc
   const idade = diasparaamd(idade_dias)

   // Saída
   write(` A SUA IDADE É DE ${idade.anos} ANOS, ${idade.meses} MESES E ${idade.dias} DIAS!`)
   


}

main()