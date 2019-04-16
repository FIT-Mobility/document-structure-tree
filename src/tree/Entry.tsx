import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { CalendarViewDay, Code, Functions, Help, LineStyle } from '@material-ui/icons';

enum EntryType {
    Service = 'service',
    Function = 'function',
    Datatype = 'datatype',
    Textblock = 'textblock',
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

export const Entry: React.FC<EntryProps> = (props) => {
    switch (props.type) {
        case EntryType.Service: return (
            <ListItem id={props.id}>
                <ListItemIcon>
                    <Code/>
                </ListItemIcon>
                <ListItemText primary={props.title}/>
            </ListItem>
        );
        case EntryType.Function:
        case EntryType.Datatype:
        case EntryType.Textblock: return (
            <ListItem id={props.id}>
                <ListItemIcon>
                    <Help/>
                </ListItemIcon>
                <ListItemText primary={props.title}/>
            </ListItem>
        );
    }
}
