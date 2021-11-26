class Customer < ApplicationRecord
  belongs_to :user
  has_many :orders       
  has_many :products, through: :orders, dependent: :destroy
end
