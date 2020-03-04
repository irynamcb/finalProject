class Comment < ApplicationRecord

validates :body, presence: true
validate :comment_too_long

belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

belongs_to :post,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: :Post   

has_many :likes, as: :likeable     

def comment_too_long
    if body.length > 140
      errors[:body] << "too long"
    end
end

end
