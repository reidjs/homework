class User < ApplicationRecord
  attr_reader :password
  validates :username, :session_token, presence: true
  validates :password_digest, presence: { message: "fail" }
  validates :password, length: {minimum: 6, allow_nil: true}
  before_validation :ensure_session_token


  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    db_pass = BCrypt::Password.new(user.password_digest)
    if db_pass.is_password?(password)
      return user
    end
  end

  def ensure_session_token
    self.session_token = User.generate_session_token
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password).to_s
  end
end
