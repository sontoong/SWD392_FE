import { Table, TableProps } from "antd";
import { EnterpriseProject } from "../models/project";
import { generateEnterpriseProjectStatus } from "../utils/generators";
import { EnterpriseProjects } from "../../constants/testData";
import { IconButton } from "../components/button/buttons";
import { DownloadOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useSetHeaderTitle } from "../hooks/useSetHeaderTitle";

export interface TableData extends EnterpriseProject {
  statusGenerator: string;
}

export default function EnterpriseProjectList() {
  useSetHeaderTitle([
    {
      title: `Danh sách project`,
      path: location.pathname,
    },
  ]);
  const data: TableData[] = EnterpriseProjects.map((project) => ({
    ...project,
    statusGenerator: generateEnterpriseProjectStatus(project.status),
  }));

  const columns: TableProps<TableData>["columns"] = [
    {
      title: "Tên Project",
      dataIndex: "title",
      key: "title",
      render: (_, record) => (
        <div className="text-blue-500 underline">
          <Link to={`${record.id}`}>{record.title}</Link>
        </div>
      ),
    },
    {
      title: "Báo giá",
      dataIndex: "applicationCount",
      key: "applicationCount",
    },
    {
      title: "Tuyển dụng",
      dataIndex: "freelancerCount",
      key: "freelancerCount",
    },
    {
      title: "Tình trạng",
      dataIndex: "statusGenerator",
      key: "statusGenerator",
    },
    {
      title: "Hợp đồng",
      render: () => {
        return <IconButton icon={<DownloadOutlined />} />;
      },
      align: "center",
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{ position: ["bottomCenter"] }}
    />
  );
}
