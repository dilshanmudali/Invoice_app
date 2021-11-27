class CategorySerializer < ActiveModel::Serializer
  attributes :id, :category_name, :user_id
  has_one :user
  has_many :products
end
