class Friend < ApplicationRecord

validates :user_id, :friend_id, presence: true

belongs_to :user,
primary_key: :id,
foreign_key: :user_id,
class_name: :User


# def not_self
#   errors.add(:friend, "can't be equal to user") if user == friend
# end

# def not_friends
#   errors.add(:friend, 'is already added') if user.friends.include?(friend)
# end

# def not_pending
#   errors.add(:friend, 'already requested friendship') if friend.pending_friends.include?(user)
# end

end
