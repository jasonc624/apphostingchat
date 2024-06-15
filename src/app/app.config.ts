import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth, connectAuthEmulator } from '@angular/fire/auth';
import { provideFirestore, getFirestore, connectFirestoreEmulator } from '@angular/fire/firestore';
import { provideFunctions, getFunctions, connectFunctionsEmulator } from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { provideStorage, getStorage, connectStorageEmulator } from '@angular/fire/storage';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';
const firebaseConfig: any = {
  apiKey: "AIzaSyBfIKzE5tJhADPjcnCX6nPmF72PywpWQRo",
  authDomain: "firechatssr.firebaseapp.com",
  projectId: "firechatssr",
  storageBucket: "firechatssr.appspot.com",
  messagingSenderId: "956860917205",
  appId: "1:956860917205:web:b33920e4eac6226eb3895c"
};
export const appConfig: ApplicationConfig = {
  providers: [
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideFunctions(() => getFunctions()),
    provideStorage(() => getStorage()),
    provideMessaging(() => getMessaging()),
    provideRouter(routes), provideFirebaseApp(() => initializeApp({ "projectId": "firechatssr", "appId": "1:956860917205:web:0223fc06dab493dfb3895c", "storageBucket": "firechatssr.appspot.com", "apiKey": "AIzaSyBfIKzE5tJhADPjcnCX6nPmF72PywpWQRo", "authDomain": "firechatssr.firebaseapp.com", "messagingSenderId": "956860917205" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideFunctions(() => getFunctions()), provideMessaging(() => getMessaging()), provideFirebaseApp(() => initializeApp({"projectId":"firechatssr","appId":"1:956860917205:web:b33920e4eac6226eb3895c","storageBucket":"firechatssr.appspot.com","apiKey":"AIzaSyBfIKzE5tJhADPjcnCX6nPmF72PywpWQRo","authDomain":"firechatssr.firebaseapp.com","messagingSenderId":"956860917205"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideMessaging(() => getMessaging()), provideStorage(() => getStorage())
  ],
};
