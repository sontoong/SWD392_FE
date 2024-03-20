import { Table, TableProps } from "antd";
import { EnterpriseProject } from "../models/project";
import { generateEnterpriseProjectStatus } from "../utils/generators";
import { EnterpriseProjects } from "../../constants/testData";
import { useSetHeaderTitle } from "../hooks/useSetHeaderTitle";
import ProjectSearchForm from "../components/ui-enterprise/search/project-search";
import { CustomDropdown, CustomDropdownProps } from "../components/ui-enterprise/dropdown";
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



  const dropdownItems: CustomDropdownProps["items"] = [
    {
      key: "information",
      label: "Xem thông tin project",
    },
    { key: "search", label: "Tìm freelancer" },
    { key: "application", label: "Xem báo giá"},
    { key: "hired", label: "Tuyển dụng" },
  ];

  const columns: TableProps<TableData>["columns"] = [
    {
      title: "Tên Project",
      dataIndex: "title",
      key: "title",
      render: (_, record) => (
        <div>
          {record.title}
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
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <CustomDropdown
          items={dropdownItems}
          record={record}
        />
      ),
    },
  ];

  return (
    <div>
      <ProjectSearchForm/>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ position: ["bottomCenter"] }}
      />
    </div>
  );
}
