const routes = require('express').Router();
const category = require("../Controllers/category");
const { Categories } = require('../Models/models');
 
//Route here
routes.post('/category', create_Categories);
routes.get('/category', get_Categories);

routes.route('/api/transaction')
.post('/category'.create_Transaction)
.get('/category'.get_Transaction)
.delete('/category'.delete_Transaction)
  
    
module.exports = routes;