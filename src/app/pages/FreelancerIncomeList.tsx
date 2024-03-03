import { Table, TableProps } from "antd";
import { Incomes } from "../../constants/testData";
import ViewSignContract from "../components/ui-freelancer/modals/ViewSignContract";
import { Income } from "../models/income";


export default function FreeLancerIncomeList() {

const data: Income[] = Incomes

const columns: TableProps<Income>["columns"] = [
    {
      title: "Khách hàng",
      dataIndex: "createdBy",
      key: "createdBy",
    },
    {
      title: "Hợp đồng",
      render: (_, record) => {
          // Check if status is "denied" or "verifying", if so, return null (don't render anything)
          if (record.status === "denied" || record.status === "verifying") {
              return null;
          }
          // Otherwise, render the ViewSignContract component
          return <ViewSignContract />;
      }
    },
    {
      title: "Thu nhập",
      dataIndex: "income",
      key: "income",
    },
    {
      title: "Phí hoa hồng",
      dataIndex: "serviceFee",
      key: "serviceFee",
    },
  ];

 return <Table columns={columns} dataSource={data} />;
}