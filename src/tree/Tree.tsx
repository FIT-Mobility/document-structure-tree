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

export type TreeAction =
    | TreeActionOpen
    | TreeActionClose
;
enum TreeActionType {
    Close = 'CLOSE',
    Open = 'OPEN',
}
interface TreeActionProps {
    position: number[],
}
interface TreeActionOpen extends TreeActionProps {
    type: TreeActionType.Open,
}
interface TreeActionClose extends TreeActionProps {
    type: TreeActionType.Close,
}

export const TreeReducer = (state: TreeState, action: TreeAction): TreeState => {
    // navigate
    switch(action.type) {
        // to position
        case TreeActionType.Close:
        case TreeActionType.Open:
            if (action.position !== [] && state.childs && (action.position[0] < state.childs.length))
                return TreeReducer(state.childs[action.position[0]], {...action, position: action.position.slice(1)});
        // to parent
    }

    // manipulate state
    switch(action.type) {
        case TreeActionType.Close:
            return {...state, open: false};
        case TreeActionType.Open:
            return {...state, open: true};
    }

    return state;
}

export interface TreeProps {
    state: TreeState,
    dispatch: React.Dispatch<TreeAction>,
    position: number[],
}
export const Tree: React.FunctionComponent<TreeProps> = (props) => (
    <List className='list' disablePadding>
        <ListItem button id={props.state.entry.id}
            onClick={() => props.dispatch(props.state.open
                ? { type: TreeActionType.Close, position: props.position }
                : { type: TreeActionType.Open, position: props.position }
            )}
        >
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
