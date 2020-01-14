const {Router} = require('express');
const routes = Router();

routes.get('/',(req,res)=>{
  return res.json({status:'online'})
});

routes.post('/devs',(req,res)=>{
  const { github_user } = req.body;
  return res.json({user:github_user});
})

module.exports = routes;