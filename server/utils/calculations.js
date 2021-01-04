const { filterByYear } = require("./filter");

const convertMiToKm = (miles) => Math.floor(miles * 1.60934);

const total = (arr, prop) =>
    arr.reduce((num, obj) =>
        typeof num === "number" ? num + parseInt(obj[prop]) : 0
    );

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
