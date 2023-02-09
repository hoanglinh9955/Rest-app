import React from 'react'
import { PlayerList } from '../shared/ListOfPlayer';
import { useState } from 'react'
export default function Players () {
 const [player, setPlayer] = useState()
    return (
      
      <div className="container">
        
        {PlayerList.map((player) => (
          <div className="column" key={player.id}> 
            <div className="card">
              <img src={player.img} alt="?" />
              <h3>{player.name}</h3>
              <p className="title">{player.club}</p>
              <p>
                <button onClick={ () =>{setPlayer(player)}}><a href="#popup1" id="openPopUp">Detail</a></button>
              </p>
            </div>
          </div>
        ))}
        {player && <div id="popup1" className="overlay" onClick={() => setPlayer()}>
          <div className="popup">
            <img src={player.img}/>
            <h2>{player.name}</h2>
            <a className="close" href="#">&times;</a>
            <div className="content">
              {player.info}
            </div>
          </div>
        </div>}
      </div>
    );
  }

