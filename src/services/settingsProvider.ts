import React from 'react';

interface settings {
    theme : string,
}

const settingsContext: React.Context<settings> = React.createContext({
    theme : 'light',
});

export default settingsContext;
