import React, { useEffect } from 'react';

interface withCatchErrorProps {
    component: React.ComponentType;
    callback?: (error: ErrorEvent) => void;
}

const withCatchError: React.FunctionComponent<withCatchErrorProps> = (props) => {
    const callback = props.callback || ((error: ErrorEvent) => alert(error.message));
    useEffect(() => {
        window.addEventListener('error', callback);
        return () => {
            window.removeEventListener('error', callback);
        }
    })
    return React.createElement(props.component);
}

export default withCatchError;
