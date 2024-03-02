import {question} from "readline-sync";

export function getnumber(mensagem){
    return Number(question(mensagem))
}

export function num_positivo(mensagem){
    const num = get_number(mensagem)
  
    if (num <= 0){
      print('Valor inválido!')
      return num_positivo(mensagem)
    }
  
    return num
}

export function maior3(n1,n2,n3){
    if (n1 >= n2 && n1 > n3){
        return n1
    }else if (n2 >= n1 && n2 > n3){
        return n2
    }else if (n3 >= n1 && n3 > n2){
        return n3
    }else{
        return n1
    } 
}

export function maior2(n1,n2){
    if (n1>n2){
        return n1
    }else{
        return n2
    }
}
export function menor2(n1,n2){
    if (n1<n2){
        return n1
    }else{
        return n2
    }
}

export function e_triangulo(l1,l2,l3){
    return (l1!=0 && l2!=0 && l3!=0 && (l1+l2>l3 || l1+l3>l2 || l2+l3>l1 )  )
}

export function validar_data(d,m,a){
    if(d < 1 || d > 31 || m < 1 || m > 12){
      return false
    }else if(d == 31 && (m == 4 || m == 6 || m == 9 || m == 11)){
      return false
    }else if(m == 2 && d > 29){
      return false
    }else if(m == 2 && d == 29 && a%4 != 0){
      return false
    }else{
    return true
    }
}


export function primo0a100(num){
    for (let i=2; i<num ; i++)
        if (num%i===0){
            return false
        }

    return (num>1)
}

export function write(mensagem){
    console.log(mensagem)
}

export function opcao3(){
    const num1 = getnumber(" NUM. 1: ")
    const num2 = getnumber(" NUM. 2: ")
    const num3 = getnumber(" NUM. 3: ")
    const opcao = getnumber("\n ESCOLHA UMA OPÇÃO, DE 1 a 3: ")
    
    
    if (opcao==1){
        write(`\n O NUMERO ESCOLHIDO FOI ${num1}`)
    }else if (opcao==2){
        write(`\n O NUMERO ESCOLHIDO FOI ${num2}`)
    }else if (opcao==3){
        write(`\n O NUMERO ESCOLHIDO FOI ${num3}`)
    }else{
        write(`\n NUMERO INVÁLIDO!!!`)
        opcao3()
    }
}

export function par_ou_impar(num){
    if (num % 2 ==0){
        return true
    }else{
        return false
    }

}

export function maior5(n1,n2,n3,n4,n5){
    let maior = n1
    if (n2>maior){
        maior = n2
    }
    if (n3>maior){
        maior = n3
    }
    if (n4>maior){
        maior = n4
    }
    if (n5>maior){
        maior = n5
    }
    return maior
}

export function menor5(n1,n2,n3,n4,n5){
    let menor = n1
    if (n2<menor){
        menor = n2
    }
    if (n3<menor){
        menor = n3
    }
    if (n4<menor){
        menor = n4
    }
    if (n5<menor){
        menor = n5
    }
    return menor
}

export function maioresmedia5(n1,n2,n3,n4,n5,media){
    let maiores = ''
    if (n1>media){
        maiores = `[${n1}]`
    }
    if (n2>media){
        maiores = maiores + `  [${n2}]`
    }
    if (n3>media){
        maiores = maiores + `  [${n3}]`
    }
    if (n4>media){
        maiores = maiores + `  [${n4}]`
    }
    if (n5>media){
        maiores = maiores + `  [${n5}]`
    }
    return maiores
}

export function calculadora(n1,n2,opcao){
    if (opcao == 1){
        write(`    SOMA >>> ${n1} + ${n2} = ${n1+n2}`)
    }else if (opcao == 2){
        write(`    SUBTRACAO >>> ${n1} - ${n2} = ${n1-n2}`)
    }else if (opcao == 3){
        write(`    MULTIPLICACAO >>> ${n1} x ${n2} = ${n1*n2}`)
    }else if (opcao == 4){
        write(`    DIVISAO >>> ${n1} / ${n2} = ${n1/n2}`)
    }
}

export function imc(altura,peso){
    return peso / altura**2
}

export function quad(angulo){
    if (angulo <= 90){
        return Number(1)
    }else if (angulo <= 180){
        return Number(2)
    }else if (angulo <= 270){
        return Number(3)
    }else if (angulo <= 360){
        return Number(4)
    }
}

export function arredondar(numero){
    if ((numero%(parseInt(numero))).toFixed(1) < 0.5){
        write(` ARREDONDANDO >>> ${Math.floor(numero)}`)
    }else{
        write(` ARREDONDANDO >>> ${Math.ceil(numero)}`)
    }
}

export function calc_duracao(hi,mi,hf,mf){
    let hd
    let md
    
    if (hf>hi || (hf == hi && mf>mi)){
        hd = hf - hi
        md = mf - mi
    }else if (hf<hi || (hf == hi && mf<mi )){
        if (mi>0 && mf<mi){
            md = (60 - mi) + mf
        }else if (mi == mf){
            md = 0
        }else if (mi<mf){
            md = mf - mi
        }
        
        if (hf == hi && mf<mi){
        hd = (23-hi) + hf
        }else{
        hd = (24-hi) + hf
        }
    }else if (hf == hi && mf == mi){
        hd = 24
        md = 0
    }

    return `${hd}h e ${md}min.`
}

export function recent_date(dd1,mm1,aa1,dd2,mm2,aa2){
    if (dd1 == dd2 && mm1 == mm2 && aa1 == aa2){
        return "AS DUAS"
    }else if (aa1>aa2){
        return "DATA 1"
    }else if (aa1<aa2){
        return "DATA 2"
    }else if (aa1 == aa2){
        if (mm1 > mm2){
            return "DATA 1"
        }else if (mm2 > mm1){
            return "DATA 2"
        }else if (mm1 == mm2){
            if (dd1 > dd2){
                return "DATA 1"
            }else{
                return "DATA 2"
            } 
        }
    }
}

export function diasparaamd(datadias){
    const anos = Math.floor(datadias/365)
    let resto = datadias%365
    const meses = Math.floor(resto/30)
    const dias = resto%30

    return {
        anos,
        meses,
        dias
    }
}

export function calc_area_coord(x1,y1,x2,y2){
    const base = x2-x1
    const altura = y2-y1
    const area = base*altura
    return area


}