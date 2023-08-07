function multiplyArr(arr1, arr2){
    if (arr1.length !== arr2.length){
        return "Arrays don't have same length"
    };
    const result = [];
    for (let i=0 ; i < arr1.length; i++){
        const multiplyValue = arr1[i] * arr2[i];
        result.push(multiplyValue);
    }
    return result;
}

let arr1 = [7, 5, 9, 10];
let arr2 = [9, 3, 1, 5];

console.log(multiplyArr(arr1, arr2));