import { Space, Table, TableProps } from "antd";
import { EnterpriseProject, Project } from "../../models/project";
import { generateEnterpriseProjectStatus } from "../../utils/generators";
import { useSetHeaderTitle } from "../../hooks/useSetHeaderTitle";
import ProjectSearchForm from "../../components/ui-enterprise/search/project-search";
import {
  CustomDropdown,
  CustomDropdownProps,
} from "../../components/ui-enterprise/dropdown";
import { ContractTable } from "../../components/ui-enterprise/tables/contractTable";
import { PrimaryButton } from "../../components/button/buttons";
import { PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hook";
import { useEffect, useState } from "react";
import { fetchPostsByEnterpriseId } from "../../redux/slice/postSlice";
export interface TableData extends EnterpriseProject {
  statusGenerator: string;
}

export default function EnterpriseProjectList() {
  useSetHeaderTitle([
    {
      title: ``,
    },
  ]);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      const res = await dispatch(fetchPostsByEnterpriseId()).unwrap();
      setProjects(res);
    }
    fetchProjects();
  }, [dispatch]);

  const fakeProjects = projects.map((project) => ({
    ...project,
    status: "hiring",
  }));
  const data: TableData[] = fakeProjects.map((project, index) => ({
    ...project,
    key: index,
    statusGenerator: generateEnterpriseProjectStatus(project.status),
  }));

  const dropdownItems: CustomDropdownProps["items"] = [
    {
      key: "information",
      label: "Xem thông tin project",
    },
    { key: "search", label: "Tìm candidate" },
    { key: "application", label: "Xem báo giá" },
    { key: "hired", label: "Tuyển dụng" },
  ];

  const columns: TableProps<TableData>["columns"] = [
    {
      title: "Tên Project",
      dataIndex: "title",
      key: "title",
      render: (_, record) => <div>{record.title}</div>,
    },
    {
      title: "Báo giá",
      dataIndex: "applicationCount",
      key: "applicationCount",
    },
    {
      title: "Tuyển dụng",
      dataIndex: "candidateCount",
      key: "candidateCount",
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
        <CustomDropdown items={dropdownItems} record={record} />
      ),
    },
  ];

  return (
    <Space className="w-full" direction="vertical" size={"large"}>
      <div>
        <div className="flex items-center justify-between">
          <div className="pb-5 text-xl uppercase">Danh sách dự án</div>
          <PrimaryButton
            icon={<PlusOutlined />}
            onClick={() => navigate("/ed/new-project")}
          >
            Thêm mới dự án
          </PrimaryButton>
        </div>
        <ProjectSearchForm />
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ position: ["none"] }}
        />
      </div>
      <div>
        <div className="pb-5 text-xl uppercase">Danh sách hợp đồng</div>
        <ContractTable />
      </div>
    </Space>
  );
}
