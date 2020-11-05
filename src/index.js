import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import App from './App';
// import Home from './Home';

import './styles.css'


ReactDOM.render(

    <React.StrictMode>
        <App />,
<<<<<<< HEAD
        {/* <Home />, */}
    </React.StrictMode>,

    // <App />,

=======
    </React.StrictMode>,

>>>>>>> 59d7706d159d90693242a859250a1fc84fe2a1f7
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
