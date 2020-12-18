import React, { useState } from 'react'

export default function Pet(props) {
  // console.log(props);
  const { pet } = props;
  const [ favorite, setFavorite ] = useState(false);

  return (
    <div className='pet-friends container'>
      <p>{pet.name} ({pet.type})</p>
      {favorite ? '❤️' : <button onClick={() => setFavorite(true)}>favorite</button>}
    </div>
  )
}
