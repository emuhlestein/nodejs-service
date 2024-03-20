const express = require('express');
// const cors = require("cors");
const app = express();

// app.use(express.json());

const bodyParser = require("body-parser");
app.use(bodyParser.json())

const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 204,
    methods: 'GET, POST'
};

  
// Sample JSON data 
const data = [{ 
    portal : "GeeksforGeeks", 
    knowledge : "unlimited", 
    location : "Noida"  
}];


// app.use((req,res,next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     // res.setHeader('Strict-Access-Control-Allow-Origin', '*');
//     // res.setHeader('Strict-Access-Allow-Credentials', true);
//     // res.set
//     res.setHeader('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
//     if(req.method === 'OPTIONS') {
//         // not looking for data here, just what options are available. So no need to return any data from a route
//         res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
//         return res.status(200).json({});
//     }
//     next();
// });

// CORS is enabled for the selected origins 
// let corsOptions = { 
//     origin: [ 'http://localhost:4200' ] 
// };

app.use(cors(corsOptions));

// app.use(bodyParser.json());
// app.use(function(req, res, next) {
//     res.setHeader("Content-Type", "application/json");
//     next();
// });

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// app.use(cors());

// app.use(cors({
//     origin: '*',
//     methods: ['GET','PUT','UPDATE','DELETE']
// }));

// app.use(cors({
//     origin: 'http://localhost',
//     methods: ['GET', 'PUT', 'POST'], 
//     allowedHeaders: ['Content-Type', 'Authorization'],
//     credentials: true 
// }));
app.get('/', (req, res) => {
    console.log('Node.js got request');
    console.log(req.body);
    console.log(req.data);
    console.log(req.params);
    // res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader("Content-Type", "application/json");
    // res.send("Getting data from Node.js server");
    res.status(200).json(data);
    // res.send(data);
});

app.get('/test', (req, res) => {
    console.log('Node.js got post request');
    console.log(req.query);
    // console.log(req.body);
    // console.log(req.data);
    // console.log(req.params);
    // res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader("Content-Type", "application/json");
    // res.send("Getting data from Node.js server");
    res.status(200).json({
        items: data,
        param1: req.query.param1,
        param2: req.query.param2
    });
    // res.send(data);
});

app.listen(3000, (req, res) => {
    console.log('Express API is running on port 3000')
});