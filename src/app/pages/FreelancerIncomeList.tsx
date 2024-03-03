import { Table, TableProps } from "antd";
import { Incomes } from "../../constants/testData";
import { Income } from "../models/income";
import { DownloadOutlined } from "@ant-design/icons";
import { formatCurrency } from "../utils/utils";


export default function FreeLancerIncomeList() {
  interface IncomeTable extends Income{
    IncomeAmountFormat: string;
    ServiceFeeFormat: string;
  }

const data: IncomeTable[] = Incomes.map((item)=>(
  {...item, IncomeAmountFormat:formatCurrency(item.incomeAmount), ServiceFeeFormat:formatCurrency(item.serviceFee)}
))

const columns: TableProps<IncomeTable>["columns"] = [
    {
      title: "Khách hàng",
      dataIndex: "customer",
      key: "customer",
    },
    {
      title: "Hợp đồng",
      render: () => {
          return <DownloadOutlined/>
      },
      align:'center'
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

 return <Table columns={columns} dataSource={data} pagination={{position:["bottomCenter"]}}/>;
}