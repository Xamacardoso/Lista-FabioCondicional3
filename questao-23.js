import {getnumber,validar_data,write,recent_date} from "./utils/io_utils.js"

//23. Leia 2 datas (cada data é composta por 3 variáveis inteiras: dia, mês e ano) e escreva qual delas é a mais recente.

write(" ----- DATA MAIS RECENTE -----\n")

function main(){
    
    // Entrada
    write(" === DATA 1 ===\n")

    const dia1 = getnumber(" DIA DA DATA 1: ")
    const mes1 = getnumber(" MES DA DATA 1: ")
    const ano1 = getnumber(" ANO DA DATA 1: ")
    if (validar_data(dia1, mes1, ano1) != true){
        write(" DATA INVALIDA!!")
        main()
    }
    write("\n === DATA 2 ===\n")
    const dia2 = getnumber(" DIA DA DATA 2: ")
    const mes2 = getnumber(" MES DA DATA 2: ")
    const ano2 = getnumber(" ANO DA DATA 2: ")
    if (validar_data(dia2, mes2, ano2) != true){
        write(" DATA INVALIDA!!")
        main()
    }

    // Processamento
    const datamaisrecente = recent_date(dia1,mes1,ano1,dia2,mes2,ano2)

    // Saída
    write(` DATA MAIS RECENTE: ${datamaisrecente}`)
    
    
}

main()