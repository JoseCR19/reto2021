# Reto 2021

## Tabla de Contenido
1. Información general
2. Tecnologías
3. Instalación
4. Apis
5. Despliegue
6. Pruebas Unitarias


## Información general
***
Este reto trata de consumir Apis de SWAPI y poder guardarla en la base de datos dynamodb, el cual permite listar toda la información, listar por un id y crear.

## Tecnología
***
Lista de tecnologías utilizadas dentro del proyecto
* [Node.js] (https://nodejs.org/es/): Versión 12.18.3
* [DynamoDb] (https://console.aws.amazon.com/dynamodbv2/home?region=us-east-1#service)
* [AWS] (https://aws.amazon.com/)
* [Lambda]
* [Serverless]

## Instalación
A continuación detallamos el proceso de instalación
***
```
$ git clone https://github.com/JoseCR19/reto2021.git
$ cd reto2021
$ npm install aws-sdk axios uuid serverless-offline serverless-bundle
```
## Apis
Las apis desarrollas se encuentran en el collection con todo los parametros necesarios para ser invocados a los cuales tendremos acceso al descargar el proyecto.

### Persona-controller
- https://8m9povruhi.execute-api.us-east-1.amazonaws.com/api/reto/personas
    - Realiza la busqueda de todos los elementos guardados en la base de datos.
    - Method : GET
- https://8m9povruhi.execute-api.us-east-1.amazonaws.com/api/reto/people/{id}
    - Realiza la busqueda por el id del registro.
    - Method: GET
- https://8m9povruhi.execute-api.us-east-1.amazonaws.com/api/reto/personas
    - Realiza el registro a la base de datos, mas detalle en el collection
    - Method: POST
### Pelicula-controller
- https://8m9povruhi.execute-api.us-east-1.amazonaws.com/api/reto/peliculas
    - Realiza la busqueda de todos los elementos guardados en la base de datos.
    - Method: GET
- https://8m9povruhi.execute-api.us-east-1.amazonaws.com/api/reto/films/{id}
    - Realiza la busqueda por el id del registro.
    - Method: GET
- https://8m9povruhi.execute-api.us-east-1.amazonaws.com/api/reto/peliculas
    - Realiza el registro a la base de datos, mas detalle en el collection
    - Method: POST
## Despliegue
El despliegue se realizará en AWS 
***
```
$ sls deploy --verbose
-se creará un zip y subira la configuracipon que hemos colocado en nuestro yml.
```
## Peuabas
- Para correr las pruebas unitarias utilizaremos el siguiente comando.
$ npm run test
