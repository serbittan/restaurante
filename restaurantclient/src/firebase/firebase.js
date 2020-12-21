import app from 'firebase/app' // importar app de firebase.

// agregar firestore
import 'firebase/firestore'
import 'firebase/storage'

import firebaseConfig from './config' // nuestro archivo.



class Firebase {
    constructor() {
        if (!app.apps.length) {
            app.initializeApp(firebaseConfig)

        }

        // db es el nombre que asignamos a la bd de firebase. Así tenemos habilitado firestore que es la bd en tiempo real de firebase.
        this.db = app.firestore()

        // habilitamos el storage para poder subir imágenes.
        this.storage = app.storage()
    }
}

// una vez instanciado se le pasa el config gracias al constructor.
const firebase = new Firebase() 

export default firebase



// INFO:

// A veces la consola puede marcar un error haciendo referencia a firebase. En el caso que lo haga
// parece que el error quedaría solucionado con el siguiente código.

// dentro del constructor añadimos una condición :

//     if (!app.apps.length) { 
//        app.initializeApp(firebaseConfig)
//       }

// y lo dejariamos tal cual. 