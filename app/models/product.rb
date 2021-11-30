class Product < ApplicationRecord
  belongs_to :category
  has_many :orders, dependent: :destroy
  has_many :customers, through: :orders, dependent: :destroy
end
