import { ConfigProvider, TreeSelect, TreeSelectProps } from "antd";

const treeData: TreeSelectProps["treeData"] = [
  {
    title: "parent 100",
    value: "parent 100",
    children: [
      {
        value: "parent 1-0",
        title: "parent 1-0",
        children: [
          {
            value: "leaf1",
            title: "leaf1",
          },
          {
            value: "leaf2",
            title: "leaf2",
          },
        ],
      },
      {
        value: "parent 1-1",
        title: "parent 1-1",
        children: [
          {
            value: "leaf3",
            title: <b style={{ color: "#08c" }}>leaf3</b>,
          },
        ],
      },
    ],
  },
];

export default function TestPage() {
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
        style={{ width: "100%" }}
        dropdownStyle={{ maxHeight: 400, overflow: "auto", cursor: "default" }}
        placeholder="Please select"
        treeData={addDisabledField(treeData)}
      />
    </ConfigProvider>
  );
}
