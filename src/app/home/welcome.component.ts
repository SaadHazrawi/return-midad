import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'welcome-midad',
    templateUrl: "./welcome.component.html"
})

export class WelcomeComponent implements OnInit {
    pagetitle:string="Welcom My Friend"
    constructor() { }

    ngOnInit() { }
}