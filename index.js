const arrOfStrToArrOfObj = require("./csv-to-js");

const filterByYear = (arr, prop, year) =>
    arr.filter((elem) => new Date(elem[prop]).getFullYear() === year);

const total = (arr, prop) =>
    arr.reduce((num, obj) =>
        typeof num === "number" ? num + parseInt(obj[prop]) : 0
    );

const convertMiToKm = (miles) => Math.floor(miles * 1.60934);

const renderOutputPretty = (data, verb, unit, year) =>
    `You ${verb} ${data.toLocaleString("en-US")} ${
        unit ? unit : ""
    } in ${year}.`;

const arr2020 = filterByYear(arrOfStrToArrOfObj, "date", 2020);
const steps2020 = total(arr2020, "steps");
const distance2020Mi = total(arr2020, "distance");
const distance2020Km = convertMiToKm(distance2020Mi);

console.log(renderOutputPretty(steps2020, "walked", "steps", 2020));
console.log(renderOutputPretty(distance2020Mi, "walked", "miles", 2020));
console.log(renderOutputPretty(distance2020Km, "walked", "kilometers", 2020));
