import React from 'react';

const personAuth = React.createContext({
    auth: false,
    login: () => {}
});

export default personAuth;
