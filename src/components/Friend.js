import React from "react";

export default function Friend(props) {
  // console.log(props);
  const { friend } = props;

  return (
    <div className="friend-friends container">
      <div className="friend-info">
        <div>
          {/* name */}
          <h3>Name: {friend.name}</h3>
          {/* age */}
          {/* marriage status */}
          <div>
            {/* hobbies */}
          </div>

          <div>
            {/* pets */}
          </div>
        </div>
      </div>
    </div>
  );
}
