import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { CalendarViewDay, Code, Functions, LineStyle } from '@material-ui/icons';

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
export const ServiceEntry: React.FC<ServiceEntryProps> = (props) => (
    <ListItem>
        <ListItemIcon>
                <Code/>
        </ListItemIcon>
        <ListItemText primary={props.title}/>
    </ListItem>
);


interface FunctionEntryProps extends EntryProps {
    type: EntryType.Function,
    childTypes: (DatatypeEntryProps | TextblockEntryProps)[],
}
export const FunctionEntry: React.FC<FunctionEntryProps> = (props) => (
    <ListItem>
        <ListItemIcon>
                <Functions/>
        </ListItemIcon>
        <ListItemText primary={props.title}/>
    </ListItem>
);

interface DatatypeEntryProps extends EntryProps {
    type: EntryType.Datatype,
    childTypes: [],
}
export const DatatypeEntry: React.FC<DatatypeEntryProps> = (props) => (
    <ListItem>
        <ListItemIcon>
                <CalendarViewDay/>
        </ListItemIcon>
        <ListItemText primary={props.title}/>
    </ListItem>
);

interface TextblockEntryProps extends EntryProps {
    type: EntryType.Textblock,
    childtypes: [],
}
export const TextblockEntry: React.FC<TextblockEntryProps> = (props) => (
    <ListItem>
        <ListItemIcon>
                <LineStyle/>
        </ListItemIcon>
        <ListItemText primary={props.title}/>
    </ListItem>
);
