import React from 'react';

import '../App.css';

const Fusion = (props: any) => {
  const { outputType, deployment } = props.data;
  return (
    <div> 
      <p>Fusion data</p>
      <p>
        outputType: {outputType}
      </p>
      <p>
        deployment: {deployment}
      </p></div>

  );
};

export default Fusion;