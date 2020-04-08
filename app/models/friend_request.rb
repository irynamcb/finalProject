class FriendRequest < ApplicationRecord

validates :user_id, :friend_id, presence: true

belongs_to :user,
primary_key: :id,
foreign_key: :user_id,
class_name: :User

belongs_to :friend, 
primary_key: :id,
foreign_key: :friend_id,
class_name: :User


private

# def not_self
#   errors.add(:friend, "can't be equal to user") if user == friend
# end

end
