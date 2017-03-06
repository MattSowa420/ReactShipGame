import React from 'react';

export class QQEvents {

}

export class QQListener {
	constructor() {
		this.bodyElement= document.body;
	}
	setListener(event, element= document, handleEv= (event) => { console.log(event) } ) {
		element.addEventListener( event, handleEv);
	}
}