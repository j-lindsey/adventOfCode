const fs = require('fs');


function checkTrees(treeArray, rightPos, down) {
    let trees = 0;
    let position = rightPos;
    const length = treeArray[0].length-1;
    console.log("position: "+position + " length: "+ length+ " down "+ down);
    for (let i = down; i < treeArray.length; i+=down) {
        console.log(treeArray[i]);
        if(position > length){
            console.log('modulus: '+ position%length);
            position = position % length -1;            
        }
        console.log(position);
        if (treeArray[i][position] === '#') {
            trees++;
        }
        console.log(trees);
        position += rightPos;
    }
    console.log(trees);
    return trees;
}

function Readfile() {
    fs.readFile('./advent3.txt', (err, data) => {
        const location = data.toString();
        const treeArray = location.split('\r\n');
        const treeR1D1 = checkTrees(treeArray, 1, 1);
        const treesR3D1 = checkTrees(treeArray,3,1);
        const treesR5D1 = checkTrees(treeArray, 5, 1);
        const treesR7D1 = checkTrees(treeArray, 7, 1);
        const treesR1D2 = checkTrees(treeArray, 1, 2);
        console.log(treeR1D1*treesR3D1*treesR5D1*treesR7D1*treesR1D2);
    })
}

Readfile();
