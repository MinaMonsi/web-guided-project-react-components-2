import React, {useState} from "react";
import dummyData, { hello } from '../dummy-data/friends';

import Search from './Search';
import FriendsList from './FriendsList';

export default function App() {
  // console.log(hello);
  // console.log(dummyData);

  // saving a slice of state with some data in it
  const [ friends, setFriends ] = useState(dummyData);
  const [ searchTerm, setSearchTerm ] = useState('');
  console.log(searchTerm);

  // building a function that should flip the value of 'married' in the dummy data
  const changeStatus = id => {
    setFriends(
      friends.map(friend => {
        if (friend.id == id) {
          return { ...friend, married: !friend.married };
        } else {
          return friend;
        }
      })
    );
  }

  // STRETCH GOAL: make a helper function that returns
  // a filtered array of friends data
  const getFilteredFriends = () => {
    // filter function over friends array
    // check some value against the value of each object
    // return the filtered array
    // also consider formatting functions like trim() or toLowerCase()

    return friends;
  };

  return (
    <div className="app-friends container">
      <Search setSearchTerm={setSearchTerm} />
      <FriendsList friends={friends} changeStatus={changeStatus} />
    </div>
  );
}
