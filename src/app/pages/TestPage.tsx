import { Form } from "antd";
import { FormRangePicker } from "../components/input/inputs";
import dayjs from "dayjs";

export default function TestPage() {
  const initialValues = {
    // date: [dayjs(Date.now()), dayjs(Date.now())],
    date: [Date.now(), Date.now()],
  };
  return (
    <Form layout="vertical" initialValues={initialValues}>
      <Form.Item name="date" label="Date range">
        <FormRangePicker />
      </Form.Item>
    </Form>
  );
}
