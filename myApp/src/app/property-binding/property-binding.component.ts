import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-property-binding',
	templateUrl: './property-binding.component.html',
	styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

    allowNewMessage = false;
    messageCreationStatus = "No message was created.";

	constructor() {
        setTimeout(() => {
            this.allowNewMessage = true;
        }, 2000);
    }

	ngOnInit() {
	}

    onCreateMessage() {
        this.messageCreationStatus = "Message was created!";
    }

}
