import vistoUnderscore from 'visto-underscore';
import $ from 'jquery';

import ReactDOM from 'react-dom';
import App from './app';
import { dispatch } from './store';
import { RENDERED } from './constants';

let rootElement = document.querySelector('.js-react-app');

if (!rootElement) {
    rootElement = document.createElement('div');

    document.body.appendChild(rootElement);
}

const handleRender = () => dispatch({ type: RENDERED });

/**
 * Render only if rootElement exists
 * and after jQuery, because some functions depend on it
 */
rootElement && $(() => ReactDOM.render(App, rootElement, handleRender));

// Previne que o underscore do visto-system-web seja sobrescrito pelo lodash
vistoUnderscore.VERSION !== '1.6.0' && vistoUnderscore.noConflict();
