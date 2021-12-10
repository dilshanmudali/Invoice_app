class UserSerializer < ActiveModel::Serializer
  attributes :id, :organization_name, :username, :email
  has_many :categories
  has_many :products, through: :categories
  has_many :customers
  has_many :orders, through: :customers
  has_many :orderdups, through: :customers
  has_many :invoices
  # has_many :invoices,through: :customers
end
