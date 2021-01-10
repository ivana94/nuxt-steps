const filterByYear = (arr, prop, year) =>
    arr.filter((elem) => new Date(elem[prop]).getFullYear() === year);

// const filterByWeek = (arr, prop, year) =>
//     arr.filter((elem) => new Date(elem[prop]).getFullYear() === year);

module.exports = {
    filterByYear,
    // filterByWeek,
};
