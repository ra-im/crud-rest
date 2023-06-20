const express = require('express'); //to use the exress model.
const dotenv = require('dotenv'); //for hiding variables via the dotenv model.
const morgan = require('morgan'); //for making log requests.
const bodyparser = require('body-parser');
const path = require('path'); //in built in node application, with reference to setting viw engines.
const cors = require('cors');

const connectDB = require('./server/database/connection');

const app = express();

dotenv.config({ path: 'config.env' });
const PORT = process.env.PORT || 8080;

app.use(cors());
//   'origin': '*',
//   'allowedHeaders': ['sessionId', 'Content-Type'],
//   'exposedHeaders': ['sessionId'],
//   'origin': '*',
//   'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   'preflightContinue': false
// }));

//log requests on console via morgan
app.use(morgan('tiny'));

//mongoDB database connection
connectDB();

//parse requests to body-parser
app.use(bodyparser.urlencoded({ extended: true }));

//set view engine
app.set("view engine", "ejs"); //using the ejs template engine (others can be html, pug, ...)

/*
if the ejs file(s) exists not directly in the views folder.
for instance, if it were in a separate folder within the  views folder.
require the path model, as done on line 5, and then.

app.set("views", path.resolve(__dirname,"views/ejsPath"));
*/

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// load assets
// this makes it easier to reference or navigate paths/files.
// for instance, to reference the style.css file from the controller.js file,
// run /css/style.css, instead of ../../assets/css/style.css.
app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/img', express.static(path.resolve(__dirname, "assets/img")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));

//load routers
app.use('/', require('./server/routes/router'));

app.listen(PORT, () => { console.log(`server is running on http://localhost:${PORT}, or https://3000-raim-devtasks-ous4rqluvau.ws-eu100.gitpod.io`) });
