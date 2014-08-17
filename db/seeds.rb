# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Challenge.create(title:       'Crea tu propio robot siguelineas',
                 description: 'Monta un robot y enseñale a seguir una linea',
                 image_url:   'robot.png')

Challenge.create(title:       'Construye un cable de red RJ45',
                 description: 'Siguiendo el esquema deberás cortar y montar un cable de red para conectar tu ordenador a una red',
                 image_url:   'cable.png')
