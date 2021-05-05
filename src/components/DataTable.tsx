function DataTable(props: { data: any; status: string }) {
  const { status, data } = props;

  return (
    <pre>
      <code>
        {status === 'resolved' ? JSON.stringify(data) : status}
      </code>
    </pre>
  )
}

export default DataTable;