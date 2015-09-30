// Demo: http://codepen.io/dmitrirakhuba/collab/3dbff4d82a54ca55eedceae9518f56f1/

var triangle_1 = triangleData(10, 6, 2);
var triangle_2 = triangleData(5, 90, 4);

output("Triangle 1", triangle_1);
output("Triangle 2", triangle_2);


// named functions

function triangleData(side_a, side_b, decimals_for_c) {
  var hyp = calculateHypotenuse(side_a, side_b),
      side_c = roundNumber(hyp, decimals_for_c),
      triangle = {
        a: side_a,
        b: side_b,
        c: side_c
      };
  return triangle;
}

function calculateHypotenuse(a, b) {
  var c_squared = (a * a) + (b * b),
      c = Math.sqrt(c_squared);
  return c;
}

function roundNumber(number, decimals) {
  var factor = Math.pow(10, decimals);
  return Math.round(number * factor) / factor;
}

function output(title, data){
  console.log("=================");
  console.log(title);
  console.log(data);
  console.log("=================");
}



/*
var d = {
  first_name: 'Dima',
  last_name: 'Rakhuba',
  city: 'Nashville',
  greeting: function() {
    console.log('Hello. My Name is ' + this.first_name);
  }
};

d.greeting();
*/