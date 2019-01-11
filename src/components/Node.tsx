import React, {useState} from 'react';

import './Node.scss';

export enum layers {
    Project = '📚 Project',
    Service = 'Service',
    Function = 'Function',
    Request = 'Request',
    Response = 'Response',
}

export interface NodeProps {
    id: string,
    layer: layers,
    title: string,
    collapsed?: boolean,
    nodes?: NodeProps[],
}

const Node: React.FunctionComponent<NodeProps> = (props) => {
    const [collapsed, setCollapsed] = useState(props.collapsed);

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
            <b className='title'>
                {props.title}
            </b>
            {!collapsed && (
                props.nodes!.map(node => (
                    <Node {...node}/>
                ))
            )}
        </div>
    );
}

export default Node;
