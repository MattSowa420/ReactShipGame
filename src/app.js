import React from 'react';
import ReactDOM from 'react-dom';
import { TimerCanvas, MyClass } from './components.jsx';
import { QQEvents, QQListener } from './QQEvents';

ReactDOM.render(<MyClass name="Steve" />, document.getElementById('output'));
ReactDOM.render(<TimerCanvas />, document.getElementById('timer'));
ReactDOM.render(<TimerCanvas />, document.getElementById('timer2'));
ReactDOM.render(<TimerCanvas />, document.getElementById('box2'));

const events = new QQListener();
events.setListener( "keydown");
document.body.focus();