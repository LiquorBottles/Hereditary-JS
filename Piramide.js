// Piramide
let altura = 6;
for(let i = 0; i< altura; i++){
    let lines = ""
    for(let j = 0; j<altura - i;j++){
        lines += " "
    }
    for(let k = 0; k-2*i-1;k++ ){
        lines += "*"
    }
    console.log(lines);
}