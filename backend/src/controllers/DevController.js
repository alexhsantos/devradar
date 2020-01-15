const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
  async store(req,res){
    const { github_user, techs, latitude, longitude } = req.body;

    let dev = await Dev.findOne({ github_user });

    if(!dev){
      try{
        const apiRes = await axios.get(`https://api.github.com/users/${github_user}`);
        const { name = login, avatar_url, bio } = apiRes.data;
        const techArray = parseStringAsArray(techs);
      
        const location = {
          type:'Point',
          coordinates:[longitude,latitude]
        };
        
        dev = await Dev.create({
          name,
          github_user,
          bio,
          avatar_url,
          techs: techArray,
          location
        });
      }catch(err){
        return err.message === "Request failed with status code 404" ? res.status(404).json({error:"github_user not exist in github"}) : res.status(500).json({error:err.message});
      }
    }
    return res.json(dev);
  },

  async index(req, res){
    const devs = await Dev.find();

    return res.json(devs);
  },

  async update(req, res){
    const _id = req.params;

    const { techs, latitude, longitude } = req.body;

    let dev = await Dev.findOne( { _id } );

    if(dev) {
        const apiRes = await axios.get(`https://api.github.com/users/${dev.github_user}`);
        const { name = login, avatar_url, bio } = apiRes.data;   
    
        const techsArray = techs ? parseStringAsArray(techs) : dev.techs;
    
        const location = latitude && longitude ? {
            type: 'Point',
            coordinates: [longitude, latitude],
        } : dev.location;
    
        await Dev.updateOne({_id},{
            name,
            avatar_url,
            bio,
            techs: techsArray,
            location,
        });
        dev = await Dev.findOne( { _id } );
    }

    return res.json(dev);
  },

  async destroy(req, res){
    const { _id } = req.params;
    
    try{
      await Dev.deleteOne({ _id }, function (err) {});
      return res.json({message:`user removed`});
    }catch(err){
      return res.status(500).json({error:err.message});
    }
  }
}