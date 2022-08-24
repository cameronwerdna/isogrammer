//function which takes a string and determines if it is an isogram (word without letter repeats, consecutive or not. )
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


// isIsogram('string') => true
// isIsogram('alphabet') => false