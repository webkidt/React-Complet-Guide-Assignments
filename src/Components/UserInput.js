import React from 'react';

const UserInput = (props) => {
  const inputStyle = {
    border: '2px solid red',
  };

  return (
    <input
      type='text'
      style={inputStyle}
      onChange={props.changed}
      value={props.username}
    />
  );
};

export default UserInput;
