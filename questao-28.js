import {getnumber,calc_area_coord,write} from "./utils/io_utils.js"

//


write(" ----- AREA DO RETANGULO COM COORDENADAS CARTESIANAS -----\n")

function main(){
    
   // Entrada
   const x1 = getnumber(" Posicao x do Ponto 1: ")
   const y1 = getnumber(" Posicao y do Ponto 1: ")
   const x2 = getnumber(" Posicao x do Ponto 2: ")
   const y2 = getnumber(" Posicao y do Ponto 2: ")
   

   // Processamento
   const area = calc_area_coord(x1,y1,x2,y2)

   // Saída
   write(` A AREA DO RETANGULO QUE PASSA POR ESSES PONTOS É ${area} UNIDADES`)
   


}

main()