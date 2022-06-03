
function verificar (string){
    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i] ) {
            return console.log(false)
        }
    }
    return console.log(true);
}
verificar('amacianma')

// modo 2

function verificar (string){
console.log(string === string.split('').reverse().join(''));
}
verificar('cachooro');