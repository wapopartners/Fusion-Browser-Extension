import React from 'react';
import Alert from 'react-bootstrap/Alert';

import '../App.css';

const Alerts = () => {
  return (
    <div className="spacer-top">
      <Alert variant="danger">
        You are using Fusion version 2.6.2 which is no longer supported. Please upgrade to 2.7.3
      </Alert>
      <Alert variant="warning">
        You are using blocks @stable 5.3.1. Consider using @stable 5.4.1 by redeploying your bundle.
      </Alert>
    </div>
  );
};

export default Alerts;