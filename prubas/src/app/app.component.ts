import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserCardComponent } from "./user-card/user-card.component";
import { ProductCardComponent } from "./product-card/product-card.component";
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeaderComponent, UserCardComponent, ProductCardComponent,FormsModule]
})
export class AppComponent {
  title = 'prubas';
}
