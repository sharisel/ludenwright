class Cat{
    constructor(catName, weight, colour, breed, isFluffy, likesPats){
        this.catName = catName;
        this.weight = weight;
        this.colour = colour;
        this.breed = breed;
        this.isFluffy = isFluffy;
        this.likesPats = likesPats;
    }

// Definesd a method called pet. Accepts this.likesPat array of areas the cat likes to be pet. 
    pet(catPart) {
        if(this.likesPats.includes(catPart))
        {
// If the given catPart is in the list, then the cat likes it!
            return "You just pet " + this.catName + " on the " + catPart + "! They like it very much!";
        }
        else
// If the given catPart is NOT in the list, then the cat doesn't like it...
        {
            return "You just pet " +this.catName + " on the " + catPart + "! They don't like it very much..."
        }
    }
}

// Creates an object of class Cat and calls it cat. Defines it with the parameters

let cat = new Cat("Stormwald", 17, "white and orange", "ragamese", true, "head");

// Outputs a simple sentence with some information about the object (cat instance)
console.log(cat.catName, "is a", cat.breed, "and weighs", cat.weight, "pounds!");
console.log(cat.pet("head"));
console.log(cat.pet("tummy"));

