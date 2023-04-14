const express = require('express'); 
const dotenv = require('dotenv'); //for hiding variables
const morgan = require('morgan'); //for making log requests.
const bodyparser = require('body-parser');
const path = require('path'); //in built in node application.

const connectDB = require('./server/database/connection');

const app = express();

dotenv.config({ path: 'config.env' });
const PORT = process.env.PORT || 8080;

//log requests on console via morgan
app.use(morgan('tiny'));

//mongoDB database connection
connectDB();

//parse requests to body-parser
app.use(bodyparser.urlencoded({ extended: true }));

//set view engine
app.set("view engine", "ejs"); //using the ejs template engine (others can be html, pug, ...)

/*
if the ejs file(s) exists not directly in the views folder

app.set("views", path.resolve(__dirname,"views/ejsPath"));
*/

//load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/img', express.static(path.resolve(__dirname, "assets/img")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));

//load routers
app.use('/', require('./server/routes/router'));

app.listen(PORT, () => { console.log(`server is running on http://localhost:${PORT}`) });
