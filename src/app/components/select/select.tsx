import { Select, SelectProps, TreeSelect, TreeSelectProps } from "antd";

export function FormSelect(props: SelectProps) {
  return <Select style={{ height: "42px" }} {...props} />;
}

export function FormTreeSelect(props: TreeSelectProps) {
  const {treeData} = props
  const treeData1 = 
    treeData?.map(
      obj => ({
        ...obj,
        disabled: obj.children ? true : false,
        children: obj?.children?.map(cobj => ({
          ...cobj,
          disabled: cobj.children ? true : false,  
          checkable: false
        }))
      })
    )
  return <TreeSelect treeData={treeData1} style={{ height: "42px" }} {...props} />;
}

// export function FormTreeSelect(props: TreeSelectProps) {
//   return <TreeSelect style={{ height: "42px" }} {...props} />;
// }

export function SelectMultiple(props: SelectProps) {
  return <FormSelect mode="multiple" allowClear {...props} />;
}
