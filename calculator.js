
const express = require('express');
const app = express();
const port = 3001;
const bodyParser = require ("body-parser");

app.use(bodyParser.urlencoded({extended: true}));



app.get('/bmicalculator', function(req, res){
res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req,res){

    let num1 = Number(req.body.n1);
    let num2 = Number(req.body.n2);

    let result = num1 + num2;

    res.send(`The result is ${result}`)


});

app.get("/bmicalculator", function(req,res){

    res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmiCalculator", function(req,res) {

    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);

    let bmi = weight / (height * height);

    res.send("Your BMI is " + bmi)
})






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})