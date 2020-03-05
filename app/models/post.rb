class Post < ApplicationRecord

validates :body, presence: true
validate :post_too_long

belongs_to :author,
primary_key: :id,
foreign_key: :author_id,
class_name: :User

belongs_to :wall,
primary_key: :id,
foreign_key: :parent_id,
class_name: :User

has_many :likes, as: :likeable  

has_many :likers,
through: :likes,
source: :author
# actual users who liked the post

has_many :comments,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: :Comment,
    dependent: :destroy

has_many :comment_authors,
through: :comments,
source: :author


def post_too_long
    if body.length > 150
      errors[:body] << "too long"
    end
end

end