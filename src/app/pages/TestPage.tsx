import { TreeSelect, TreeSelectProps } from "antd";
import { useState } from "react";

const treeData: TreeSelectProps["treeData"] = [
  {
    title: "parent 100",
    value: "parent 1",
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
  {
    value: "leaf10",
    title: "leaf10",
    children: [
      {
        value: "leaf11",
        title: "leaf11",
        children: [
          {
            value: "leaf12",
            title: "leaf12",
            children: [
              {
                value: "leaf13",
                title: "leaf13",
              },
            ],
          },
        ],
      },
    ],
  },
];

export default function TestPage() {
  const [value, setValue] = useState<string>();
  console.log(value);

  // const makeuncheckable = (dataarr: TreeSelectProps["treeData"]) =>
  //   dataarr?.map((obj) => ({
  //     ...obj,
  //     disabled: Boolean(obj?.children),
  //     children: obj?.children?.map((cobj) => ({
  //       ...cobj,
  //       disabled: Boolean(cobj?.children),
  //     })),
  //   }));

  const onChange = (newValue: string) => {
    setValue(newValue);
  };

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

  const modifiedTreeData = addDisabledField(treeData);
  console.log(modifiedTreeData);

  return (
    <TreeSelect
      showSearch
      style={{ width: "100%" }}
      value={value}
      dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
      placeholder="Please select"
      onChange={onChange}
      treeData={addDisabledField(treeData)}
    />
  );
}
