// Demo: http://codepen.io/dmitrirakhuba/collab/8a8f5a7ecc9736365a83c79798d9f95e/

var factor_x = addShit(1, 2);
var factor_y = addShit(3, 4);
var message = addShit(factor_x, factor_y);

output(message);



//
// named functions
//

function addShit(param1, param2) {
  return param1 + param2;
}

function output(what) {
  console.log("====================");
  console.log("We are running shit!");
  console.log(what);
  console.log("====================");
}