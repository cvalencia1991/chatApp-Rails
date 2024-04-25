# class User
class User < ApplicationRecord
  has_one :messages
  validates :username, uniqueness: { case_sensitive: false }, presence: true, length: { minimum: 3, maximum: 15 }
end
