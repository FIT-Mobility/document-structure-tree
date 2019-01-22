import React, {useState} from 'react';

import './Node.scss';

interface Layer {
    id: string,
    name: string,
    symbol: string,
    childLayers: Layer,
}

export enum layers {
    Project = '📚 Project',
    Service = 'Service',
    Function = 'Function',
    Request = 'Request',
    Response = 'Response',
}

export interface NodeProps<Layer> {
    id: string,
    layer: Layer,
    title: string,
    nodes?: NodeProps<Layer>[],
}

const Node: React.FunctionComponent<NodeProps<Layer>> = (props) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div
            className='node'
            key={props.id}
        >
            <span
                onClick = {() => setCollapsed(!collapsed)}
            >
                {collapsed ? '▶️' : '🔽'}
            </span>
            <span
                className='layer'
            >
                {props.layer}
            </span>
            <span className='title'>
                {props.title}
            </span>
            {!collapsed && props.nodes && (
                props.nodes.map(node => (
                    <Node {...node}/>
                ))
            )}
        </div>
    );
}

export default Node;
