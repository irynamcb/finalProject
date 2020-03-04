# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
User.create(first_name: 'John', last_name: 'Smith', email: 'john_smith@gmail.com', gender: 'male', birthday: '01/01/1990', location: 'Seattle', education: 'UW', password: '1234567')
User.create(first_name: 'Jack', last_name: 'Jones', email: 'jack_jones@gmail.com', gender: 'male', birthday: '02/02/1991', location: 'New York', password: '1234567')
User.create(first_name: 'Jessica', last_name: 'Brown', email: 'jess_brown@gmail.com', gender: 'female', birthday: '03/03/1992', location: 'San Francisco', password: '1234567', education: 'WWU', about: 'Hey, it is Jessica!')