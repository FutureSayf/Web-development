

function logger() {
    console.log('my name is s');
}

// calling, invoking, runnig a function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(fruitProcessor(5, 0));

// function describeCountry(country, population, capitalCity) {
//     const info = `${country} has ${population}M. people and its capital city is ${capitalCity}.`;
//     return info;
// }

// const turkije = describeCountry('Turkey', 18, 'Istanbul');
// console.log(turkije);


// function declaration
// function calAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calAge1(1982);
// console.log(age1);

// // function expression
// const calAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calAge2(1996)
// console.log(age1, age2);
// // lecture Function Decl vs. Expressions

// function percentageOfWorld1(country, population) {
//     const perc = Math.round((population / 7900) * 100);
//     return `${country} has ${population} Million people, its about ${perc}percent of the world`;
// }

// const turkey = percentageOfWorld1("Turkey", 1441);
// const china = percentageOfWorld1("China", 3441);
// const iraq = percentageOfWorld1("Iraq", 2441);
// console.log(turkey);
// console.log(china);
// console.log(iraq);

// const percentageOfWorld2 = function (country, population) {
//     const perc = Math.round((population / 7900) * 100);
//     return `${country} has ${population} Million people, its about ${perc}percent of the world`;
// }

// const country2 = percentageOfWorld2("Turkey", 2556);
// console.log(country2);


// function kledingDetail(naam, schoenmaat) {
//     return `${naam} heeft een schoenmaat van:${schoenmaat}.`
// }
// const man = kledingDetail("Abduss", 45);
// console.log(man);
// // expression
// const kledingDetails = function (naam, schoenmaat) {
//     return `${naam} heeft een schoenmaat van: ${schoenmaat}.`
// }
// const man1 = kledingDetails("Sayf", 41);

// // Arrow function
// const calAge3 = birthYear => 2037 - birthYear;
// const age3 = calAge3(1991);
// console.log(age3);


// const yearsRetirment = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// const percentageOfWorld3 = (country, population) => {
//     const perc = Math.round((population / 7900) * 100);
//     return `${country} has ${population} Million people, its about ${perc}percent of the world`;
// }

// const nation = percentageOfWorld3("Colombia", 50);
// console.log(nation);

// // Function calling other Functions
// function cutFruit(fruit) {
//     return fruit * 4;
// }
// function fruitProcessor(apples, oranges) {

//     const applePieces = cutFruit(apples);
//     const orangePieces = cutFruit(oranges);

//     const juice = `juice with ${applePieces} Pc.apples and ${orangePieces} Pc.oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// const percent1 = (population) => {
//     const output = (population / 7900) * 100;
//     return output;
// }

// const describePopulation = (country, population) => {
//     const percentage = percent1(population);
//     return `${country} has ${population} million people,
//     which is about ${percentage} % of the world. `;
// }
// const nation5 = describePopulation("Holland", 18);
// console.log(nation5);

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }
// const yearsRetirment1 = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has retired
//         `);
//         return -1;
//     }
// }

// console.log(yearsRetirment1(1991, "abduss"));
// console.log(yearsRetirment1(1950, "ab"));

// // ------------------------COding Challenge #1


// const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3;
// const avgDolhpins = calcAverage(10, 20, 40);
// const avgKoalas = calcAverage(100, 50, 560);

// const checkWinner = (avgDolhpins, avgKoalas) => {
//     if (avgDolhpins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolhpins} vs. ${avgKoalas})`);
//     }
//     else if (avgKoalas >= 2 * avgDolhpins) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolhpins})`);
//     }
//     else {
//         console.log("niemand");
//     }
// }
// checkWinner(avgDolhpins, avgKoalas);
// // LinkedIN snipper


const voortgangCursus = (module) => Math.round((module / 21) * 100);


const checkStatus = (avgStudent) => {
    const avgStudent = voortgangCursus(5);

    if (avgStudent > 0 && avgStudent < 15) {
        console.log(`Student heeft ${avgStudent} % af, ga door naar de module Functions`);
    }
    else if (avgStudent >= 15 && avgStudent < 40) {
        console.log(`Student heeft ${avgStudent} % af ga door naar de module Arrays`);
    }
    else if (avgStudent >= 40 && avgStudent < 70) {
        console.log(`Student heeft ${avgStudent} % af ga door naar de module Objects`);
    }
    else if (avgStudent >= 70 && avgStudent < 99) {
        console.log(`Student heeft ${avgStudent}% af ga door naar de coding Challange`);
    }
    else if (avgStudent == 100) {
        console.log(`Gefelicteerd! Student heeft ${avgStudent} % de module is succesvol afgerond`);
    }
    else {
        console.log("Start de module");
    }

}
checkStatus();


// IAM_Sayf. & Abdusselam