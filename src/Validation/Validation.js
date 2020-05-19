import React from 'react';

const Validation = (props) => {
  let output = <p>Text too short</p>;

  if (props.length > 5) {
    output = (
      <p>Text long enough</p>
    );
  }

  return (
    <div>
      {output}
    </div>
  );
}

export default Validation;
