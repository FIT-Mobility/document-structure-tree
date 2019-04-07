import React from "react";
import Entry from "./Entry";
import { Collapse, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { useState } from 'react';

import './Tree.scss';

export interface TreeProps {
    entry: Entry,
    childEntries?: TreeProps[],
}

const Tree: React.FC<TreeProps> = (props) => {

    const [open, setOpen] = useState(true);

    return <List className='list' id={props.entry.id} disablePadding>
        <ListItem button onClick={() => {setOpen(!open)}}>
            <ListItemIcon>
                { React.createElement(props.entry.icon) }
            </ListItemIcon>
            <ListItemText primary={props.entry.title}/>
            {props.childEntries && (open
                ? <ExpandLess/>
                : <ExpandMore/>
            )}
        </ListItem>
        {props.childEntries &&
            <Collapse in={open}>
            {
                props.childEntries.map(child => (
                    <Tree {...child}/>
                ))
            }
            </Collapse>
        }
    </List>
}

export default Tree;
