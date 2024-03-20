import { Table, TableProps } from "antd";
import { formatCurrency, formatUnixToLocal } from "../utils/utils";
import { Transaction } from "../models/transaction";
import { Transactions } from "../../constants/testData";
import { generateTransactionType } from "../utils/generators";
import { useSetHeaderTitle } from "../hooks/useSetHeaderTitle";

export default function TransactionList(props: { role: string }) {
  useSetHeaderTitle([
    {
      title: `Lịch sử giao dịch`,
      path: location.pathname,
    },
  ]);
  interface TransactionTable extends Transaction {
    MoneyFormat: string;
    TypeFormat: string;
    DateFormat: string;
  }

  const data: TransactionTable[] = Transactions.map((item, index) => ({
    ...item,
    MoneyFormat: formatCurrency(item.moneyAmount),
    TypeFormat: generateTransactionType(item.type),
    DateFormat: formatUnixToLocal(item.date),
    key: index,
  }));

  const columns: TableProps<TransactionTable>["columns"] = [
    {
      title: "Ngày",
      dataIndex: "DateFormat",
      key: "DateFormat",
    },
    {
      title: "Loại",
      dataIndex: "TypeFormat",
      key: "TypeFormat",
    },
    {
      title: props.role == "freelancer" ? "Khách hàng" : "Freelancer",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Số tiền",
      dataIndex: "MoneyFormat",
      key: "MoneyFormat",
    },
    {
      title: "Mã giao dịch",
      dataIndex: "id",
      key: "id",
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
