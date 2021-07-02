import React from 'react';
import ReactDOM from 'react-dom';

const elem = React.createElement('div', { div: 1, children: 'Hello world!' });

console.log(elem);

ReactDOM.render(elem, document.querySelector('#root'));
