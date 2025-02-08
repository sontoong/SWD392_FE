import { Table, TableProps } from "antd";
import { Incomes } from "../../../constants/testData";
import { Income } from "../../models/income";
import { formatCurrency } from "../../utils/utils";
import { useSetHeaderTitle } from "../../hooks/useSetHeaderTitle";
import { ViewContractHistory } from "../../components/ui-candidate/modals/view-contract-history";

export default function CandidateIncomeList() {
  useSetHeaderTitle([
    {
      title: `Thống kê thu nhập`,
    },
  ]);

  interface IncomeTable extends Income {
    IncomeAmountFormat: string;
    ServiceFeeFormat: string;
  }

  const data: IncomeTable[] = Incomes.map((item, index) => ({
    ...item,
    IncomeAmountFormat: formatCurrency(item.incomeAmount),
    ServiceFeeFormat: formatCurrency(item.serviceFee),
    key: index,
  }));

  const columns: TableProps<IncomeTable>["columns"] = [
    {
      title: "Khách hàng",
      dataIndex: "customer",
      key: "customer",
    },
    {
      title: "Hợp đồng",
      render: (_, record) => {
        console.log(record);
        return <ViewContractHistory />;
      },
      align: "center",
    },
    {
      title: "Thu nhập",
      dataIndex: "IncomeAmountFormat",
      key: "IncomeAmountFormat",
    },
    {
      title: "Phí hoa hồng",
      dataIndex: "ServiceFeeFormat",
      key: "ServiceFeeFormat",
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
