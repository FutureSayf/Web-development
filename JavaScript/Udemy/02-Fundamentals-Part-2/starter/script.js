

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


// const voortgangCursus = (module) => Math.round((module / 21) * 100);


// const checkStatus = (cijfer) => {
//     const avgStudent = voortgangCursus(cijfer);

//     if (avgStudent > 0 && avgStudent < 15) {
//         console.log(`Student heeft ${avgStudent} % af, ga door naar de module Functions`);
//     }
//     else if (avgStudent >= 15 && avgStudent < 40) {
//         console.log(`Student heeft ${avgStudent} % af ga door naar de module Arrays`);
//     }
//     else if (avgStudent >= 40 && avgStudent < 70) {
//         console.log(`Student heeft ${avgStudent} % af ga door naar de module Objects`);
//     }
//     else if (avgStudent >= 70 && avgStudent < 99) {
//         console.log(`Student heeft ${avgStudent}% af ga door naar de coding Challange`);
//     }
//     else if (avgStudent == 100) {
//         console.log(`Gefelicteerd! Student heeft ${avgStudent} % de module is succesvol afgerond`);
//     }
//     else {
//         console.log("Start de module");
//     }

// }
// const student1 = checkStatus(10);
// const student2 = checkStatus(15);
// const student3 = checkStatus(21);
// const student4 = checkStatus(0);

// function calcAge(bY, fN) {
//     const age = 2037 - bY;
//     console.log(`${fN} is ${age}`);
//     return age;
// }
// const age = calcAge(1991, `Jonas`)
// console.log(age);



// IAM_Sayf. & Abdusselam
// const percentageOfWorld = population => Math.round(population / 7900 * 100);

// const population = [10, 1441, 332, 83];
// console.log(population.length);
// const percentage = [
//     percentageOfWorld(population[0]),
//     percentageOfWorld(population[1]),
//     percentageOfWorld(population[2]),
//     percentageOfWorld(population[3])
// ]

// console.log(percentage);
// const bills = [125, 555, 44];

// const calcTip = (bills) => {
//     if (bills >= 50 && bills <= 300) {
//         const bill = bills * 0.15;
//         return bill;
//     } else {
//         const bill = bills * 0.20;
//         return bill;
//     }

// }
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);


// console.log(calcTip(...bills));

// const jonas = {
//     firstName: 'Sayf',
//     LastName: 'Amian',
//     age: 2037 - 1982,
//     job: 'developer',
//     friends: ['ab', 'yas',],
// };

// const interestedIn = prompt(`waar ben je geintereseerd in?`)
// console.log(jonas[interestedIn]);

// jonas.location = 'portugal';
// jonas['twitter'] = '@jonaschemdtmann';

// console.log(`${jonas.firstName} has ${jonas.friends.length} and his best friend is ${jonas.friends[0]}`);


// const jonas = {
//     firstName: 'Sayf',
//     LastName: 'Amian',
//     birthYeah: 1991,
//     job: 'developer',
//     friends: ['ab', 'yas',],
//     hasDriversLicense: true



//     ,

// calcAge: function (birthY) {
//     return 2037 - birthY;
// }
// calcAge: function () {
//     return 2037 - this.birthYeah;
// }
//     calcAge: function () {
//         this.age = 2037 - this.birthYeah;
//         return this.age;
//     },
//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()} year old ${this.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers Lincense`
//     }
// };

// console.log(jonas.calcAge());
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// console.log(jonas.getSummary());

// coding challenge #3 Objects

// const MarkMiller = {
//     fullName: 'Mark Miller',
//     mass: 82,
//     height: 1.65,

//     calcBMI: function () {
//         this.BMI = Math.round(this.mass / (this.height * this.height));
//         return this.BMI;
//     },
// }

// const JohnSmith = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,

//     calcBMI: function () {
//         this.BMI = Math.round(this.mass / (this.height * this.height));
//         return this.BMI;
//     }
// }
// const BMIMark = MarkMiller.calcBMI();
// MarkMiller.calcBMI();
// JohnSmith.calcBMI();

// console.log(MarkMiller.BMI);
// if (MarkMiller.BMI > JohnSmith.BMI) {
//     console.log(`${MarkMiller.fullName} BMI ${MarkMiller.BMI}% is higher than ${JohnSmith.fullName} ${JohnSmith.BMI}%!`);
// } else if (MarkMiller.BMI < JohnSmith.BMI) {
//     console.log(`${JohnSmith.fullName} BMI ${JohnSmith.BMI} is higher than ${MarkMiller.fullName} ${MarkMiller.BMI}!`);
// } else {
//     console.log(`their even!`);
// }


const Ferrari = {
    model: 'Testarossa',
    topSpeed: 322,
    weight: 2000,
    distance: 100,
    color: ['Enzo red', 'Speed Yellow'],

    meterSecond: function () {
        this.Sec = (this.topSpeed * 1000) / 3600;
        return this.Sec;
    },

    calcSpeed: function () {
        this.time = this.distance / this.Sec;
        // return this.time
        this.roundTime = Math.round(this.time * 100) / 100;
        return this.roundTime;
    }
}

Ferrari.meterSecond();
Ferrari.calcSpeed();

// Ferrari.calcSpeed();

console.log(`The Ferrari ${Ferrari.model} has a Topspeed of ${Ferrari.topSpeed} km/h  this means in Max speed it does 100 meters in ${Ferrari.roundTime} seconds.`);