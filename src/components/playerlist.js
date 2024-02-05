    // PlayerList.js
    import React from 'react';
   import Player from '../components/playercard';
   import player from '../components/player';

    const PlayerList = () => {
    return (
        <div style={{display:'flex',mt:'1centimeter', gap: "10pixels", 
        alignItems: 'centre', justifyContent: 'center'}}>
        {player.map((player,index) => (
            <Player key={index} {...player} />
        ))}
        </div>
    );
    };

    export default PlayerList;