const fs = require('fs');


function checkValid(passwordsArray) {
    let valid = 0;
    for (let i = 0; i < passwordsArray.length; i++) {
        let count = 0;
        let array = passwordsArray[i].split(' ');
        let minVal = array[0].substring(0, array[0].indexOf('-'));
        let maxVal = array[0].substring((minVal.length + 1), array[0].length);
        let char = array[1].substring(0, 1);
        for (let j = 0; j < array[2].length; j++) {
            if(array[2][j] === char){
                count++;
            }
        }
        if(count <= maxVal && count >=minVal){
            valid++;
        }
    }
    return valid;
}

function checkValid2(passwordsArray){
    let valid = 0;
    for (let i = 0; i < passwordsArray.length; i++) {
        let count = 0;
        let array = passwordsArray[i].split(' ');
        let minVal = array[0].substring(0, array[0].indexOf('-'));
        let maxVal = array[0].substring((minVal.length + 1), array[0].length);
        let char = array[1].substring(0, 1);
        if(array[2][minVal-1]=== char && array[2][maxVal-1] !== char){
            valid++;            
        }else if(array[2][minVal-1]!== char && array[2][maxVal-1] === char){
            valid++;
        }
    }
    return valid;
}
function Readfile() {
    fs.readFile('./advent2.txt', (err, data) => {
        const passwords = data.toString();
        const passwordArray = passwords.split('\r\n');
        const valid = checkValid(passwordArray);
        console.log("Part1: " +valid);
        const valid2 = checkValid2(passwordArray);
        console.log("Part2: " +valid2);
    })
}

Readfile();
