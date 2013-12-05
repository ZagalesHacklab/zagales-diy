# Desarrollando y testeando Zagales-diy #
Este documento describe las reglas que seguimos a la hora de programar

### ¿Tienes una pregunta o problema referente a nuestra app? ###

Si es una pregunta genérica (que no tiene que ver exactamente con la aplicación) puedes contactar con nosotros a través
de nuestro [grupo de Google+](https://plus.google.com/u/1/communities/111659385236519213596)

Para temas técnicos [abre un ticket](https://github.com/ZagalesHacklab/zagales-diy/issues)

### ¿Encontraste un bug ? ###

Si has encontrado un bug [visita nuestro sistema de tickets](https://github.com/ZagalesHacklab/zagales-diy/issues)

Consulta primero el listado de bugs abiertos, no vaya a ser que ya esté reportado y estemos trabajando en ello.

Si no hay ticket todavía crea uno nuevo.

Cuantos más detalles nos des para que podamos reproducirlo más fácil nos resultará solucionarlo.

### ¿Quieres proponernos una mejora? ###

[Abre un ticket](https://github.com/ZagalesHacklab/zagales-diy/issues) explicandola, la evaluaremos y si convence
al equipo la incluiremos en los próximos sprint

### ¿Quieres aportar código? ###

Sigue leyendo ;)

### ¿Se te ocurre otra forma de colaborar con nosotros? ###

Cuentanosla en nuestro grupo de Google+ o vente a una de nuestras quedadas ;)

## Instalación del entorno de desarrollo ##

En el fichero [INSTALL.md](https://github.com/ZagalesHacklab/zagales-diy/INSTALL.md) tienes las instrucciones para
instalarte el entorno de desarrollo

## Código con estilo ##

Trata de hacer codigo limpio, del bonito, del que te sientas orgullos@ (Clean Code y Head First Desing Patterns deberían ser tus libros de cabecera)

* Hacemos TDD, es decir **Todas las features o arreglos de bugs deben estar cubiertos por uno más tests**
* Para el Javascript seguiremos las [reglas de estilo de Google](https://travis-ci.org/ZagalesHacklab/zagales-diy)
* Vamos a programar en **inglés**. Tanto el código como los mensajes en los commits.
* Para las directivas de angular usaremos el prefijo "zg-" (ej: <zg-photo>...</zg-photo>)

Nota: Muchas de estas reglas se comprueban automáticamente con jshint... ejecuta siempre 'grunt jshint' antes de hacer un commit

## Revisiones de código ##

Tan importante como programar es revisar el código de los demás, cuando lo hagas se constructivo en tus comentarios.

Revisa periodicamente si hay pull request pendientes de procesar, (recuerda que estas peticiones deben ser integradas
por un programador distinto al que las haya solicitado).

Antes de mergear:

* Revisa que el código hace lo que se supone que tiene que hacer
* Que no se rompen tests
* Que se siguen las reglas de estilo
* Que la rama master quedará lista para subir a producción si nuestra PO lo requiere ;)

## Manejo del repositorio ##

- No hacemos commits directamente en la rama principal. Trabajamos las tareas en ramas, y en la rama **master** sólo se commitea cuando la tarea está finalizada y funcionando.
- Las Cards del panel Trello con el Product Backlog entran a los sprints con un prefijo: **us** seguido de un número (indica el *orden/prioridad*) para las historias de usuario, misc para otras tareas.
- Usamos los *prefijos de las Cards en los commits* para identificarlos.
- Cuando hagas un pull request, alguien debe revisarlo antes de mergear en la rama principal
- Cuando hay un merge de una rama con la rama principal, quienes estén trabajando en otras ramas deberían hacer un Rebase.