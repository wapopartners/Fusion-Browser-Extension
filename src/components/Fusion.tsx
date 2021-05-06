import React from 'react';

import '../App.css';
import DataTable from './DataTable';

const Fusion = (props: any) => {
  const { data, status } = props;
  return (
    <div> 
      <DataTable data={data} status={status} />
    </div>
  );
};

export default Fusion;