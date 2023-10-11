let heroi = ["Montalto", 5000];

if (heroi [1] <= 1000){
    heroi[1] = "Ferro"
}else if (heroi [1] <= 2000){
    heroi[1] = "Bronze"
}else if (heroi [1] <= 5000){
    heroi[1] = "Prata"
}else if (heroi [1] <= 7000){
    heroi[1] = "Ouro"
}else if (heroi [1] <= 8000){
    heroi[1] = "Platina"
}else if (heroi [1] <= 9000){
    heroi[1] = "Ascendente"
}else if (heroi [1] <= 10000){
    heroi[1] = "Imortal"
}else if (heroi [1] >= 10001){
    heroi[1] = "Radiante"
}else {
    console.log("Insira um valor de XP válido")
};


console.log(`O herói de nome ${heroi[0]} está no nível ${heroi[1]}`);
