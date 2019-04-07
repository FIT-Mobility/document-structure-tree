import React from 'react';
import { Book, Functions } from '@material-ui/icons';

export default abstract class Entry {
    static structure: string;
    static icon: React.ComponentType;

    constructor (
        readonly id: string,
        readonly title: string,
    ) {}
}

export class ProjectEntry extends Entry {
    structure = 'project';
    icon = Book;
}

export class FunctionEntry extends Entry {
    structure = 'function';
    icon = Functions;
}
