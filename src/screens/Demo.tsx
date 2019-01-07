import React from 'react';
import Tree from '../components/Tree';

const demoNode = {
    id: '0',
    content: 'test 1',
    nodes: [
        {
            id: '0',
            content: '1st child of test',
            nodes: [
                {
                    id: '0',
                    content: 'child of 1st child of test',
                    nodes: [],
                },
            ],
        },
        {
            id: '1',
            content: '2nd child of test',
            nodes: [],
        },
    ],
}

const Demo: React.FunctionComponent = () => (
    <Tree {...demoNode}/>
);

export default Demo;
