import {
  ConfigProvider,
  Select,
  SelectProps,
  TreeProps,
  TreeSelect,
  TreeSelectProps,
} from "antd";

export function FormSelect(props: SelectProps) {
  return <Select style={{ height: "42px" }} {...props} />;
}

export function FormTreeSelect(props: TreeProps) {
  const { treeData } = props;

  const addDisabledField = (
    data: TreeSelectProps["treeData"],
  ): TreeSelectProps["treeData"] => {
    return data?.map((node) => {
      if (node.children && node.children.length > 0) {
        return {
          ...node,
          disabled: true,
          children: addDisabledField(node.children),
        };
      } else {
        return node;
      }
    });
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorTextDisabled: "black",
        },
      }}
    >
      <TreeSelect
        showSearch
        style={{ width: "100%", height: "42px" }}
        dropdownStyle={{ maxHeight: 400, overflow: "auto", cursor: "default" }}
        placeholder="Please select"
        treeData={addDisabledField(treeData as TreeSelectProps["treeData"])}
      />
    </ConfigProvider>
  );
}

export function SelectMultiple(props: SelectProps) {
  return <FormSelect mode="multiple" allowClear {...props} />;
}
