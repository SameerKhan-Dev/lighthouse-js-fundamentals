
// this loop goes from 100 to 200 (both inclusive)
for (var x = 100; x <= 200; x++){

    // check if number is a multiple of both 3 and 4
  if (x % 3 === 0 && x % 4 === 0){
    console.log("LoopyLighthouse");
  }
    // check if number is a multiple of 3
  else if (x % 3 === 0){
    console.log("Loopy");

  }
    // check if number is a multiple 4
  else if (x % 4 === 0){
    console.log("Lighthouse");
  }
    // default- print number
  else {
    console.log(x); 
  }
}