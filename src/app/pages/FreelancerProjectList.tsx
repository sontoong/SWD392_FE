import { Table, TableProps } from "antd";
import { FreelancerProject } from "../models/project";
import {
  generateProjectFunding,
  generateProjectFundingType,
  generateFreelancerProjectStatus,
} from "../utils/generators";
import { FreelancerProjects } from "../../constants/testData";
import { ViewSignContract } from "../components/ui-freelancer/modals";
import { formatUnixToLocal } from "../utils/utils";

export interface TableData extends FreelancerProject {
  statusGenerator?: string;
  fundingTypeGenerator?: string;
  fundingGenerator?: string | { initialFunding: string };
  startDateGenerator?: string;
  enDateGenerator?: string;
}

export default function FreelancerProjectList() {
  const data: TableData[] = FreelancerProjects.map((project) => ({
    ...project,
    startDateGenerator: formatUnixToLocal(project.startDate),
    enDateGenerator: project.endDate ? formatUnixToLocal(project.endDate) : undefined,
    statusGenerator: generateFreelancerProjectStatus(project.status),
    fundingTypeGenerator: generateProjectFundingType(project.funding),
    fundingGenerator: generateProjectFunding(
      project.funding,
      project.freelancerRequirement,
      project.initialFunding,
    ),
  }));

  const columns: TableProps<TableData>["columns"] = [
    {
      title: "Tên Project",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Ngày bắt đầu",
      dataIndex: "startDateGenerator",
      key: "startDateGenerator",
    },
    {
      title: "Ngày kết thúc",
      dataIndex: "enDateGenerator",
      key: "enDateGenerator",
    },
    {
      title: "Lương",
      dataIndex: "fundingGenerator",
      key: "fundingGenerator",
    },
    {
      title: "Tính theo",
      dataIndex: "fundingTypeGenerator",
      key: "fundingTypeGenerator",
    },
    {
      title: "Trạng thái",
      dataIndex: "statusGenerator",
      key: "statusGenerator",
    },
    {
      title: "Hợp đồng",
      render: (_, record) => {
        if (record.status === "denied" || record.status === "verifying") {
          return null;
        }
        // const {
        //   statusGenerator: __,
        //   fundingGenerator: ___,
        //   fundingTypeGenerator: ____,
        //   ...rest
        // } = record;
        return <ViewSignContract record={record} />;
      },
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
