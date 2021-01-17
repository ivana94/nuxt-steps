const { filterByYear } = require("./filter");

const convertMiToKm = (miles) => Math.floor(miles * 1.60934);

const total = (arr, prop) =>
    arr.reduce((num, obj) =>
        typeof num === "number" ? num + parseInt(obj[prop]) : 0
    );

const generateArrayOfN = (n) => [...new Array(n)];

let dataSortedByWeek = [];

const splitDataIntoWeeks = (arr, startingIdx = 0) => {
    let singleWeek = generateArrayOfN(7).map((elem, i) => arr[startingIdx + i]);
    dataSortedByWeek.push(singleWeek);
    if (dataSortedByWeek.length < 52) {
        splitDataIntoWeeks(arr, startingIdx + 7);
    }
};

module.exports.calculateWeeklyActivityTotal = (data, activity) => {
    splitDataIntoWeeks(data);
    return dataSortedByWeek.map((week) => total(week, activity));
};

module.exports.calculateYearlyActivityTotal = (data, activity, year) => {
    const dataSortedByYear = filterByYear(data, "date", year);
    const totalPerYearAndActivity = total(dataSortedByYear, activity);
    if (activity === "distance") {
        return [
            totalPerYearAndActivity,
            convertMiToKm(totalPerYearAndActivity),
        ];
    }
    return totalPerYearAndActivity;
};

module.exports.calculateWeeklyTotals = (data, activity, year) => {};
