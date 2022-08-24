//function which takes a  single word and determines if it is an isogram (no letter repeats, consecutive or not. )
//isogram examples: mighty, incredulous, certain

function isIsogram(str){
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j < str.length; j++) {
        if (str[i].toLowerCase() === str[j].toLowerCase()) {
          return false
        }
      }
    }
    return true
  }

console.log(isIsogram('hello')) // returns false
console.log(isIsogram('alphabet')) // returns true
console.log(isIsogram('awful')) // returns true
console.log(isIsogram('qwertyuiopasdfghjklzxcvbnm')) // returns true