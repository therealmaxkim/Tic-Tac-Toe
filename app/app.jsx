const React = require('react');
const ReactDOM = require('react-dom');
const style = require('./css/styles.css');

/* Import Components */
const HelloWorld = require('./components/HelloWorld');

ReactDOM.render(<HelloWorld/>, document.getElementById('main'));