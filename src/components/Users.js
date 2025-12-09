import React, { useState } from "react";

const Users = (props) => {
  const [count] = useState(0);
  const [count2] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <div>Count: {count2}</div>
      <h2>Name: {props?.name}</h2>
      <div>Location: {props?.location}</div>
      <div>ID: @sreenath</div>
    </div>
  );
};

export default Users;
