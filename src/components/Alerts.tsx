import React from 'react';
import Alert from 'react-bootstrap/Alert';

import '../App.css';

const Alerts = (props: any) => {
  const { data } = props;
  const SUPPORTED_FUSION_RELEASE = '2.6.4';
  const LATEST_FUSION_RELEASE = '2.8.0';
  return (
    <div className="spacer-top">
       {
        (data.FUSION_RELEASE < SUPPORTED_FUSION_RELEASE) &&
        <Alert variant="danger">
          You are using Fusion version {data.FUSION_RELEASE} which is no longer supported. Please upgrade to {SUPPORTED_FUSION_RELEASE}
        </Alert>
      }
      {
        (data.FUSION_RELEASE < LATEST_FUSION_RELEASE && data.FUSION_RELEASE > SUPPORTED_FUSION_RELEASE) &&
        <Alert variant="warning">
          You are using Fusion version {data.FUSION_RELEASE}. Consider using the latest version ({LATEST_FUSION_RELEASE}).
        </Alert>
      }
      {
        (data.spaEnabled  && data.FUSION_SERVICE_WORKER) &&
        <Alert variant="success">
          You have successfully enabled the SPA Service Worker.
        </Alert>
      }
    </div>
  );
};

export default Alerts;