// console.log('HAHAHAHA');


// var fs = require('fs');
// var text = fs.readFileSync('./data.txt', { encoding: 'utf8' });
// console.log(text);

var available = [0, 0, 0];
var processArray = [
    {
        allo: [0, 1, 0],
        request: [10, 0, 0],
        isFinish: false
    },
    {
        allo: [2, 0, 0],
        request: [7, 0, 2],
        isFinish: false
    },
    {
        allo: [3, 0, 2],
        request: [0, 0, 0],
        isFinish: false
    },
    {
        allo: [2, 1, 1],
        request: [1, 0, 0],
        isFinish: false
    },
    {
        allo: [0, 0, 2],
        request: [0, 0, 2],
        isFinish: false
    }
];


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

// Return true if arr = 0 (index by index)
function isEqualZero(arr){
    for(var data of arr){
        if(data !== 0){
            return false;
        }
    }
    return true;
}

// Init isFinish 
function initFinish(arr){
    var result = [];
    result = arr.map(function(item){
        if(isEqualZero(item.allo)){
            item.isFinish = true;
        }
        return item;
    })
    return result;
}


function nhanDienBeTac(available, processArray) {
    var initArray = [];
    initArray = initFinish(processArray);
    //console.log(initArray);
    var letTry = initArray.length;
    var count = 0;
    while (true) {
        for (var i = 0; i < initArray.length; i++) {
            if (initArray[i].isFinish === false) {
                if (compareTwoArray(initArray[i].request, available)) {
                    available = sumTwoArray(available, initArray[i].allo);
                    initArray[i].isFinish = true;
                    console.log("P" + i);
                }
            }
        }
        letTry--;
        for(var data of initArray){
            if(data.isFinish === true){
                count++;
            }
        }
        if(count === initArray.length){
            console.log("Không có tắc nghẽn");
            break;
        }else if(letTry < 0){
            console.log("Đã xuất hiện tắc nghẽn tại: ");
            for(var i = 0; i < initArray.length; i++){
                if(initArray[i].isFinish === false){
                    console.log("P" + i);
                }
            }
            break;
        }
        count = 0;
    }
}

nhanDienBeTac(available, processArray);



