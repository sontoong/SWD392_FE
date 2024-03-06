// import { TreeProps } from "antd";

// export type Field = {
//     [key: string]: TreeProps;
// };

export type TreeField = {
    title: string;
    value: string;
    children?: TreeField[];
};