  # This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
u1 = User.create(first_name: 'John', last_name: 'Smith', email: 'john_smith@gmail.com', gender: 'male', birthday: '01/01/1990', location: 'Seattle', education: 'UW', password: '1234567')
u2 = User.create(first_name: 'Jack', last_name: 'Jones', email: 'jack_jones@gmail.com', gender: 'male', birthday: '02/02/1991', location: 'New York', password: '1234567')
u3 = User.create(first_name: 'Jessica', last_name: 'Brown', email: 'jess_brown@gmail.com', gender: 'female', birthday: '03/03/1992', location: 'San Francisco', password: '1234567', education: 'WWU', about: 'Hey, it is Jessica!')
u4 = User.create(first_name: 'Erik', last_name: 'Elliott', email: 'erik_e@gmail.com', gender: 'male', birthday: '04/03/1992', location: 'San Francisco', password: '123456', education: 'University of California, Berkeley', about: 'I am Erik!')
u5 = User.create(first_name: 'Try', last_name: 'Khov', email: 'try@gmail.com', gender: 'male', birthday: '05/03/1992', location: 'San Francisco', password: '123456', education: 'App Academy', about: 'Heyyyyy!')
u6 = User.create(first_name: 'Sara', last_name: 'S', email: 'sara@gmail.com', gender: 'female', birthday: '05/03/1990', location: 'San Francisco', password: '123456', education: 'App Academy', about: ':*!')


Post.destroy_all
p1 = Post.create(author_id: u4.id, body: "Hey Sara! How are you?", parent_id: u6.id)
p2 = Post.create(author_id: u6.id, body: "I am doing good, how are you?", parent_id: u4.id)
p3 = Post.create(author_id: u5.id, body: "I am here!", parent_id: u5.id)
p4 = Post.create(author_id: u1.id, body: "Let's grab a beer soon!", parent_id: u4.id)
p5 = Post.create(author_id: u3.id, body: "Don't forget about homework!", parent_id: u4.id)

Like.destroy_all
l1 = Like.create(author_id: u6.id, likeable_id: p1.id, likeable_type: 'Post')
l2 = Like.create(author_id: u6.id, likeable_id: p2.id, likeable_type: 'Post')
l3 = Like.create(author_id: u6.id, likeable_id: p3.id, likeable_type: 'Post')
l4 = Like.create(author_id: u4.id, likeable_id: p4.id, likeable_type: 'Post')
l5 = Like.create(author_id: u4.id, likeable_id: p5.id, likeable_type: 'Post')