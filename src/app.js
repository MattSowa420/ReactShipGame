import React from 'react';
import ReactDOM from 'react-dom';
import { TimerCanvas, MyClass } from './components.jsx';

ReactDOM.render(<MyClass name="Steve" />, document.getElementById('output'));
ReactDOM.render(<TimerCanvas />, document.getElementById('timer'));
ReactDOM.render(<TimerCanvas />, document.getElementById('timer2'));
ReactDOM.render(<TimerCanvas />, document.getElementById('box2'));