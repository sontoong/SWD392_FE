import { Layout, Table, TableProps, theme } from "antd";
import { Applicants } from "../../../../constants/testData";
import { Applicant } from "../../../models/applicant";
import { ApplicationAcceptForm } from "../modals";
import { formatUnixToLocal } from "../../../utils/utils";
import { Content } from "antd/es/layout/layout";

export default function ProjectApplicationList() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  interface ApplicantTable extends Applicant {
    dateFormat: string;
  }

  const data: ApplicantTable[] = Applicants.map((applicant, index) => ({
    ...applicant,
    dateFormat: formatUnixToLocal(applicant.date),
    key: index,
  }));

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
        const { ...rest } = record;
        // Otherwise, render the ViewSignContract component
        return <ApplicationAcceptForm record={rest} />;
      },
    },
  ];

  return (
    <Layout>
      <Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ position: ["bottomCenter"] }}
        />
      </Content>
    </Layout>
  );
}
