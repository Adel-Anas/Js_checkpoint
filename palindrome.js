function checkpalindrome(word){
    if (word.length <= 1){
        return "This word is a palindrome";
    }
    
    else if (word[0] !== word[word.length -1]){
        return "This word is not a palindrome";
    } 
    return checkpalindrome (word.slice(1, -1));

}

const word_1= "label";
const word_2 = "rotor";

console.log(checkpalindrome(word_1));

console.log(checkpalindrome(word_2));