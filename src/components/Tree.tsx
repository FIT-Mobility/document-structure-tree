import React, { useState } from 'react';

import Node, { NodeProps } from './Node';

export interface TreeProps {
    title: string,
    nodes: NodeProps[],
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
