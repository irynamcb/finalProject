class Friend < ApplicationRecord

validates :user_id, :friend_id, presence: true

belongs_to :user,
primary_key: :id,
foreign_key: :user_id,
class_name: :User

belongs_to :other_friend,
primary_key: :id,
foreign_key: :friend_id,
class_name: :User

end
