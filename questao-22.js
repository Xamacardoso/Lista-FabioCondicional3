import {calc_duracao, getnumber,write} from "./utils/io_utils.js"

//22. Leia a hora do início de um jogo e a hora de fim do jogo (cada hora é composta por 2 variáveis inteiras: hora e minuto). Calcule e escreva a duração do jogo (horas e minutos), sabendo-se que o tempo máximo de duração do jogo é de 24 horas e que ele pode iniciar-se em um dia e terminar no dia seguinte.

write(" ----- DURACAO DO JOGO -----\n")

function main(){
    
    // Entrada
    const hi = getnumber(" O JOGO COMEÇOU QUE HORAS?: ")
    const mi = getnumber(" O JOGO COMEÇOU EM QUANTOS MINUTOS?: ")
    const hf = getnumber(" JOGO ENCERRADO QUE HORAS?: ")
    const mf = getnumber(" JOGO ENCERRADO QUANTOS MINUTOS: ")

    // Processamento
    const duracao = calc_duracao(hi,mi,hf,mf)

    // Saída
    write(` O JOGO DUROU ${duracao}`)
    
}

main()