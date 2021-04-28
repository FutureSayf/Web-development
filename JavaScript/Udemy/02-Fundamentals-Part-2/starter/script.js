

function logger() {
    console.log('my name is s');
}

// calling, invoking, runnig a function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(fruitProcessor(5, 0));

function describeCountry(country, population, capitalCity) {
    const info = `${country} has ${population}M. people and its capital city is ${capitalCity}.`;
    return info;
}

const turkije = describeCountry('Turkey', 18, 'Istanbul');
console.log(turkije);



