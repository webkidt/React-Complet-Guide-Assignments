import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
  return (
    <div className='UserOutput'>
      <p>Username: {props.username}</p>
      <p>Some overridden text. Hopefully!</p>
    </div>
  );
};

export default UserOutput;
