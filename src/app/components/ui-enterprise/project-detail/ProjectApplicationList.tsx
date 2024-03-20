import { Table, TableProps } from "antd";
import { Applicants } from "../../../../constants/testData";
import { Applicant } from "../../../models/applicant";
import { ApplicationAcceptForm } from "../modals";
import { formatUnixToLocal } from "../../../utils/utils";

export default function ProjectApplicationList() {
  interface ApplicantTable extends Applicant {
    dateFormat: string;
  }

  const data: ApplicantTable[] = Applicants.map((applicant, index) => ({
    ...applicant,
    dateFormat: formatUnixToLocal(applicant.date),
    key: index,
  }));

  console.log(data);

  const columns: TableProps<Applicant>["columns"] = [
    {
      title: "Candidate",
      dataIndex: "candidateName",
      key: "candidateName",
    },
    {
      title: "Ngày",
      dataIndex: "dateFormat",
      key: "dateFormat",
    },
    {
      title: "Báo giá",
      render: (_, record) => {
        const { ...rest } = record;
        return <ApplicationAcceptForm record={rest} />;
      },
    },
  ];

  return (
    <div className="w-full">
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ position: ["bottomCenter"] }}
      />
    </div>
  );
}
