import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { CalendarViewDay, Code, Functions, LineStyle } from '@material-ui/icons';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

export interface EntryProps {
    id: string,
    title: string,
    type: EntryType,
}

export enum EntryType {
    Service = 'service',
    Function = 'function',
    Datatype = 'datatype',
    Textblock = 'textblock',
}

export const EntryChildTypes = (type: EntryType) : EntryType[] => {
    switch (type) {
        case EntryType.Service:
        case EntryType.Function:
            return [EntryType.Datatype, EntryType.Textblock];
        case EntryType.Datatype:
        case EntryType.Textblock:
            return [];
    }
}

const EntryIcon = (type: EntryType) : React.ComponentType<SvgIconProps> => {
    switch (type) {
        case EntryType.Service:
            return Code;
        case EntryType.Function:
            return Functions;
        case EntryType.Datatype:
            return CalendarViewDay;
        case EntryType.Textblock:
            return LineStyle;
    }
}

export const Entry: React.FunctionComponent<EntryProps> = (props: EntryProps) => (
    <ListItem id={props.id}>
        <ListItemIcon>
            { React.createElement(EntryIcon(props.type)) }
        </ListItemIcon>
        <ListItemText primary={props.title}/>
    </ListItem>
);
