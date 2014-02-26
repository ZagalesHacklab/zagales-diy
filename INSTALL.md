zagales-diy
===========

[![Build Status](https://travis-ci.org/ZagalesHacklab/zagales-diy.png)](https://travis-ci.org/ZagalesHacklab/zagales-diy)

Para hacer funcionar debes tener instalado en tu máquina:

* [node](http://nodejs.org/)
* [ruby 2](https://www.ruby-lang.org/es/)

También usaremos [yeoman](http://yeoman.io/) y [compass-0.12.2](http://compass-style.org) (se te instalaran al resolver
las dependencias en los siguientes paso).

Despues de clonar el repositorio ejecuta (desde la carpeta del repositorio):

    npm install
    ./node_modules/.bin/bower install

Para ejecutar los test:

    ./node_modules/.bin/grunt test


####Instalación del entorno ruby:
#####Instalando Ruby con RbEnv:
> ######¿Que es rbenv?
> >Rbenv es un programilla mágico que te permite tener varias versiones de ruby instaladas a la vez en tu ordenador y usar la que mas convenga para cada proyecto.

> > [RbEnv](https://github.com/sstephenson/rbenv)

> > [Ruby-build](https://github.com/sstephenson/ruby-build)

> > Ruby-build es un ad-don para RbEnv que te permite descargar e instalar la versión de (ruby/jruby) que quieras, las instrucciones están en las pagina de cada una es hacer un par de git clones añadir el path de RbEnv al .bashrc, .profile, .bash_profile path de windows o cualquier path raruno que se tenga.

> > P.D.: Para Debian se ha de instalar los paquetes build-essential y libssl-dev(en Ubuntu quizás también)

> ######Comandos:

> > Para listar las versiones que hay para instalar: <code>rbenv install -l</code>

> > Para instalar una versión: <code>rbenv install version_ruby</code>

> > RbEnv maneja dos ámbitos de ruby, el global y el local, el global es el que usa el sistema por defecto y el local es especifico para el directorio donde se ejecuta el comando:

> > Para definir el ruby global: <code>rbenv global version_ruby</code>

> > Para definir el ruby local: <code>rbenv local version_ruby</code>

> > Para saber si ha funcionado podéis hacer: <code>ruby -v</code> en cualquier sitio donde no haya definida una versión local de ruby y os tendrá que devolver el global, para saber si hay una versión de ruby definida localmente podéis buscar en los archivos ocultos si existe el fichero .ruby-version si existe hay una versión local definida si no <code>ruby -v</code> os dara el ruby global del sistema.Y lo mismo si haceis un <code>ruby -v</code> en en un fichero con un .ruby-version os debería devolver la version que esta especificada en el. 

####Instalación de gemas de ruby:

#####Bundler:

Para "automatizar" la instalación de gemas y que todos tengamos las gemas que hacen falta para usar la aplicación en la misma versión podemos usar Bundler, Bundler es una gema en si misma que te ayuda a administrar tus gemas, las gemas y sus versiones se especifican en el archivo llamado Gemfile.Mas info de comandos e instalación en [Bundler](http://bundler.io/)

> ######Instalación:
> > <code> gem install bundler</code>

> > (Después de instalar nuevas gemas o nuevas versiones de ruby en rbenv hay que ejecutar el comando: <code>rbenv rehash</code>)
>######Comandos:
> > Para instalar todas las gemas del Gemfile <code>bundle install</code>

###Backend

Instalar dependencias y configurar DB

    $ cd backend
    $ bundle install
    $ rake db:create
    $ rake db:seed

Arrancar servidor

    $ shotgun

Ejecutar tests

    $ rake spec

###Frontend

Instalar dependencias

    $ cd frontend
    $ npm install
    $ bower install

Arrancar servidor

    $ grunt server

Ejecutar tests

    $ grunt test
    # o para relanzar tests vigilando cambios en ficheros:
    $ karma start
