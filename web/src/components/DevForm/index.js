import React, {useEffect, useState} from 'react';

import './style.css';

function DevForm({onSubmit}){
  const [github_user,setGithubUser]=useState('');
  const [techs,setTechs]=useState('');
  const [latitude,setLatitude]=useState('');
  const [longitude,setLongitude]=useState('');

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(
      (position)=>{
        const {latitude, longitude} = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err)=>{
        console.log(err);
      },
      {
        timeout: 30000
      }
    );
  },[]);

  async function handleSubmit(e){
    e.preventDefault();
    await onSubmit({
      github_user,
      techs,
      latitude,
      longitude
    });
    setGithubUser('');
    setTechs('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-block">
        <label htmlFor="github_user">Github User</label>
        <input name="github_user" id="github_user" required value={github_user} onChange={e=>setGithubUser(e.target.value)}/>
      </div>
      <div className="input-block">
        <label htmlFor="techs">Technologies</label>
        <input name="techs" id="techs" required value={techs } onChange={e=>setTechs(e.target.value)}/>
      </div>
      <div className="input-group">
        <div className="input-block">
          <label htmlFor="latitude">Latitude</label>
          <input 
            name="latitude" 
            id="latitude" 
            required 
            value={latitude} 
            type="number"
            onChange={e=>setLatitude(e.target.value)}
          />
        </div>
        <div className="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input 
            name="longitude" 
            id="longitude" 
            required 
            value={longitude} 
            type="number"
            onChange={e=>setLongitude(e.target.value)}
          />
        </div>
      </div>
      <button type="submit">Save</button>
    </form>
  );
}

export default DevForm;