const { filterByYear } = require("./filter");

const convertMiToKm = (miles) => Math.floor(miles * 1.60934);

const total = (arr, prop) =>
    arr.reduce((num, obj) =>
        typeof num === "number" ? num + parseInt(obj[prop]) : 0
    );

let dataSortedByWeek = [];
const splitDataIntoWeeks = (arr, idx = 0) => {
    let singleWeek = [];
    for (var i = 0; i !== 7; i++) {
        singleWeek.push(arr[idx + i]);
    }
    dataSortedByWeek.push(singleWeek);
    if (dataSortedByWeek.length < 52) {
        splitDataIntoWeeks(arr, idx + 7);
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
