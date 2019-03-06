import React from 'react';
import { create } from 'jss';
import { jssPreset } from '@material-ui/core/styles';
import { JssProvider } from 'react-jss';

const insertionPoint: string = 'jss-insertion-point';

document.head.insertBefore(
    document.createComment(insertionPoint),
    document.head.firstChild,
);

const jss = create({
    ...jssPreset(),
    insertionPoint: insertionPoint,
 });

function withInjectionOrder<Props>(Component: React.ComponentType<Props>) {
    return (props: Props) => (
        <JssProvider jss={jss}>
            <Component {...props}/>
        </JssProvider>
    );
}

export default withInjectionOrder;
