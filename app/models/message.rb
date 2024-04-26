# class Message
class Message < ApplicationRecord
  belongs_to :user
  validates :body, presence: true
  has_secure_password
end
