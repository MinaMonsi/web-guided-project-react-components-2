import React from 'react'
import Pet from './Pet';

export default function PetsList(props) {
  // console.log(props);
  const { pets } = props;

  return (
    <div className='list-pets-friends container'>
      {/* map over pets and create a Pet component for each of them, then pass in the relevant prop */}
      {
        pets.map(pet => <Pet key={pet.id} pet={pet} />)
      }
    </div>
  )
}
