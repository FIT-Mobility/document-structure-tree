import React from "react";
import { FunctionEntry, ProjectEntry } from "../tree/Entry";
import Tree, { TreeProps } from "../tree/Tree";

const demoData: TreeProps = {
    entry: new ProjectEntry('0', 'root element'),
    childEntries: [
        {
            entry: new FunctionEntry('0', 'first child'),
        },
        {
            entry: new FunctionEntry('1', 'second child'),
        },
    ],
}

const DemoTree: React.FC = () => (
    <Tree {...demoData}/>
);

export default DemoTree;
