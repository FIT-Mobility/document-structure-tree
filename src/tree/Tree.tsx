import React, { useState, useReducer } from 'react';
import { EntryProps, EntryType, EntryChildTypes, EntryIcon } from "./entry";
import { Collapse, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

import './Tree.scss';


export interface TreeState {
    entry: EntryProps,
    open: boolean,
    childs: TreeState[];
}

export type TreeAction =
    | TreeActionAdd
    | TreeActionOpen
    | TreeActionClose
;
enum TreeActionType {
    Add = 'ADD',
    Close = 'CLOSE',
    Open = 'OPEN',
}
interface TreeActionProps {
    position: number[],
}
interface TreeActionAdd extends TreeActionProps {
    type: TreeActionType.Add,
    entry: EntryProps,
}
interface TreeActionOpen extends TreeActionProps {
    type: TreeActionType.Open,
}
interface TreeActionClose extends TreeActionProps {
    type: TreeActionType.Close,
}

export const TreeReducer = (state: TreeState, action: TreeAction): TreeState => {
    // navigate
    if (action.position !== []) {
        if (action.position[0] < 0 || action.position[0] >= state.childs.length)
            throw new RangeError(`Action accesses position ${action.position[0]} that is unreachable (${state.childs.length} childs).`);
        switch(action.type) {
            case TreeActionType.Add:
                if (action.position.length < 2) // skip next position if at parent
                    return TreeReducer(state, {...action, position: []});
            // to next position
            case TreeActionType.Close:
            case TreeActionType.Open:
                return TreeReducer(state.childs[action.position[0]], {...action, position: action.position.slice(1)});
        }
    }

    // manipulate state
    switch(action.type) {
        case TreeActionType.Add:
            if (!EntryChildTypes(state.entry.type).some(childType => childType === action.entry.type))
                throw new TypeError(`Action adds an entry of type ${action.entry.type} which can't be child of ${state.entry.type}.`);
            return {
                ...state,
                open: true,
                childs: state.childs.concat([{
                    entry: action.entry,
                    open: false,
                    childs: [],
                },])
            };
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
