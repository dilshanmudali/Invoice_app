class User < ApplicationRecord
    has_many :categories, dependent: :destroy
    has_many :products, through: :categories, dependent: :destroy
    has_many :customers, dependent: :destroy
    has_many :orders, through: :customers
    has_many :orderdups, through: :customers
    has_many :invoices, through: :customers
    has_secure_password
   
end
