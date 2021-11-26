# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Category.destroy_all
Product.destroy_all
Customer.destroy_all

user2 = User.create(organization_name: 'CDCompany', username:'User2', email: 'user1@email.com', password: '123')

category1 = Category.create(category_name: 'Category1', user_id: 1)

product1 = Product.create(product_name:'p1', product_description: 'p1 is an awesome product', product_price: 3.99, product_quantity: 2, category_id: 1)

customer1 = Customer.create(customer_name: 'customer1', customer_contact: '123-345-123', customer_address: '123 way south somewhere, Earth')

