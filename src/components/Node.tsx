/** @jsx jsx */

import React from 'react';
import { jsx } from '@emotion/core';
import { emitKeypressEvents } from 'readline';

jsx;

export enum layers {
    Project = '📚 Project',
    Service = 'Service',
    Function = 'Function',
    Request = 'Request',
    Response = 'Response',
}

export interface NodeProps {
    collapsed: boolean,
    id: string,
    layer: layers,
    nodes: NodeProps[],
    title: string,
}

const Node: React.FunctionComponent<NodeProps> = (props) => (
    <div
        key={props.id}
        css={({
            width: '100%',
            paddingLeft: 16,
        })}
    >
        {props.collapsed ? '▶️' : '🔽'}
        <i>{props.layer}</i>
        <b
            css={({
                paddingLeft: 8,
            })}
        >{props.title}</b>
        {
            !props.collapsed &&
            props.nodes.map(node => (
                <Node {...node}/>
            ))
        }
    </div>
)

export default Node;
