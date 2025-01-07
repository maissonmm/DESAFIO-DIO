

let Nome = "Maisson";
let XP = 0;
let NIVEL = "" ;

console.log("Iniciando o programa...");

while (XP <= 10000) {
    
    if (XP < 1000) {
        NIVEL = "Ferro";
    } else if (XP >= 1000 && XP < 2000) {
        NIVEL = "Bronze";
    } else if (XP >= 2000 && XP < 5000) {
        NIVEL = "Prata";
    } else if (XP >= 5000 && XP < 7000) {
        NIVEL = "Ouro";
    } else if (XP >= 7000 && XP < 8000) {
        NIVEL = "Platina";
    } else if (XP >= 8000 && XP < 9000) {
        NIVEL = "Ascendente";
    } else if (XP >= 9000 && XP < 10000) {
        NIVEL = "Imortal";
    } else if (XP >= 10000) {
        NIVEL = "Radiante";
    }

    
    switch(NIVEL){
        case "Radiante":
            console.log("O Herói de nome " + Nome + " está no nível de " + NIVEL)
    }
    
    


    if (NIVEL == "Radiante"){
        console.log("Parabens " + Nome + " voce esta no nivel " + NIVEL + " pronto para enfrentar o Boss");
        break;
    }
    else{
        console.log("OLA " + Nome + " VOCÊ NÃO ESTA PRONTO PARA O BOSS,VOCE TEM QUE ESTAR NO NIVEL RADIANTE PARA SEGUIR E SEU NIVEL AGORA É " + NIVEL + " ACABE COM OS MONTROS MENORES POR ENQUANTO E VOLTE QUANDO ESTIVER NIVEL RADIANTE ");
    }





    

    XP += 1000;
}