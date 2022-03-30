import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

import '../App.css';

const Docs = () => {
  return (
    <ListGroup className="spacer-top">
      <ListGroup.Item><a href="https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/" target="_blank" rel="noreferrer">PageBuilder documentation</a></ListGroup.Item>
      <ListGroup.Item><a href="https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/" target="_blank" rel="noreferrer">Fusion Engine documentation</a></ListGroup.Item>
      <ListGroup.Item><a href="https://redirector.arcpublishing.com/alc/arc-products/themes/" target="_blank" rel="noreferrer">Themes documentation</a></ListGroup.Item>
    </ListGroup>
  );
};

export default Docs;