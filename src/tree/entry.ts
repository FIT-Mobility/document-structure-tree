import React from 'react';
import { Book, Functions } from '@material-ui/icons';

export default abstract class Entry {
    abstract readonly structure: string;
    abstract readonly icon: React.ComponentType;

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
