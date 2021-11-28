const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? *All results begin line 65

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

//Question #2: extraLargeArray when passed to doublerAppend: 
// Results for the extraLargeArray
// append 6.72972 ms

//Question #2: extraLargeArray when passed to doublerInsert: 
// Results for the extraLargeArray
// insert 1.996518246 s

//Question #4: How does each function “scale”?  Append in milliseconds,
//compared to Insert w/in seconds.
//Which of the two functions scales better? Append 
//How can you tell? Faster 

//Question #5: Extra credit: Insert is slower because it has an additional step, in its computing.
//.insert allows you to pick where value will be added, .append doesn't give you the choice.

/* Results for the tinyArray
insert 2.006352092 s
append 5.574745 ms */

/* Results for the smallArray
insert 1.795909448 s
append 6.585391 ms */

/*  Results for the mediumArray
insert 1.9871493980000001 s
append 5.744334 ms */

/* Results for the largeArray
insert 1.826116507 s
append 7.187453 ms */

/* Results for the extraLargeArray
insert 1.7172941609999999 s
append 5.135186 ms */
