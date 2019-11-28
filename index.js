var express = require('express');
var bodyParser = require('body-parser');


var port= 3002;
var BASE = "/api/v1";

var contacts = [ {"name" : "peter", "phone": 12345 }, 

{"name" : "john", "phone": 6789} 
]

console.log("Starting API-sevre..");

var app=express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("<html><body><h1>My server</h1></body></html>");
});

app.get(BASE + "/contacts", (req, res) => {
    console.log(Date() + " - GET /contacts"); 
    res.send(contacts)
})

app.post(BASE + "/contacts", (req, res) => {
    console.log(Date() + " - POST /contacts");
    var contact = req.body;
    contacts.push(contact); 
    res.sendStatus(201);
});

app.listen(port);

console.log("server ready");
