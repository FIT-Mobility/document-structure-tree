import React from "react";
import { entry } from "../tree/entry";
import Tree from "../tree/Tree";

const demoData: entry = {
    id: '0',
    title: 'top element',

    childEntries: [{
        id: '0',
        title: 'first child of top element',

        childEntries: [{
            id: '0',
            title: 'first child of first child',
        }]
    }, {
        id: '1',
        title: 'second child of top element',
    }],
}

const DemoTree: React.FC = () => (
    <Tree entry={demoData}/>
);

export default DemoTree;
