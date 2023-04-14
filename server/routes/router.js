const express = require('express');

const services = require('../services/render');
const controller = require('../controller/controller');

const route = express.Router();

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