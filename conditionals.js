
// first exercise with cold and raining variables- if statements in a row
const raining = true;
const cold = false;

if (raining){

	console.log("Don't forget your umbrella!");
}
if (cold){

	console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!"); 


// second exercise with temperature variable - using if-else if statements

const temperature = 12;

if (temperature < 0) {

	console.log("Make sure you pick out a scarf!");

}
else if (temperature < 15){
	
	console.log("Short sleeves won't cut it!");
}
else{
	console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!"); 
