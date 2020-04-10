class Friend < ApplicationRecord

validates :user_id, :friend_id, presence: true
validate :add_self

belongs_to :user,
primary_key: :id,
foreign_key: :user_id,
class_name: :User

belongs_to :other_friend,
primary_key: :id,
foreign_key: :friend_id,
class_name: :User

end


def add_self 

if user_id == friend_id
    errors[:user_id] << "Cant add yourself to friends"
end
end