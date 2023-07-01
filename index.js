function hasTargetSum(array, target) {
  // Write your algorithm here
  let sum = [];
  let hashTable = {};

  for(i = 0; i < array.length; i++) {
    let complement = target - array[i];

    if(hashTable[complement.toString()] != undefined) {
      sum.push([array[i]], complement);
      return true;
    }
    hashTable[array[i].toString()] = array[i];
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  This algorithm has a time complexity of O(n). The loop through the array takes a constant average time
  'n' is the number of elements in the array
*/

/* 
  Add your pseudocode here
  function isSum(array, target):
    # Create an empty hashTable
    hashTable = {}

    # Iterate through the array of numbers
    for i in range(length(array)):
        # Calculate the complement
        complement = target - array[i]

        # Check if the complement exists in the hashTable
        if complement in hashTable:
            # Return the indices of the two numbers
            return [hasTable[complement], i]

        # Add the current number and its index to the hashTable
        hashTable[arrat[i]] = i

    # If no solution is found, return an empty array or throw an exception
    return []
*/

/*
  Add written explanation of your solution here
  
  Initialize an empty hash table.
  Iterate through the array of numbers.
  For each number, calculate the complement by subtracting it from the target sum.
  Check if the complement exists in the dictionary.
  If it does, you have found a pair that adds up to the target sum.
  If it doesn't, add the current number to the dictionary as a key and its index as the value.
  If you reach the end of the array without finding a pair, it means no solution exists.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
