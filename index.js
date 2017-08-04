var express = require('express');
var app = express();

app.listen(3005);

app.get('/manny', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.status(301).send(JSON.stringify(chao()));
})

function chao(){
    return {
        name: 'Manuel Correa',
        alias: 'Manny',
        linkedin: "https://www.linkedin.com/in/correamanuel",
        phone: "706-247.1302",
        email: "mcorrea.web@gmail.com",
        last_day: new Date("2017-08-04"),
        next: "West Coast!",
        great_experience_cb: true,
        msg: "I wanted to thank everyone in CB for this amazing journey in this last 4 years. I feel like I'm leaving my home and that one day I hope to come back as better engineer. Keep up the great work!"
    }; 
}