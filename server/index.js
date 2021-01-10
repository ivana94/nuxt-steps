const express = require("express");
const app = express();

app.use(express.static(__dirname + "/../client"));

const data = require("./utils/csv-to-js");
const {
    calculateYearlyActivityTotal,
    calculateWeeklyActivityTotal,
} = require("./utils/calculations");

app.get("/yearly-step-data", (req, res) => {
    res.json({
        stepData: calculateYearlyActivityTotal(data, "steps", 2020),
        distanceData: calculateYearlyActivityTotal(data, "distance", 2020),
    });
});

app.get("/test-week", (req, res) => {
    const weeklyStepTotals = calculateWeeklyActivityTotal(data, "steps");
    const weeklyDistanceTotals = calculateWeeklyActivityTotal(data, "distance");
});

app.listen(8080, () => console.log("listening!"));
