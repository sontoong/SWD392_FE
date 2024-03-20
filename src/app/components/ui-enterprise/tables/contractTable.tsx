import { Table, TableProps } from "antd";

import { Link } from "react-router-dom";
import { Contract } from "../../../models/project";
import { contractList } from "../../../../constants/testData";
import {
  generateContractStatus,
  generateDepositTableType,
} from "../../../utils/generators";
import { formatCurrency, formatUnixToLocal } from "../../../utils/utils";

export interface TableData extends Contract {
  depositGenerator: string;
  dateFormat: string;
  formatCurrency: string;
  contractStatus: string;
}

export function ContractTable() {
  const data: TableData[] = contractList.map((contract, index) => ({
    ...contract,
    depositGenerator: generateDepositTableType(contract.depositType),
    dateFormat: formatUnixToLocal(contract.date),
    formatCurrency: formatCurrency(contract.fund),
    contractStatus: generateContractStatus(contract.status),
    key: index,
  }));

  const columns: TableProps<TableData>["columns"] = [
    {
      title: "Tên Candidate",
      dataIndex: "candidateName",
      key: "candidateName",
      render: (_, record) => (
        <div className="text-blue-500 underline">
          <Link to={`/candidates/${record.candidateId}`}>
            {record.candidateName}
          </Link>
        </div>
      ),
    },
    {
      title: "Tên Project",
      dataIndex: "candidateName",
      key: "candidateName",
      render: (_, record) => (
        <div className="text-blue-500 underline">
          <Link to={`/ed/projects/${record.projectId}`}>
            {record.projectName}
          </Link>
        </div>
      ),
    },
    {
      title: "Hạn hoàn thành",
      dataIndex: "dateFormat",
      key: "dateFormat",
    },
    {
      title: "Đặt cọc",
      dataIndex: "depositGenerator",
      key: "depositGenerator",
    },
    {
      title: "Tổng ngân sách",
      dataIndex: "formatCurrency",
      key: "formatCurrency",
    },
    {
      title: "Trạng thái",
      dataIndex: "contractStatus",
      key: "contractStatus",
    },
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ position: ["none"] }}
      />
    </div>
  );
}
