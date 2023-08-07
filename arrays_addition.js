function distinctElementsSum(set1, set2) {
            
    let sum = 0;

    const combinedArr = set1.concat(set2);

    console.log(combinedArr);

    
    const differentElements = [];


    for (let i = 0; i < combinedArr.length; i++) {

        if (!differentElements.includes(combinedArr[i])) {
        
        differentElements.push(combinedArr[i]);
        sum += combinedArr[i];
        }
        else{
            sum -= combinedArr[i];
        }
    }      

    return sum;
}


const set1 = [1, 5, 14, 7];
const set2 = [9, 5, 1, 9, 3];

const result = distinctElementsSum(set1, set2);
console.log("Sum of distinct elements:", result);
