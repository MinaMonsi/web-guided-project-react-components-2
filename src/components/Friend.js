import React from "react";
import PetsList from './PetsList';

export default function Friend(props) {
  // console.log(props);
  const { friend, changeStatus } = props;

  return (
    <div className="friend-friends container">
      <div className="friend-info">
        <div>
          {/* name */}
          <h3>Name: {friend.name}</h3>
          {/* age */}
          <p>Age: {friend.age}</p>
          {/* marriage status */}
          <p>Married: {friend.married ? 'Yes' : 'No'} <button onClick={() => changeStatus(friend.id)}>change status</button></p>
          <div>
            {/* hobbies */}
            {/* use the map technique like we did for FriendsList */}
            {friend.hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)}
          </div>

          <div>
            {/* pets */}
            <PetsList pets={friend.pets} />
          </div>
        </div>
      </div>
    </div>
  );
}
