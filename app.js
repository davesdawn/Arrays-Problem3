//Define a function that takes in an array of numbers/integers 
//and returns the sorted version of that array, greatest to least. 
//(Note: do NOT use the "reverse" method.)


const array1 = [-1, 1, 30, 4, 21, 100000, -5];

//Write a function that accepts an array as a parameter
function sortedArray(num){

//Write a function that with 2 elements of comparison (a, b)    
    return num.sort(function(a, b){
//sort the array in descending order        
        return b - a;
      });
      
}

console.log(sortedArray(array1));
