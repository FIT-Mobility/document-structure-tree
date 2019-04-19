import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { CalendarViewDay, Code, Functions, Help, LineStyle } from '@material-ui/icons';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

enum EntryType {
    Service = 'service',
    Function = 'function',
    Datatype = 'datatype',
    Textblock = 'textblock',
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
const EntryChildTypes = (type: EntryType) : EntryType[] => {
    switch (type) {
        case EntryType.Service:
        case EntryType.Function:
            return [EntryType.Datatype, EntryType.Textblock];
        case EntryType.Datatype:
        case EntryType.Textblock:
            return [];
    }
}

interface EntryProps {
    type: EntryType,

    id: string,
    title: string,
}

interface ServiceEntryProps extends EntryProps {
    type: EntryType.Service,
}

interface FunctionEntryProps extends EntryProps {
    type: EntryType.Function,
}

interface DatatypeEntryProps extends EntryProps {
    type: EntryType.Datatype,
}

interface TextblockEntryProps extends EntryProps {
    type: EntryType.Textblock,
}

export const Entry: React.FC<EntryProps> = (props) => (
    <ListItem id={props.id}>
        <ListItemIcon>
            { React.createElement(EntryIcon(props.type)) }
        </ListItemIcon>
        <ListItemText primary={props.title}/>
    </ListItem>
);
