const app = require('./app.js');

require('dotenv').config();

 const {loadPlanetsData} = require('./models/planets.model');
 const {loadLaunchData} = require('./models/launches.model');
const http = require('http'); 

const {mongoConnect} = require('./services/mongo');

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 8000; 



const server = http.createServer(app); 


async function startServer() {
    await mongoConnect();
    await loadPlanetsData();
    await loadLaunchData(); 

    server.listen(PORT, () => {
        console.log('Listening on port 8000');
    });
}

startServer();