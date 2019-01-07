/** @jsx jsx */

import React, { useState } from 'react';
import { jsx } from '@emotion/core';

jsx;

interface TreeNodeProps {
    id: string;
    content: string;
    nodes: TreeNodeProps[];
}

const TreeNode: React.FunctionComponent<TreeNodeProps> = (props) => (
    <p
        key={props.id}
        css={({
            width: '100%',
            paddingLeft: 16,
        })}
    >
        {props.content}
        {
            props.nodes.map(node => (
                <TreeNode {...node}/>
            ))
        }
    </p>
);


const Tree: React.FunctionComponent<TreeNodeProps> = (props) => (
    <>
        <h1>{props.content}</h1>
        {
            props.nodes.map(node => (
                <TreeNode {...node}/>
            ))
        }
    </>
);

export default Tree;
