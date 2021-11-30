class Order < ApplicationRecord
  belongs_to :customer, dependent: :destroy
  belongs_to :product, dependent: :destroy
end
