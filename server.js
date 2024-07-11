import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
// Components
import Connection from './database/db.js';
import Router from './routes/route.js';

dotenv.config();
const __dirname=path.resolve();
const app = express();
const PORT = process.env.PORT || 8000;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

// Middleware
app.use(cors());
app.options('*', cors()); // Preflight all routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Custom CORS headers
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

// Routes
app.use('/', Router);

app.use(express.static(path.join(__dirname,"./client/build")))
app.get('*',function(_,res){
    res.sendFile(path.join(__dirname,"./client/build/index.html"),function(err){
        res.status(500).send(err);
    })
})
// Database connection

Connection();
// Start server
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
