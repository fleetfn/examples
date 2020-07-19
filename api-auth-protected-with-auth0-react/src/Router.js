import React, {useState} from 'react';

import Home from './Home';
import NotFound from './NotFound';

export default ({initialLocation = '/'}) => {
    const [location, setLocation] = useState(initialLocation);

    const navigate = (url) => {
        window.history.pushState(null, 'Fleet with Auth0', url);
        setLocation(url);
    }

    switch (location) {
        case '/':
            return <Home />;
        default:
            return <NotFound navigate={navigate} />;
    }
};
