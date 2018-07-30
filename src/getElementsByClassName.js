// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var nodeList = [];

  const searchNodes = function(element) {
    //check if node's class as className
    if(element.classList.contains(className)) {
      //push to nodeList
      nodeList.push(element);
    }
    
    console.log(element)
    // iterate within each childnode, 
    if(element.children){
      for(var i = 0; i<element.children.length; i++){
      //check for same className and push into nodeList
        // if(element.childNodes[i].classList.contains(className)) {
        //   nodeList.push(element.childNodes[i]);
        // } //used recursion below instead
        searchNodes(element.children[i])
      }
    }
  }
  //
  
  searchNodes(document.body);   
  
  console.log(nodeList)
  return nodeList;
};
