import React from 'react';
import ReactDOM from 'react-dom';
import { TimerCanvas, MyClass } from './components.jsx';

ReactDOM.render(<MyClass name="Steve" />, document.getElementById('output'));
ReactDOM.render(<TimerCanvas />, document.getElementById('timer'));