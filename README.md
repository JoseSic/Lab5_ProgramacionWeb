# Back End - Proyecto Final Progrmación Web

_El presente proyecto es un desarrollo realizado en el curso "Programación Web" de la Universidad Rafael Landivar, que tiene como objetivo proveer los recursos solicitados de una aplicación mediante los verbos GET, POST, DELETE, y PUT. El presente proyecto tiene como tematica principal ser un servidor para aplicaciones tipo Instagram, donde prodrán crear, editar y eliminar post con fotos._

## Comenzando 🚀

_Es importante cumplir con los siguientes pasos para poder tener en funcionamiento localmente el presente proyecto_



### Pre-requisitos 📋

#### Editor de texto
_Primeramente debes tener un editor de texto como lo es Atom, Notepad++, Sublime Text, entre otros; se recomienda el uso de Visual Studio Code debido a las funcionalidades que este posee._
* [VSC](https://code.visualstudio.com/) - Visual Studio Code

#### Node.Js
* Para verificar su versión de Node.js ejecute node -v en una ventana terminal/consola 
* Para descargar Node.js, dirijase a https://nodejs.org/es/.

#### Mongo
_Debes de tener una conexión a Mongo debido a que para el presente proyecto se implementa dicha base de datos_
#### Redis
_Debes de tener istalado redis ya que en el presente proyecto se usa con fines de memoria caché_
### Instalación 🔧

_Crea una copia local del presente proyecto_

_Debes de crear un conexión con Mongo y debes tener una base de datos llamada Imagen y una Colección llamada Imagen. En la Carpeta CRUD archivo CRUDMONGO se encuentra el siguiente código donde deberas realizar la conexión con MONGO DB_

```
MongoClient.connect("mongodb://localhost:27017", { useNewUrlParser: true })
.then(client => {
    db = client.db('Imagen');
    collection = db.collection('Imagen');
}).catch(error => console.error(error));
```

_De igual forma debes de realizar una conexión con REDIS. En la carpeta routes, archivo Proyecto.js encontrará la siguiente linea de código donde podrás crear una conexión de redis_

```
var client = redis.createClient();
```
_En la consola del editor que se utilizando se debe ingresar a la carpeta PROYECTOWEB y ejecutar el siguiente comando, para instalar todas las dependencias del proyecto._
```
$ npm install
```

### Ejecutar Aplicación
_Ejecute el comando npm start en la cosola. Navegue hacia http://localhost:3000/. El API estará corriendo en esa direccion url._


## Autores ✒️

* **José Sic** - *1121114*



