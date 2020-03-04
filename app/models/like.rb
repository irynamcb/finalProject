class Like < ApplicationRecord
    
belongs_to :likeable, polymorphic: :true

belongs_to :author,
primary_key: :id,
foreign_key: :author_id,
class_name: :User
end
