import { Component } from '@angular/core';
import { TitleComponent } from "../title/title.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [TitleComponent]
})
export class HeaderComponent {

    pageTitle = 'My app';

    constructor(){ }

    recividor(e: any) {
        console.log(e);
    }

}
