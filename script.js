let variableOne = 1;
let variableTwo = 2;
let variableThree = 3; 

	if(variableOne === variableTwo && variableTwo === variableThree && variableOne === variableThree){
	console.log("The three variables are the same");
}
	else if(variableOne === variableTwo || variableOne === variableThree || variableTwo ===variableThree){
	console.log("Two of the variables are the same");
}
	else{
	console.log("all variables are different");
}
