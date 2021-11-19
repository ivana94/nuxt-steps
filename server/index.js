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
        yearlyStepData: calculateYearlyActivityTotal(data, "steps", 2020),
        yearlyDistanceData: calculateYearlyActivityTotal(
            data,
            "distance",
            2020
        ),
    });
});

app.get("/weekly-step-data", (req, res) => {
    res.json({
        weeklyStepData: calculateWeeklyActivityTotal(data, "steps", 2020),
        weeklyDistanceData: calculateWeeklyActivityTotal(
            data,
            "distance",
            2020
        ),
    });
});

app.listen(process.env.DATABASE_URL || 8080, () => console.log("listening!"));
