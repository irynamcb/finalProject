class FriendRequest < ApplicationRecord

validates :user_id, :friend_id, presence: true
validate :not_self 
# :not_friends

belongs_to :user,
primary_key: :id,
foreign_key: :user_id,
class_name: :User

belongs_to :friend, 
primary_key: :id,
foreign_key: :friend_id,
class_name: :User

def not_self

 if user_id == friend_id
    errors[:friend_id] << "Cant add yourself to friends"
 end

end

def not_friends

  if  Friend.find_by(user_id: current_user.id, friend_id: friend_id)

    errors[:friend_id] << "This friendship already exists"
  end
end

end
