function animalCount (miles){
    const first10MilesDenseAnimals = 10;
    const second10MilesDenseAnimals = 30;
    const third10MilesDenseAnimals = 100;

    if(miles <= 10){
        const count = miles * first10MilesDenseAnimals;
        return count;
    }
    else if (miles <= 20){
        const firstDenseAnimals = 10 * first10MilesDenseAnimals;
        const restAnimals = miles - 10;
        const secondDenseAnimals = restAnimals * second10MilesDenseAnimals;
        const totalAnimals = firstDenseAnimals + secondDenseAnimals;
        return totalAnimals;
    }
    else {
        const firstDenseAnimals = 10 * first10MilesDenseAnimals;
        const secondDenseAnimals = 10 * second10MilesDenseAnimals;
        const restAnimals = miles - 20;
        const restDenseAnimals = restAnimals * third10MilesDenseAnimals;
        const totalAnimals = firstDenseAnimals + secondDenseAnimals + restDenseAnimals;
        return totalAnimals;
    }
}
const animal = animalCount(36);
console.log (animal);