import { Table, TableProps } from "antd";
import { CandidateProject } from "../../models/project";
import {
  generateProjectFunding,
  generateProjectFundingType,
  generateCandidateProjectStatus,
} from "../../utils/generators";
import { CandidateProjects } from "../../../constants/testData";
import { ViewSignContract } from "../../components/ui-candidate/modals";
import { formatUnixToLocal } from "../../utils/utils";
import { useSetHeaderTitle } from "../../hooks/useSetHeaderTitle";
import { useAppDispatch } from "../../redux/hook";
import { getContractsCandidate } from "../../redux/slice/contractSlice";
import { useEffect, useState } from "react";

export interface TableData extends CandidateProject {
  statusGenerator?: string;
  fundingTypeGenerator?: string;
  fundingGenerator?: string | { initialFunding: string };
  startDateGenerator?: string;
  enDateGenerator?: string;
}

export default function CandidateProjectList() {
  useSetHeaderTitle([
    {
      title: `Danh sách dự án`,
    },
  ]);
  const dispatch = useAppDispatch();
  const [contracts, setContracts] = useState();
  console.log(contracts);

  useEffect(() => {
    async function fetch() {
      const res = await dispatch(getContractsCandidate()).unwrap();
      console.log(res);
      setContracts(res);
    }
    fetch();
  }, [dispatch]);

  const data: TableData[] = CandidateProjects.map((project, index) => ({
    ...project,
    startDateGenerator: formatUnixToLocal(project.startDate),
    enDateGenerator: project.endDate
      ? formatUnixToLocal(project.endDate)
      : undefined,
    statusGenerator: generateCandidateProjectStatus(project.status),
    fundingTypeGenerator: generateProjectFundingType(project.funding),
    fundingGenerator: generateProjectFunding(
      project.funding,
      project.candidateRequirement,
      project.initialFunding,
    ),
    key: index,
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
    <div className="w-full">
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ position: ["bottomCenter"] }}
      />
    </div>
  );
}
