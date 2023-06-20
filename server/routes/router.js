const express = require('express');

// to make use of teh render services
// within the / services / render.js file 
// instead of the regular render functions of the router.js file.
const services = require('../services/render');
const controller = require('../controller/controller');

// to reinstate express application,
// running const app = express(); will create a new application,
// instead, we use the built-in express Router() method.
const route = express.Router();
/*
// before implementing the render.js services,
// handling routes was done using:

route.get('/', (req,res) => {
    res.render('index'); // renders the index.ejs file on the '/' route.
})

route.get('/update-user', (req,res) => {
    res.render('update_user'); // renders the update_user.ejs file on the 'update-user' route.
})

route.get('/add-user', (req,res) => {
    res.render('add_user'); // renders the add_user.ejs file on the 'add-user' route.
})
*/

/** 
 * @description home (or root) route
 * @method GET /
*/
route.get('/', services.homeRoutes);

/** 
 * @description add user route
 * @method GET /add-user
*/
route.get('/add-user', services.add_user);

/** 
 * @description update user route
 * @method GET /update-user
*/
route.get('/update-user', services.update_user);

//API routes
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);

module.exports = route; 