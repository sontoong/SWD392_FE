import { TreeField } from "../app/models/field";

export const projectField: Record<string, TreeField>  = {
    frontEnd: { title: "Lập trình Front-End", value: "frontEnd", children:[
        {
            title: "React",
            value:'react',
        },
    ]},
    backEnd: { title: "Lập trình Back-end", value: "backEnd", children:[
        {
            title:'Node',
            value:'node',
        }
    ]},
    fullStack: { title: "Lập trình Full-stack", value: "fullStack", children:[
        {
            title:'Fuck you',
            value:'fy',
        }
    ]},
};