// console.log('HAHAHAHA');


// var fs = require('fs');
// var text = fs.readFileSync('./data.txt', { encoding: 'utf8' });
// console.log(text);

var available = [3, 3, 2];
var processArray = [
    {
        allo: [0, 1, 0],
        max: [7, 5, 3],
        isFinish: false
    },
    {
        allo: [2, 0, 0],
        max: [3, 2, 2],
        isFinish: false
    },
    {
        allo: [3, 0, 2],
        max: [9, 0, 2],
        isFinish: false
    },
    {
        allo: [2, 1, 1],
        max: [2, 2, 2],
        isFinish: false
    },
    {
        allo: [0, 0, 2],
        max: [20, 3, 3],
        isFinish: false
    }
];


// Return new array = arr2 - arr1 (index by index)
function subTwoArray(arr1, arr2) {
    var result = [];
    for (var i = 0; i < arr1.length; i++) {
        result.push(arr2[i] - arr1[i]);
    }
    return result;
}

// Return new array = arr1 + arr2
function sumTwoArray(arr1, arr2) {
    var result = [];
    for (var i = 0; i < arr1.length; i++) {
        result.push(arr2[i] + arr1[i]);
    }
    return result;
}

// Return true when array 1 <= array2
function compareTwoArray(arr1, arr2) {
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] > arr2[i]) {
            return false;
        }
    }
    return true;
}


function banker(available, processArray) {
    var need = [];
    var index = 0;
    var isFail = false;
    for (var data of processArray) {
        if (!data.isFinish)
            need.push(subTwoArray(data.allo, data.max));
    }
    //console.log(need);
    var letTry = need.length;
    //console.log(letTry);
    var count = 0;
    while (true) {
        for (var i = 0; i < need.length; i++) {
            if (processArray[i].isFinish === false) {
                if (compareTwoArray(need[i], available)) {
                    available = sumTwoArray(available, need[i]);
                    processArray[i].isFinish = true;
                    console.log("P" + i);
                }
            }
        }
        letTry--;
        //console.log(letTry);
        for(var data of processArray){
            if(data.isFinish === true){
                count++;
                
            }
        }
        if(count === need.length){
            console.log("You can see the solution above");
            break;
        }else if(letTry < 0){
            console.log("Fail!");
            break;
        }
        count = 0;
    }

}

banker(available, processArray);


// function Process(allo, max) {
//     this.allo = allo;
//     this.max = max;
//     this.isFinish = false;
// }




// function readFileToProcess(string){
//     var data = '';
//     var startArr = false;
//     var array = [];
//     var count = 0;

//     for(var i = 0; i < string.length; i++){
//         if(!startArr){
//             if(string[i] === '['){
//                 startArr = true;
//                 continue;
//             }
//         }else{
//             if(stinr[i] != ' '){
//                 array.push(string[i]);
//             }
//             if(string[i] === ']'){
//                 startArr = false;
//                 count = 1;
//             }
//         }

//     }
// }