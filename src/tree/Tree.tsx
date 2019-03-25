import React from "react";
import { entry } from "./entry";
import { Collapse, List, ListItem, ListItemText } from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { useState } from 'react';

import './Tree.scss';

export interface TreeProps {
    entry: entry,
}

const Tree: React.FC<TreeProps> = (props) => {

    const [open, setOpen] = useState(true);

    return <List className='list' id={props.entry.id} disablePadding>
        <ListItem button onClick={() => {setOpen(!open)}}>
            <ListItemText primary={props.entry.title}/>
            {open
                ? <ExpandLess/>
                : <ExpandMore/>
            }
        </ListItem>
        {props.entry.childEntries &&
            <Collapse in={open}>
            {
                props.entry.childEntries.map(child => (
                    <Tree entry={child}/>
                ))
            }
            </Collapse>
        }
    </List>
}

export default Tree;
