class CategorySerializer < ActiveModel::Serializer
  attributes :id, :category_name
  has_one :user
  has_many :products
end
