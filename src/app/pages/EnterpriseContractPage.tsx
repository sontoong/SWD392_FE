import { Table, TableProps } from "antd";
import { Contract } from "../models/project";
import {
  generateContractStatus,
  generateDepositTableType,
} from "../utils/generators";
import { contractList } from "../../constants/testData";
import { Link } from "react-router-dom";
import { useSetHeaderTitle } from "../hooks/useSetHeaderTitle";
import { formatCurrency, formatUnixToLocal } from "../utils/utils";

export interface TableData extends Contract {
  depositGenerator: string;
  dateFormat: string;
  formatCurrency: string;
  contractStatus: string;
}

export default function EnterpriseContractPage() {
  useSetHeaderTitle([
    {
      title: `Danh sách hợp đồng`,
      path: location.pathname,
    },
  ]);
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
          <Link to={`${record.candidateId}`}>{record.candidateName}</Link>
        </div>
      ),
    },
    {
      title: "Tên Project",
      dataIndex: "candidateName",
      key: "candidateName",
      render: (_, record) => (
        <div className="text-blue-500 underline">
          <Link to={`${record.projectId}`}>{record.projectName}</Link>
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
        pagination={{ position: ["bottomCenter"] }}
      />
    </div>
  );
}
