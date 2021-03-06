  # This file should contain all the record creation needed to  the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
u1 = User.create(first_name: 'John', last_name: 'Smith', email: 'john_smith@gmail.com', gender: 'male', birthday: '01/01/1990', location: 'Seattle', education: 'UW', password: '1234567')
u2 = User.create(first_name: 'Jack', last_name: 'Jones', email: 'jack_jones@gmail.com', gender: 'male', birthday: '02/02/1991', location: 'New York', password: '1234567')
u3 = User.create(first_name: 'Jessica', last_name: 'Smith', email: 'jess_brown@gmail.com', gender: 'female', birthday: '03/03/1992', location: 'San Francisco', password: '1234567', education: 'WWU', about: 'Hey, it is Jessica!')
u4 = User.create(first_name: 'Erik', last_name: 'Elliott', email: 'erik_e@gmail.com', gender: 'male', birthday: '04/03/1992', location: 'San Francisco', password: '123456', education: 'University of California, Berkeley', about: 'I am Erik!')
u5 = User.create(first_name: 'Chrisrtian', last_name: 'Johnson', email: 'try@gmail.com', gender: 'male', birthday: '05/03/1992', location: 'San Francisco', password: '123456', education: 'App Academy', about: 'Heyyyyy!')
u6 = User.create(first_name: 'Sara', last_name: 'S', email: 'sara@gmail.com', gender: 'female', birthday: '05/03/1990', location: 'San Francisco', password: '123456', education: 'App Academy', about: ':*!')
u7 = User.create(first_name: 'Brian', last_name: 'Collins', email: 'brian@gmail.com', gender: 'male', birthday: '06/03/1990', location: 'San Francisco', password: '123456', education: 'App Academy', about: ':*!')
u8 = User.create(first_name: 'Mary', last_name: 'Jackson', email: 'steven@gmail.com', gender: 'male', birthday: '05/03/1990', location: 'San Francisco', password: '123456', education: 'App Academy', about: ':*!')
u9 = User.create(first_name: 'Curtis', last_name: 'Jackson', email: 'hayden@gmail.com', gender: 'male', birthday: '05/03/1990', location: 'San Francisco', password: '123456', education: 'App Academy', about: ':*!')
u10 = User.create(first_name: 'Ilya', last_name: 'D', email: 'ilya@gmail.com', gender: 'male', birthday: '05/03/1990', location: 'San Francisco', password: '123456', education: 'App Academy', about: ':*!')
u11 = User.create(first_name: 'Tarik', last_name: 'G', email: 'tarik@gmail.com', gender: 'male', birthday: '05/03/1990', location: 'San Francisco', password: '123456', education: 'App Academy', about: ':*!')
u12 = User.create(first_name: 'Iryna', last_name: 'McBride', email: 'iryna@gmail.com', gender: 'female', birthday: '12/05/1990', location: 'San Francisco', password: '123456', education: 'App Academy', about: ':*!')
u13 = User.create(first_name: 'Kate', last_name: 'Marshall', email: 'kate@gmail.com', gender: 'female', birthday: '12/06/1989', location: 'New York', password: '123456', education: 'App Academy', about: ':*!')
u14 = User.create(first_name: 'Kiari', last_name: 'Cephus', email: 'kiari@gmail.com', gender: 'male', birthday: '01/05/1990', location: 'Atlanta', password: '123456', education: 'App Academy', about: ':*!')
u15 = User.create(first_name: 'Future', last_name: 'Hendrix', email: 'future@gmail.com', gender: 'male', birthday: '03/05/1992', location: 'Atlanta', password: '123456', education: 'App Academy', about: ':*!')




Post.destroy_all
p1 = Post.create(author_id: u4.id, body: "Hey Sara! How are you?", parent_id: u6.id)
p2 = Post.create(author_id: u6.id, body: "I am doing good, how are you?", parent_id: u4.id)
p3 = Post.create(author_id: u5.id, body: "I am here!", parent_id: u5.id)
p4 = Post.create(author_id: u1.id, body: "Let's grab a beer soon!", parent_id: u4.id)
p5 = Post.create(author_id: u3.id, body: "Don't forget about homework!", parent_id: u4.id)
p6 = Post.create(author_id: u12.id, body: "Erik!", parent_id: u4.id)
p7 = Post.create(author_id: u10.id, body: "I want to be a team lead!", parent_id: u9.id)
p8 = Post.create(author_id: u7.id, body: "I miss you...", parent_id: u12.id)
p9 = Post.create(author_id: u12.id, body: "See ya soon back in Seattle", parent_id: u7.id)
p10 = Post.create(author_id: u12.id, body: "Bff goals!", parent_id: u7.id)
p11 = Post.create(author_id: u5.id, body: ".....", parent_id: u4.id)

Comment.destroy_all
c1 = Comment.create(author_id: u4.id, body: 'Yay!', post_id: p9.id)
c2 = Comment.create(author_id: u1.id, body: ':)', post_id: p9.id)
c3 = Comment.create(author_id: u2.id, body: '...', post_id: p9.id)
c4 = Comment.create(author_id: u5.id, body: 'Zzzz', post_id: p9.id)
c5 = Comment.create(author_id: u7.id, body: 'For sure', post_id: p9.id)

Like.destroy_all
l1 = Like.create(author_id: u6.id, likeable_id: p1.id, likeable_type: 'Post')
l2 = Like.create(author_id: u6.id, likeable_id: p2.id, likeable_type: 'Post')
l3 = Like.create(author_id: u6.id, likeable_id: p3.id, likeable_type: 'Post')
l4 = Like.create(author_id: u4.id, likeable_id: p4.id, likeable_type: 'Post')
l5 = Like.create(author_id: u4.id, likeable_id: p5.id, likeable_type: 'Post')
l6 = Like.create(author_id: u12.id, likeable_id: p5.id, likeable_type: 'Post')
l7 = Like.create(author_id: u11.id, likeable_id: p5.id, likeable_type: 'Post')
l8 = Like.create(author_id: u10.id, likeable_id: p5.id, likeable_type: 'Post')
l9 = Like.create(author_id: u9.id, likeable_id: p1.id, likeable_type: 'Post')
l10 = Like.create(author_id: u8.id, likeable_id: p1.id, likeable_type: 'Post')
l11 = Like.create(author_id: u7.id, likeable_id: p2.id, likeable_type: 'Post')


FriendRequest.destroy_all
r1 = FriendRequest.create(user_id: u13.id, friend_id: u7.id)
r2 = FriendRequest.create(user_id: u14.id, friend_id: u7.id)
r3 = FriendRequest.create(user_id: u15.id, friend_id: u7.id)


Friend.destroy_all
f1 = Friend.create(user_id: u7.id, friend_id: u12.id)
f2 = Friend.create(user_id: u12.id, friend_id: u7.id)
f3 = Friend.create(user_id: u7.id, friend_id: u1.id)
f4 = Friend.create(user_id: u1.id, friend_id: u7.id)
f5 = Friend.create(user_id: u7.id, friend_id: u2.id)
f6 = Friend.create(user_id: u2.id, friend_id: u7.id)
f7 = Friend.create(user_id: u7.id, friend_id: u10.id)
f8 = Friend.create(user_id: u10.id, friend_id: u7.id)