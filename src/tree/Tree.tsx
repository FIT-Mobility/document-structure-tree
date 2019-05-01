import React, { useState, useReducer } from 'react';
import { EntryProps, EntryType, EntryChildTypes, EntryIcon } from "./entry";
import { Collapse, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

import './Tree.scss';


export interface TreeState {
    entry: EntryProps,
    open: boolean,
    childs?: TreeState[];
}

export enum TreeAction {
}
export const TreeReducer = (state: TreeState, action: TreeAction): TreeState => {
    switch(action) {
    }
    return state;
}

export interface TreeProps {
    state: TreeState,
    dispatch: React.Dispatch<TreeAction>,
    position?: number[],
}
export const Tree: React.FunctionComponent<TreeProps> = (props) => (
    <List className='list' disablePadding>
        <ListItem button id={props.state.entry.id} /* onClick setOpen */>
            <ListItemIcon>
                { React.createElement(EntryIcon(props.state.entry.type)) }
            </ListItemIcon>
            { props.state.childs && (props.state.open
                ? <ExpandLess/>
                : <ExpandMore/>
            )}
        </ListItem>
        { props.state.childs &&
            <Collapse in={props.state.open}>
            { props.state.childs.map((child, index) => (
                <Tree
                    state={child}
                    dispatch={props.dispatch}
                    position={props.position ? props.position.concat(index) : [index,]}/>
                ))
            }
            </Collapse>
        }
    </List>
);
