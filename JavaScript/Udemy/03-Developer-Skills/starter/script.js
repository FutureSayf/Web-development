// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const mk = function () {
    const measure = {
        type: 'temp',
        unit: 'celsius',
        value: Number(prompt('degrees')),
    };
    console.table(measure);
    const kelvin = measure.value + 273;
    return kelvin;
};
console.log(mk());
