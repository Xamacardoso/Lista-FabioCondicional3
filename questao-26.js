import {getnumber,maior3,write} from "./utils/io_utils.js"

//26. Leia os 3 (três) lados de um triângulo e identifique sua hipotenusa e seus catetos.

write(" ----- CATETOS E HIPOTENUSA -----\n")

function main(){
    
   // Entrada
   const a = getnumber(" Digite o valor do lado a: ");
   const b = getnumber(" Digite o valor do lado b: ");
   const c = getnumber(" Digite o valor do lado c: ");

   // Processamento
   const hipotenusa = maior3(a,b,c)
   let catetos
   if (hipotenusa == a){
      catetos = (`${b} e ${c}`)
   }else if (hipotenusa == b){
      catetos = (`${a} e ${c}`)
   }else {
      catetos = (`${a} e ${b}`)
   }
   // Saída 
   write(`\n HIPOTENUSA: ${hipotenusa}\n CATETOS: ${catetos}`) 
}

main()