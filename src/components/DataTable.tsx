import BootstrapTable from 'react-bootstrap-table-next';

const formatKeyValuePair = (keyValuePairObject: Object) => {
  return Object.entries(keyValuePairObject).map(arrayPair => {
    const stringifiedValue = JSON.stringify(arrayPair[1]);
    
    return ({
      key: arrayPair[0],
      previewValue: stringifiedValue.slice(0, 20),
      // for now stringify
      value: stringifiedValue
  })});
}

const expandRow = {
  renderer: (row: { value: string; }) => {
    return (
      <p>
        {row.value}
      </p>
  )},
  showExpandColumn: false
};

function DataTable(props: { data: any; status: string }) {
  const { status, data } = props;
  console.log(props)

  const columns = [{
    dataField: 'key',
    text: 'Fusion Key'
  }, {
    dataField: 'previewValue',
    text: 'Fusion Value'
  }];

  if (status === 'resolved') {
    const formattedData = formatKeyValuePair(data)
    console.log(formattedData, 'formatted data');

    return (
      <div style={{ maxWidth: '100%', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
        <p>Click row to expand</p>
        <BootstrapTable keyField='key' data={formattedData} columns={columns} expandRow={expandRow} />
      </div>
    )
  }

  return (
    <p>loading</p>
  )
}

export default DataTable;