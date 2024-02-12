const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var dataList =[];
app.get('/showForm', function(req, res) {
    res.sendFile(__dirname + "/showForm.html");
});

app.post('/showData', function(req, res) {
    const data = {
        fname: req.body.fname,
        lname: req.body.lname,
        input1: req.body.input1,
        input2: req.body.input2
    };

    dataList.push(data);
    console.log(dataList);
    
    res.end(JSON.stringify(dataList))
    fs.writeFileSync('./output.json', JSON.stringify(dataList),'utf-8') 
    
    //res.end(JSON.stringify(data));
});

app.listen(8080);

