const path = require('path');
const morgan = require('morgan');
const cors = require('cors'); 
const express = require('express'); 
const planetsRouter = require('./routes/planets/planets.router');
const launchesRouter = require('./routes/launches/launches.router');
const app = express(); 

const api = require('./routes/api');

// app.use((req,res, next) => {
//     res.setHeader('Access-Control-Allow-Origin')
// })


app.use(cors({
    origin: 'http://localhost:3000',
}));

app.use(morgan('combined'));

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/v1', api);


app.get('/*', (req,res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});




module.exports = app;