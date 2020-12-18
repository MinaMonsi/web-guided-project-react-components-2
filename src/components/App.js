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

  return (
    <div className="app-friends container">
      <Search />
      <FriendsList friends={friends} />
    </div>
  );
}
