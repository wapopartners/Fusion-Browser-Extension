import React from 'react';
import DataTable from './DataTable';
import '../App.css';

const Themes = (props: any) => {
  const { data, status } = props
  return (
    <div>
      <DataTable data={data} status={status} />
    </div>
  );
};

export default Themes;