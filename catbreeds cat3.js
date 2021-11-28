const catBreeds3 = [{
    name: "American Bobtail",
    description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: ["Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {
        favourite_food: "meaty things",
        medium_liked_food: "tuna",
        disliked_food: "canned food"
    }
}
]

//log catBreed3 american bobtail
catBreeds3.push("Name cat breed 3: American Bobtail");
console.log(catBreeds3[1]);

//log catBreed3 sensitive
catBreeds3.push("Last temperament cat breed 3: Sensitive");
console.log(catBreeds3[2]);