class Invoice < ApplicationRecord
  belongs_to :customer
  belongs_to :user
  has_many :orderdups,dependent: :destroy
  # has_many :products,dependent: :destroy

  validates :invoice_num, presence: true, uniqueness: true
end
