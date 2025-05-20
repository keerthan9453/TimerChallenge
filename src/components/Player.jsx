import  { useRef, useState } from 'react';
export default function Player() {
  const playerName = useRef('');
  const [enteredplayerName, setPlayerName] = useState('');
  
  function handleClick(event){
    
    setPlayerName(playerName.current.value);
  }
  return (
    <section id="player">
      <h2 >Welcome {enteredplayerName? enteredplayerName : 'unknown entity'}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={ handleClick}>Set Name</button>
      </p>
    </section>
  );
}
