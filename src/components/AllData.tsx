import DataTable from "./DataTable";

function AllData(props: { data: any; status: string }) {
  const { status, data } = props;

  return (
    <DataTable status={status} data={data} />
  )
}

export default AllData;