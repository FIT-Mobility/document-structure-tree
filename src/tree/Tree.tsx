import React from "react";
import entry from "./entry";
import { Collapse, List, ListItem, ListItemText } from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { useState } from 'react';

import './Tree.scss';

export interface TreeProps {
    data: entry,
}

const Tree: React.FC<TreeProps> = (props) => {

    const [open, setOpen] = useState(true);

    return <List className='list' id={props.data.id} disablePadding>
        <ListItem button onClick={() => {setOpen(!open)}}>
            <ListItemText primary={props.data.title}/>
            {props.data.childEntries && (open
                ? <ExpandLess/>
                : <ExpandMore/>
            )}
        </ListItem>
        {props.data.childEntries &&
            <Collapse in={open}>
            {
                props.data.childEntries.map(child => (
                    <Tree data={child}/>
                ))
            }
            </Collapse>
        }
    </List>
}

export default Tree;
