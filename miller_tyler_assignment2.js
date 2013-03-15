//Name: Tyler Miller
//Date: 03/14/13
//Assignment: Project 2
//Description: Arrays, Funchtions, A boy and his dog

//Set Variables
var pets = [   // Array
	"Lizard", 
	"Bird", 
	"Spider", 
	"Mouse", 
	"Dog"   //Final Choice
];

var boysName = "Tyler",
	choices = 5,
	decision = "dog",
	one = true,
	newFreind = true
;

//Output
console.log ("A young boy named " + boysName + " wnats a pet.")
console.log ("He has " + choices + " options, which he could choose from.")

//Procedure
console.log(boysName + "'s options are " + pets + ".")
//pets.pop();          //Tyring to add or before dog
//console.log( pets ); //Tyring to add or before dog
var whichPet = function (first, second){
	
	var pet = first/second;
	
	return pet;
	
	//console.log("He may only choose " + pet + " animal for his pet." );
	
	
};

console.log(whichPet(5,5));

if (pet = 1) {
	console.log("He has made his mind up, and it seems he picked a " + decision + ".")}
	
	else if (pet > 1) {
	console.log("No new friend.")
}

//Boolean Function 
var joy = function(){
	var yes = "I am very happy! Thank you mom and dad!"
		no = "But why?"
		if (one === true && newFreind === true){
		return(boysName + " is happy that he will be getting a " + decision + ".");
	} else { return("Why?")}
	return(one);		
	
};

//Number Function 
console.log (boysName + " and his new freiend are headed home, the ride takes 30 minutes.");
// While-Loop
var time = 30
while (time > 0) {
	console.log(time + " minutes remain.")
	time--;
	
};

console.log("They have arrived at their home.");

//Original Code 
/*var dog = function (first, second){
	
	var friend = first/second;
	
	return friend;
	
};	

console.log(dog(1,1));
console.log( "will be going home today with " + boysName + " to live with him.");*/

//String Function
 var home = "Now that they were home",
 	 petStore = boysName + " had realized that he forgeot to buy dog toys and food."
;

console.log(home + " and settled in " + petStore);


//Array Function
console.log("Sometime later it was time to pick a name, " + boysName+ " has a few ideas.")
var names = [   // Array
	"Tiki", 
	"Buddy", 
	"Andy", 
	"Lucky", 
	"Spike"   // Final choice
];

for (name = 5; name > 0; name--){  //not sure how to use arrays with for loop
console.log(name + " names left.")
};
console.log(names[4] + " Is the name that " + boysName + " choose.")



		

	
	



