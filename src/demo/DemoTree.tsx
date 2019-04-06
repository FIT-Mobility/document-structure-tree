import React from "react";
import entry from "../tree/entry";
import Tree from "../tree/Tree";

const demoData: entry = {
    type: 'project',
    id: '0',
    title: 'top element',

    childEntries: [{
        type: 'service',
        id: '0',
        title: 'first child of top element',

        childEntries: [{
            type: 'service',
            id: '0',
            title: 'first child of first child',
        }]
    }, {
        type: 'service',
        id: '1',
        title: 'second child of top element',
    }],
}

const DemoTree: React.FC = () => (
    <Tree data={demoData}/>
);

export default DemoTree;
