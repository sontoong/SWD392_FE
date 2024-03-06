import { Table, TableProps } from "antd";
import { FreelancerProject } from "../models/project";
import { generateProjectFunding, generateProjectFundingType, generateFreelancerProjectStatus } from "../utils/generators";
import { FreelancerProjects } from "../../constants/testData";
import ViewSignContract from "../components/ui-freelancer/modals/ViewSignContract";

export interface TableData extends
FreelancerProject {
    statusGenerator?: string;
    fundingTypeGenerator?: string;
    fundingGenerator?: string | { initialFunding: string };
}

export default function FreelancerProjectList() {const data: TableData[] = FreelancerProjects.map((project) => (
    {...project, statusGenerator: generateFreelancerProjectStatus(project.status), fundingTypeGenerator: generateProjectFundingType(project.funding), fundingGenerator: generateProjectFunding(project.funding, project.freelancerRequirement, project.initialFunding)}
));

const columns: TableProps<TableData>["columns"] = [
    {
      title: "Tên Project",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Ngày bắt đầu",
      dataIndex: "startDate",
      key: "startDate",
    },
    {
      title: "Ngày kết thúc",
      dataIndex: "endDate",
      key: "endDate",
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
            // Check if status is "denied" or "verifying", if so, return null (don't render anything)
            if (record.status === "denied" || record.status === "verifying") {
                return null;
            }
            const {statusGenerator: __, fundingGenerator: ___, fundingTypeGenerator: ____, ...rest} = record
            // Otherwise, render the ViewSignContract component
            return <ViewSignContract record={rest}/>;
        }
    },
  ];

 return <Table columns={columns} dataSource={data} pagination={{position:["bottomCenter"]}}/>;
}