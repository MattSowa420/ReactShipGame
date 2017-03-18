import React from 'react';
import ReactDOM from 'react-dom';
import { TimerCanvas, MyClass } from './components.jsx';
import { QQEvents, QQListener } from './QQEvents';

ReactDOM.render(<MyClass name="Steve" />, document.getElementById('output'));
ReactDOM.render(<TimerCanvas />, document.getElementById('canvas1'));
ReactDOM.render(<TimerCanvas />, document.getElementById('canvas2'));
ReactDOM.render(<TimerCanvas />, document.getElementById('canvas3'));

const events = new QQListener();
events.setListener( "keydown");
document.body.focus();
