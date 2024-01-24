import { Component, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import User from './interfaces/user.interface';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


@Injectable ({
  providedIn: 'root'
})

export class UsuarioListaComponent {
  
  constructor(private firestore: Firestore) { }

  addUser(user: User){
      const userRef = collection(this.firestore, 'Usuarios');
      return addDoc(userRef, user)
  }

}
