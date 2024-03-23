import { Table, TableProps } from "antd";
import { Applicant } from "../../../models/applicant";
import { ApplicationAcceptForm } from "../modals";
import { formatDateToLocal } from "../../../utils/utils";
import { useAppDispatch } from "../../../redux/hook";
import { useEffect, useState } from "react";
import { getApplications } from "../../../redux/slice/applicationSlice";

export default function ProjectApplicationList() {
  interface ApplicantTable extends Applicant {
    dateFormat: string;
  }
  const dispatch = useAppDispatch();

  const [application, setApplication] = useState<Applicant[]>([]);

  useEffect(() => {
    async function fetch() {
      const res = await dispatch(getApplications()).unwrap();
      setApplication(res);
    }
    fetch();
  }, [dispatch]);

  const data: ApplicantTable[] = application.map((applicant, index) => ({
    ...applicant,
    dateFormat:
      (applicant.createdAt && formatDateToLocal(applicant.createdAt)) || "",
    key: index,
  }));

  console.log(data);

  const columns: TableProps<Applicant>["columns"] = [
    {
      title: "Candidate",
      dataIndex: ["candidate", "username"],
      key: "candidate",
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
