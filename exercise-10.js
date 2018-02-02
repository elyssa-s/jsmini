function calculateDogAge (humanAge){ 
return humanAge * 7;

}

console.log("your dog is " + calculateDogAge(5) + " years old in dog years!")

console.log("your dog is " + calculateDogAge(4) + " years old in dog years!")


function pluralize (noun, number) {
	if (noun === "sheep" || noun === "geese" ||number ===1){
		return number + " " + noun;
	}
	else {
		return number + " " + noun + "s";
	}
}

console.log(pluralize("dog",6));
console.log(pluralize("cat",1));
console.log(pluralize("sheep",10));
console.log(pluralize("geese",15));