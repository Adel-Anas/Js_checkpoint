function Cardsorting(arr) {
    const n = arr.length;
        for (let i = 1; i < n; i++) {
            let currentElement = arr[i];
            let j = i - 1;
            
            while (j >= 0 && arr[j] > currentElement) {
            arr[j + 1] = arr[j];
            j--;
            }
            
            arr[j + 1] = currentElement;
        }
    }

const arr = [9, 11, 7, 2, 6, 4];

Cardsorting(arr);

console.log(arr);

const newCard = 3;

arr.push(newCard);

Cardsorting(arr);

console.log(arr);