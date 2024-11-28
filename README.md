## Reto Directo 

## Hay 3 formas de probar la aplicacion se explicaran a continuación

## 1.- Abre un cmd, bash o powershell clona el repositorio por http o ssh con el comando:

```bash
$ git clone <url del repositorio remoto de git>
```

## Una vez descargado debera navegar a la ruta del proyecto posteriormente instale las dependencias con el siguiente comando.

```bash
$ npm install
```

## Identifique el archivo .env template este archivo representa las variables de entorno que el sistema utiliza para poder funcionar, renombrelo a .env, actualmente y para fines de prueba ya estan configuradas estas variables.

## Compile and run the project

```bash
# input
$ npm run start input

# output
$ npm run start output

# En modo desarrollo
$ npm run start:dev input

# production mode
$ npm run start:dev output
```

## Al iniciar la aplicacion debera de aparecer un error al intentar conectar a la instancia de RabbitMQ para solucionar esto solamente se debera ejecutar el siguiente comando

```bash
docker run -d --name rabbitmq \
  -p 5672:5672 \
  -p 15672:15672 \
  rabbitmq:management
```
## Es posible que si la imagen no se a descargado previamente docker hara la descarga de dockerhub y puede tardar varios minutos, despues de esto intente recompilar la aplicacion y deberia de compilar correctamente

## Para observar la funcionalidad del aplicativo debe ejecutar una aplicacion como postman o insomnia y posteriormente crear una nueva peticion, seleccione post como peticion e ingrese el siguiente body en formato JSON.

```bash
{
    "num": 10
}
```

## Finalmente podra ver el resultado de este numero, por ejemplo.

```bash
{
    "paridad": "Par",
    "primalidad": "No es primo",
    "factorial": 3628800,
    "sumaEnteros": 55,
    "Factores": [
        1,
        2,
        5,
        10
    ],
    "Fibonacci": 55
}
```

## 2.- Descargar las imagenes directamente de DockerHub, sin embargo debera configurar una red, la red se configura para poder establecer la conexion de RabbitMQ con nuestros microservicios

## Ejecute los siguentes comandos en una linea de comandos como CMD

```bash
docker run -d --name rabbitmq \
  -p 5672:5672 \
  -p 15672:15672 \
  rabbitmq:management
```

```bash
docker run -dp 3000:3000 alexbkb0108/inputdirecto:first
```

```bash
docker run -d alexbkb0108/outputdirecto:first
```

## Este proceso puede tardar, debido a que docker descargara los contenedores desde DockerHub para posteriormente iniciarlos

## Configuracion de la red, se debe configurar una red para que los microservicios alcancen la conexion con RabbitMQ para este proceso debera revisar los ids asignados a los contenedores, ejecute el siguiente comando

```bash
docker container ls 
```

## Se mostraran los ids de los contenedores que inicio anteriormente, configure la red de la siguiente manera

```bash
docker network create directo 
```

## Este comando lo ejecutara con cada CONTAINER ID que le aparecio cuando ejecuto el comando docker container ls 

```bash
docker network connect directo <CONTAINER ID>
```

## Para observar la funcionalidad del aplicativo debe ejecutar una aplicacion como postman o insomnia y posteriormente crear una nueva peticion, seleccione post como peticion e ingrese el siguiente body en formato JSON.

```bash
{
    "num": 10
}
```

## Finalmente podra ver el resultado de este numero, por ejemplo.

```bash
{
    "paridad": "Par",
    "primalidad": "No es primo",
    "factorial": 3628800,
    "sumaEnteros": 55,
    "Factores": [
        1,
        2,
        5,
        10
    ],
    "Fibonacci": 55
}
```

## 3.- Archivo .yml

## Abre un cmd, bash o powershell clona el repositorio por http o ssh con el comando:

```bash
$ git clone <url del repositorio remoto de git>
```
## Navega a la carpeta donde se clono el proyecto y ejecuta el siguiente comando 

```bash
 docker compose up -d
```

## Para observar la funcionalidad del aplicativo debe ejecutar una aplicacion como postman o insomnia y posteriormente crear una nueva peticion, seleccione post como peticion e ingrese el siguiente body en formato JSON.

```bash
{
    "num": 10
}
```

## Finalmente podra ver el resultado de este numero, por ejemplo.

```bash
{
    "paridad": "Par",
    "primalidad": "No es primo",
    "factorial": 3628800,
    "sumaEnteros": 55,
    "Factores": [
        1,
        2,
        5,
        10
    ],
    "Fibonacci": 55
}
```
