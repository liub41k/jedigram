import 'react-app-polyfill/ie11';

import React from 'react';
import ReactDOM from 'react-dom';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './sass/app.sass';

import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));
