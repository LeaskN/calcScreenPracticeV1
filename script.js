// let screen = document.querySelector('.screen');
// let allButtonArray = document.querySelectorAll('li');
// let currentText = '';

// function addAllListeners(param){
//     for(let i = 0; i < param.length; i++){
//         param[i].addEventListener('click', change);
//     }
// }

// addAllListeners(allButtonArray);

// function change(param){
//     if( param === undefined ){
//         screen.innerHTML = 'Do Math';
//     } else {
//         currentText = currentText + param.target.innerHTML;
//         screen.innerHTML = currentText;
//     }
// }

// function handleString(strParam){
//     let finalArray = [];
//     let newNumsArr = [];
//     arrOfNums = strParam.split('+').join(',').split('/').join(',').split('*').join(',').split('-').join(',').split(',');
//     arrOfOps = strParam.split('0').join(',').split('1').join(',').split('2').join(',').split('3').join(',').split('4').join(',').split('5').join(',').split('6').join(',').split('7').join(',').split('8').join(',').split('9').join(',').split(',');
//     if(arrOfOps === ''){
//         strParam.shift();
//     }
//     arrOfOps.pop()
//     arrOfOps.shift();

//     console.log(arrOfOps)
//     console.log(arrOfNums)
    
//     for (let i = 0; i < arrOfNums.length; i++) {
//         let element = arrOfNums[i];

       
//         newNumsArr.push(parseInt(element))
//     }

//     arrOfNums = newNumsArr;

//     finalArray.push(arrOfNums);
//     finalArray.push(arrOfOps);

//     return finalArray;
// }

// function doMath(strParam){
//     let bothArrs = handleString(strParam);

//     let arrOfNums = bothArrs[0];
//     let arrOfOps = bothArrs[1];

//     //M
//     if(arrOfOps.indexOf('*') > -1){
//         let multIndex = arrOfOps.indexOf('*');
//         let num1 = parseInt(arrOfNums[multIndex]);
//         let num2 = parseInt(arrOfNums[multIndex + 1]);
//         let newN = num1 * num2;
        
//         arrOfOps.splice(multIndex, 1);
//         arrOfNums.splice(multIndex, 2, newN);
//     }
//     //D
//     if(arrOfOps.indexOf('/') > -1){
//         let multIndex = arrOfOps.indexOf('/')
//         let num1 = parseInt(arrOfNums[multIndex]);
//         let num2 = parseInt(arrOfNums[multIndex + 1]);
//         let newN = num1 / num2;
        
//         arrOfOps.splice(multIndex, 1)
//         arrOfNums.splice(multIndex, 2, newN)
//     }
//     //A
    // if(arrOfOps.indexOf('+') > -1){
    //     let multIndex = arrOfOps.indexOf('+')
    //     let num1 = parseInt(arrOfNums[multIndex]); 
    //     let num2 = parseInt(arrOfNums[multIndex + 1]);
    //     let newN = num1 + num2;
        
    //     arrOfOps.splice(multIndex, 1)
    //     arrOfNums.splice(multIndex, 2, newN)
    // }
//     //S
//     if(arrOfOps.indexOf('-') > -1){
//         let multIndex = arrOfOps.indexOf('-')
//         let num1 = parseInt(arrOfNums[multIndex]);
//         let num2 = parseInt(arrOfNums[multIndex + 1]);
//         let newN = num1 - num2;
        
//         arrOfOps.splice(multIndex, 1)
//         arrOfNums.splice(multIndex, 2, newN)
//     }
//     if(arrOfNums.length > 1){
//         let newParam = [];

//         for (let i = 0; i < arrOfNums.length - 1; i++) {
//             newParam.push(arrOfNums[i]);
//             newParam.push(arrOfOps[i]);
//         } 
//         newParam.push(parseInt(arrOfNums[arrOfNums.length - 1]));
//         return doMath(newParam.join(''));
//     } 
//     return arrOfNums;
// }

// // // test cases
// // // duplicate signs    
//     console.log(doMath('5*5*5'));
//     // console.log(doMath('5+5+5'));
//     // console.log(doMath('5-5-5'));
//     // console.log(doMath('5/5/5'));
let array = [2, '']
let newarr = [];
for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (element !== ''){
        newarr.push(element)
    }   
}
console.log(array)
console.log(newarr)