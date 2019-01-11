import React from 'react';
import Tree, { TreeProps } from '../components/Tree';

import { layers } from '../components/Node';

// TODO: random generator interface

const demoNode: TreeProps = {
    title: 'Demo Tree',
    nodes: [
        {
            collapsed: false,
            id: '0',
            layer: layers.Project,
            nodes: [
                {
                    collapsed: true,
                    id: '0',
                    layer: layers.Service,
                    nodes: [],
                    title: 'some service'
                },
            ],
            title: 'Demo Project',
        },
    ],
}

const Demo: React.FunctionComponent = () => (
    <Tree {...demoNode}/>
);

export default Demo;
