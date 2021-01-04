const express = require("express");
const app = express();

const data = require("./utils/csv-to-js");
const { calculateYearlyActivityTotal } = require("./utils/calculations");

app.use(express.static(__dirname + "/../client"));

app.get("/test", (req, res) => {
    res.json({ yearlyData: calculateYearlyActivityTotal(data, "steps", 2020) });
});

app.listen(8080, () => console.log("listening!"));