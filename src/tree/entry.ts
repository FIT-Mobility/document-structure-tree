import React from 'react';
import { Book, Functions } from '@material-ui/icons';

export default abstract class Entry {
    abstract readonly structure: string;
    abstract readonly icon: React.ComponentType;

    protected _childEntries: Entry[] = [];

    constructor (
        readonly id: string,
        readonly title: string,
    ) {}

    get childEntries() : Entry[] {
        return this._childEntries;
    }
}

export class ProjectEntry extends Entry {
    structure = 'project';
    icon = Book;
}

export class FunctionEntry extends Entry {
    structure = 'function';
    icon = Functions;
}
