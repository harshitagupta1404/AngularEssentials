import {Component} from '@angular/core';

@Component({
    selector:'app-user',
// property binding and listening to input
    // template:`
    // <input type='text' (input)="onUserInput($event)" [value]="name">
    // <p>Hi {{name}}</p>
    // `

// 2 way binding on elements having value property
    template:`
    <input type='text' [(ngModel)]="name">
    <p>Hi {{name}}</p>
    `
})
export class UserComponent{
    name='Harshita'

    onUserInput(event:any){
        console.log(event);
        this.name=event.target.value;
    }
}