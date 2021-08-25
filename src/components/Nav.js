import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const Nav = ({ libraryStatus, setLibraryStatus }) => {
    // Event handlers
    const libStatus = () => {
        setLibraryStatus(!libraryStatus);
    };

    return (
        <nav>
            <h1>Waves</h1>
            <button onClick={libStatus}>
                Library
                <FontAwesomeIcon icon={faMusic} />
            </button>
        </nav>
    );
};

export default Nav;
