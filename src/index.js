import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import Welcome from "./ClassComponent";

ReactDOM.render(<Welcome name="Bozlur Rahman"></Welcome>,document.getElementById('root'));

serviceWorker.unregister();
