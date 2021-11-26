class UserSerializer < ActiveModel::Serializer
  attributes :id, :organization_name, :username, :email
  # has_many :categories
  # has_many :customers
end
