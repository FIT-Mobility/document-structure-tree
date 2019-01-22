import React, { useState } from 'react';

import Node, { NodeProps } from './Node';

export interface TreeProps<Layer> {
    title: string,
    nodes: NodeProps<Layer>[],
}

const Tree: React.FunctionComponent<TreeProps> = (props) => (
    <>
        <h1>{props.title}</h1>
        {
            props.nodes.map(node => (
                <Node {...node}/>
            ))
        }
    </>
)

export default Tree;
