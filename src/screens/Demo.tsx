import React from 'react';
import Tree, { TreeProps } from '../components/Tree';

import { layers } from '../components/Node';

// TODO: random generator interface

const demoNode: TreeProps = {
    title: 'Demo Tree',
    nodes: [
        {
            id: '0',
            layer: layers.Project,
            title: 'Demo Project',
            nodes: [
                {
                    id: '0',
                    layer: layers.Service,
                    title: 'some service'
                },
            ],
        },
    ],
}

const Demo: React.FunctionComponent = () => (
    <Tree {...demoNode}/>
);

export default Demo;
