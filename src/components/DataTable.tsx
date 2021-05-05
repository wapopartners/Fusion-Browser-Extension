function DataTable(props: { data: any; }) {
  const { data } = props;
  const dataEntries = Object.entries(data)
  return (
    <table>
      {dataEntries.map()}
    </table>
  )
}

export default DataTable;