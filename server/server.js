const http = require('http');
const app = require('./app');
const server = http.createServer(app);
const dotenv = require("dotenv");


dotenv.config({path: './config.env'});

// ! Import PORT From ENV File //
const PORT = process.env.PORT;

// ! Import DataBase Connection From db //
require('./db/conn');

server.listen(PORT, () => {
    console.log(`Backend Server Is Running At Port No ${PORT}`)
})