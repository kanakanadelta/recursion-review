// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  
if(typeof obj === 'number' || obj === null){
    return ''+obj;
  }

  if(typeof obj === 'boolean'){
    if(obj === true){
      return 'true';  
    }
    else {
      return 'false';
    }
  }

  if(typeof obj === 'string'){
    return '\"' + obj + '\"';
  }

  //Arrays and Objects

  if(Array.isArray(obj)){

    var arr = []; //stringified values go in this array

    if(obj.length>0){
      for(var i = 0; i<obj.length; i++){
        arr.push(stringifyJSON(obj[i])) //use recursion on array value and push into arr
      }
    }  
    return '[' + arr.join(',') + ']';
    //end of Array_stringify
  }

  
  if(typeof obj === 'object'){
  
    let arrObj = [];

    for(let key in obj) {
      if(typeof obj[key] == 'function' || typeof obj[key] === 'undefined'){
        continue;
      }
      arrObj.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]))
    }
    return '{' + arrObj.join(',') + '}';
  }
  
};











//


