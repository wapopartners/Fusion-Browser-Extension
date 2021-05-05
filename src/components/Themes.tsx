import React from 'react';

import '../App.css';

const Themes = (props: any) => {
  const { blockDistTag } = props.data
  return (
    <div>
      <p>Themes data</p>
      <p>Block dist tag: {blockDistTag}</p>
    </div>
  );
};

export default Themes;