import { Table, TableProps } from "antd";
import { EnterpriseProject } from "../models/project";
import { generateEnterpriseProjectStatus } from "../utils/generators";
import { EnterpriseProjects } from "../../constants/testData";
import { IconButton } from "../components/button/buttons";
import { DownloadOutlined } from "@ant-design/icons";

export interface TableData extends
EnterpriseProject {
    statusGenerator: string;
}

export default function EnterpriseProjectList() {
    const data: TableData[] = EnterpriseProjects.map((project) => (
    {...project, statusGenerator: generateEnterpriseProjectStatus(project.status)}
));

const columns: TableProps<TableData>["columns"] = [
    {
      title: "Tên Project",
      dataIndex: "title",
      key: "title",
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
            return <IconButton icon={<DownloadOutlined/>}/>
        },
        align:'center'
      },
  ];

 return <Table columns={columns} dataSource={data} pagination={{position:["bottomCenter"]}}/>;
}