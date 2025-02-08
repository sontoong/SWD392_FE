import { Table, TableProps } from "antd";

import { Link } from "react-router-dom";
import { Contract } from "../../../models/project";

import {
  generateContractStatus,
  generateDepositTableType,
} from "../../../utils/generators";
import { formatCurrency, formatUnixToLocal } from "../../../utils/utils";
import { useAppDispatch } from "../../../redux/hook";
import { getContracts } from "../../../redux/slice/contractSlice";
import { useEffect, useState } from "react";

export interface TableData extends Contract {
  depositGenerator: string;
  dateFormat: string;
  formatCurrency: string;
  contractStatus: string;
}

export function ContractTable() {
  const dispatch = useAppDispatch();
  const [contracts, setContracts] = useState<Contract[]>([]);
  console.log(contracts);

  useEffect(() => {
    async function fetch() {
      const res = await dispatch(getContracts()).unwrap();
      setContracts(res);
    }
    fetch();
  }, [dispatch]);

  if (!contracts) return;
  const data: TableData[] = contracts.map((contract, index) => ({
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
      dataIndex: ["applicant", "candidateName"],
      key: "candidateName",
      render: (_, record) => (
        <div className="text-blue-500 underline">
          <Link to={`/candidates/${record.applicant.candidateId}`}>
            {record.applicant.candidate.username}
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
          <Link to={`/ed/projects/${record.applicant.projectId}`}>
            {record.applicant.project.title}
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
      dataIndex: "status",
      key: "status",
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
