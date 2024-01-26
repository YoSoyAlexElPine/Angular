import { createInjectableType } from '@angular/compiler';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  name = 'Jhon';
  surname = 'Doe';
  age = 33
  married = true
  address = {
    country: 'UK',
    city: 'Damascus',
    street: 'Liverty'
  }

  private dni = '623845273'
  public nacionality = 'Japanese'

  getDate(){
    return Date();
  }

}
