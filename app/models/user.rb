class User < ApplicationRecord


attr_reader :password

  validates :first_name, :last_name, :email, :birthday, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :gender, inclusion: {in: ['female', 'male', 'custom']}, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }

has_many :posts,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :Post,
  dependent: :destroy

has_many :wall_users,
  through: :posts,
  source: :wall

has_many :posts_on_wall,
  primary_key: :id,
  foreign_key: :parent_id,
  class_name: :Post

has_many :posts_on_wall_authors,
  through: :posts_on_wall,
  source: :author

has_many :comments,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :Comment


has_many :likes,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :Like

has_many :liked_comments,
  through: :likes,
  source: :likeable,
  source_type: 'Comment'
  # actual liked comments

has_many :liked_posts,
  through: :likes,
  source: :likeable,
  source_type: 'Post'
  # actual liked posts

has_many :post_comment_authors,
through: :posts,
source: :comment_authors


after_initialize :ensure_session_token


  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    self.session_token
  end

  private

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end

end
