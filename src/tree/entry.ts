import React from 'react';
import { Book, CalendarViewDay, Code, Functions, LineStyle } from '@material-ui/icons';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

export interface EntryProps {
    id: string,
    title: string,
    type: EntryType,
}

export enum EntryType {
    Project = 'project',
    Service = 'service',
    Function = 'function',
    Datatype = 'datatype',
    Textblock = 'textblock',
}

export const EntryChildTypes = (type: EntryType) : EntryType[] => {
    switch (type) {
        case EntryType.Project:
            return [EntryType.Service];
        case EntryType.Service:
        case EntryType.Function:
            return [EntryType.Datatype, EntryType.Textblock];
        case EntryType.Datatype:
        case EntryType.Textblock:
            return [];
    }
}

export const EntryIcon = (type: EntryType) : React.ComponentType<SvgIconProps> => {
    switch (type) {
        case EntryType.Project:
            return Book;
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
