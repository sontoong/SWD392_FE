import { Table, TableProps } from "antd";
import { Applicants } from "../../../constants/testData";
import { Applicant } from "../../models/applicant";
import ApplicationAcceptForm from "./modals/ApplicationAcceptForm";
import { formatUnixToLocal } from "../../utils/utils";


export default function ProjectApplicationList() {

interface ApplicantTable extends Applicant{

  dateFormat: string;
}

const data: ApplicantTable[] = Applicants.map((applicant) => (
  {...applicant, dateFormat:formatUnixToLocal(applicant.date) }
))

const columns: TableProps<Applicant>["columns"] = [
    {
      title: "Freelancer",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Ngày",
      dataIndex: "dateFormat",
      key: "dateFormat",
    },
    {
        title: "Báo giá",
        render: (_, record) => {
            // Check if status is "denied" or "verifying", if so, return null (don't render anything)
            const {...rest} = record
            // Otherwise, render the ViewSignContract component
            return <ApplicationAcceptForm record={rest}/>;
        }
    },
  ];

 return <Table columns={columns} dataSource={data} pagination={{position:["bottomCenter"]}}/>;
}