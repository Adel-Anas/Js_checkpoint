 function WordCount(str) { 
    return str.split(" ").length;
  }


function countVowels(str) {
  str = str.toLowerCase();
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    
    if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
     
      count++;
    }
  }
  return count;
}

function letters_count(str) {
    str = str.toLowerCase();
    const letters = str.split('').filter(char => char.match(/[a-z]/));
    return letters.length;
}
var str = "Testing if the sentence analyzer function is working properly and functionnal";

const characters = letters_count(str);

const result = countVowels(str);

  
console.log('The number of words in this sentence is:');

console.log(WordCount(str));
    
console.log('The number of letters in this sentence is :');
  
console.log(characters);
  
console.log("The number of vowels:");
  
console.log(result);

  
 