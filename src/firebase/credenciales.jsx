// Importamos la función para inicializar la aplicación de Firebase
import { initializeApp } from "firebase/app";

// Añade aquí tus credenciales
const firebaseConfig = {
  apiKey: "AIzaSyDDdnUxxoRoIBihLK2j-GG16xTHoMgLUbE",
  authDomain: "login-287ad.firebaseapp.com",
  projectId: "login-287ad",
  storageBucket: "login-287ad.appspot.com",
  messagingSenderId: "317300771326",
  appId: "1:317300771326:web:960ba80763c51198a198af"
};

// Inicializamos la aplicación y la guardamos en firebaseApp
const firebaseApp = initializeApp(firebaseConfig);
// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicación
export default firebaseApp;

