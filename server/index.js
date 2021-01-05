const express = require("express");
const app = express();

const data = require("./utils/csv-to-js");
const { calculateYearlyActivityTotal } = require("./utils/calculations");

app.use(express.static(__dirname + "/../client"));

app.get("/yearly-step-data", (req, res) => {
    res.json({
        yearlyStepData: calculateYearlyActivityTotal(data, "steps", 2020),
    });
});

app.listen(8080, () => console.log("listening!"));
