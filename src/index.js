import React from 'react'; //traemos la libreria
import ReactDOM from 'react-dom/client'; //donde se renderiza la app

import App from './App'; //export default

//import { Otra } from './App'; export nombrado

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')); //punto de entrada de nuestra web (root id en js)
root.render(<App />); //renderizo


