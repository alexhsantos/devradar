const {Router} = require('express');

const routes = Router();

const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

routes.get('/',(req,res)=>{
  return res.json({status:'online'});
});

routes.get('/devs',DevController.index);
routes.post('/devs',DevController.store);
routes.put('/devs/:_id',DevController.update);
routes.delete('/devs/:_id',DevController.destroy);

routes.get('/search',SearchController.index);

module.exports = routes;