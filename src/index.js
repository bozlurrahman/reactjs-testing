import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import ComposingComponents from './ComposingComponents'

ReactDOM.render(<ComposingComponents/>,document.getElementById('root'));

serviceWorker.unregister();
