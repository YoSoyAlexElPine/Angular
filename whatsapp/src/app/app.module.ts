// app.module.ts
import { FirestoreModule } from '@angular/fire/firestore';
import { firebaseConfig } from '../environments/environment';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    FirestoreModule,
  ],
})
export class AppModule {}
