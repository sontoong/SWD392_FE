import { TreeSelectProps } from "antd";
import { ArrayElement } from "../app/utils/helpers";

export const projectFields: Record<
  string,
  ArrayElement<TreeSelectProps["treeData"]>
> = {
  frontEnd: {
    title: "Lập trình Front-End",
    value: "frontEnd",
    children: [
      {
        title: "React",
        value: "react",
      },
    ],
  },
  backEnd: {
    title: "Lập trình Back-end",
    value: "backEnd",
    children: [
      {
        title: "Node",
        value: "node",
      },
    ],
  },
  fullStack: {
    title: "Lập trình Full-stack",
    value: "fullStack",
    children: [
      {
        title: "Fuck you",
        value: "fy",
      },
    ],
  },
};
