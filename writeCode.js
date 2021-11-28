// 1) Sum Zero

// addToZero([]);
	function addToZero(addToZeroArray , size , x) {
		for (i = 0; i < (size - 1); i++) {
			for (j = (i + 1); j < size; j++) {
				if (addToZeroArray[i] + addToZeroArray[j] == x) {
					console.log("Pair with a given sum " + 0 + " is (" + addToZeroArray[i] + ", " + addToZeroArray[j] + ")");

					return true;
				}
			}
		}

		return false;
	}

		var addToZeroArray = [];
		var x = -2;
		var size = addToZeroArray.length;

		if (addToZero(A, size, 0)) {
			console.log("Valid pair exists");
		} else {
			console.log("No valid pair exists for");
		}

// addToZero([1]);
function addToZero(addToZeroArray , size , x) {
    for (i = 0; i < (size - 1); i++) {
        for (j = (i + 1); j < size; j++) {
            if (addToZeroArray[i] + addToZeroArray[j] == x) {
                console.log("Pair with a given sum " + 0 + " is (" + addToZeroArray[i] + ", " + addToZeroArray[j] + ")");

                return true;
            }
        }
    }

    return false;
}

    var addToZeroArray = [1];
    var x = -2;
    var size = addToZeroArray.length;

    if (addToZero(addToZeroArray, size, 0)) {
        console.log("Valid pair exists");
    } else {
        console.log("No valid pair exists for");
    }

// addToZero([1, 2, 3]);
function addToZero(addToZeroArray , size , x) {
    for (i = 0; i < (size - 1); i++) {
        for (j = (i + 1); j < size; j++) {
            if (addToZeroArray[i] + addToZeroArray[j] == x) {
                console.log("Pair with a given sum " + 0 + " is (" + addToZeroArray[i] + ", " + addToZeroArray[j] + ")");

                return true;
            }
        }
    }

    return false;
}

    var addToZeroArray = [1, 2, 3];
    var x = -2;
    var size = addToZeroArray.length;

    if (addToZero(addToZeroArray, size, 0)) {
        console.log("Valid pair exists");
    } else {
        console.log("No valid pair exists for");
    }

// addToZero([1, 2, 3, -2]);
function addToZero(addToZeroArray , size , x) {
    for (i = 0; i < (size - 1); i++) {
        for (j = (i + 1); j < size; j++) {
            if (addToZeroArray[i] + addToZeroArray[j] == x) {
                console.log("Pair with a given sum " + 0 + " is (" + addToZeroArray[i] + ", " + addToZeroArray[j] + ")");

                return true;
            }
        }
    }

    return false;
}

    var addToZeroArray = [1, 2, 3, -2];
    var x = -2;
    var size = addToZeroArray.length;

    if (addToZero(addToZeroArray, size, 0)) {
        console.log("Valid pair exists");
    } else {
        console.log("No valid pair exists for");
    }

// 2) Unique Characters
//Monday

function uniqueCharacters(str)
{
	for(let i = 0; i < str.length; i++)
		for(let j = i + 1; j < str.length; j++)
			if (str[i] == str[j])
				return false;

	return true;
}

let input = "Monday";

if (uniqueCharacters(input) == true)
	console.log("Monday " + input +
				" has all unique characters" + " ");
else
	console.log("Monday " + input +
				" has duplicate characters");

//Moonday                
function uniqueCharacters(str)
{
	for(let i = 0; i < str.length; i++)
		for(let j = i + 1; j < str.length; j++)
			if (str[i] == str[j])
				return false;

	return true;
}

let input = "Moonday";

if (uniqueCharacters(input) == true)
	console.log("Moonday " + input +
				" has all unique characters" + " ");
else
	console.log("Moonday " + input +
				" has duplicate characters");


// 3) Pangram Sentence

//Detect Pangram

function isPangram(string){

      let regex = /([a-z])(?!.*\1)/gi;
      return (string.match(regex)).length === 26;

    }
    
    console.log(isPangram("The quick brown fox jumps over the lazy dog."));
    console.log(isPangram("I like cats, but not mice"));


// 4) Longest Word

function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
       }
    }
    return longestWord;
  }

  //Extra Credit, Time Space Complexity: Question 1) O(n)  2) O(n)  3) O(n)  4) O(n)