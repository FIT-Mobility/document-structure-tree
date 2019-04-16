import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { CalendarViewDay, Code, Functions, Help, LineStyle } from '@material-ui/icons';
import SvgIcon from '@material-ui/core/SvgIcon';

enum EntryType {
    Service = 'service',
    Function = 'function',
    Datatype = 'datatype',
    Textblock = 'textblock',
}
const EntryIcon = (type: EntryType) : typeof SvgIcon => {
    switch (type) {
        case EntryType.Service: return Code;
        case EntryType.Function: return Functions;
        case EntryType.Datatype: return CalendarViewDay;
        case EntryType.Textblock: return LineStyle;
    }
}

interface EntryProps {
    type: EntryType,
    childTypes: EntryProps[],

    id: string,
    title: string,
}

interface ServiceEntryProps extends EntryProps {
    type: EntryType.Service,
    childTypes: (DatatypeEntryProps | TextblockEntryProps)[],
}

interface FunctionEntryProps extends EntryProps {
    type: EntryType.Function,
    childTypes: (DatatypeEntryProps | TextblockEntryProps)[],
}

interface DatatypeEntryProps extends EntryProps {
    type: EntryType.Datatype,
    childTypes: [],
}

interface TextblockEntryProps extends EntryProps {
    type: EntryType.Textblock,
    childtypes: [],
}

export const Entry: React.FC<EntryProps> = (props) => (
    <ListItem id={props.id}>
        <ListItemIcon>
            { React.createElement(EntryIcon(props.type)) }
        </ListItemIcon>
        <ListItemText primary={props.title}/>
    </ListItem>
);
