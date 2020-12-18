import React from "react";

import Friend from './Friend';

export default function FriendsList(props) {
  // console.log(props);
  // console.log(props.friends);
  const { friends } = props;

  return (
    <div className="list-friends container">
      {
        friends.map(friend => {
          return <Friend key={friend.id} friend={friend} />
        })
      }
    </div>
  );
}
