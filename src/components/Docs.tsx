import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

import '../App.css';

const Docs = () => {
  return (
    <ListGroup className="spacer-top">
      <ListGroup.Item><a href="https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/" target="_blank">PageBuilder documentation</a></ListGroup.Item>
      <ListGroup.Item><a href="https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/" target="_blank">Fusion Engine documentation</a></ListGroup.Item>
      <ListGroup.Item><a href="https://redirector.arcpublishing.com/alc/arc-products/themes/" target="_blank">Themes documentation</a></ListGroup.Item>
    </ListGroup>
  );
};

export default Docs;