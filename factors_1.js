function pruneDupes(array){
  cache = {};
  output = []

  for(var i = 0; i < array.length; i++){
    var store = array[i]
    cache[store] = store;
  }

  for (element in cache){
  output.push(Number(element));
  }

  return output;
}

// caching function is above. It converts an array to a smaller array if duplicates are found by
// looping over the input, converting to an object, then looping over the created object to convert into an array of unique integer values.
// Worst case time complexity: O(n), space complexity: O(n);


function factorsPt1(input){
  result = {};
  var array = pruneDupes(input);

  for (var i = 0; i < array.length; i++){
   
    console.log(array[i]);
    
    (function(){
      var values = [];
      var j = 0;
      while(j < array.length){
        if (array[i] % array[j] === 0 && array[i] != array[j]){
          values.push(array[j]);
        }
      j++;
      }
      result[array[i]] = values;
    })();

  }
  return result;
}

// Given an array of [10, 5, 2, 20], the output would be:
// {10: [5, 2], 5: [], 2: [], 20: [10,5,2]}


console.log(factorsPt1([10, 5, 2, 20, 10]))


function factorsPt2(input){
  result = {};
  var array = pruneDupes(input);

  for (var i = 0; i < array.length; i++){
   
    console.log(array[i]);
    
    (function(){
      var values = [];
      var j = 0;
      while(j < array.length){
        if (array[j] % array[i] === 0 && array[i] != array[j]){
          values.push(array[j]);
        }
      j++;
      }
      result[array[i]] = values;
    })();

  }
  return result;
}

// Given an array of [10, 5, 2, 20], the output would be:
// {10: [20], 5: [10,20], 2: [10, 20], 20: []}


console.log(factorsPt2([10, 5, 2, 20, 10]))


