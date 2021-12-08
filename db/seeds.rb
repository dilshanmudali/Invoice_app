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

user1 = User.create(organization_name: 'Amazon2.0', username:'Dilshan', email: 'Dilshan@email.com', password: '123password')

category1 = Category.create(category_name: 'Beverages', user_id: 1)

product1 = Product.create(product_name:'Nuka cola', product_description: 'Most popular soda never made', product_price: 1.58, product_quantity: 50, category_id: 1)

customer1 = Customer.create(customer_name: 'Dilshan', customer_contact: '794-124-1212', customer_email: 'dilshan@gmail.com', customer_address: '14132 Air and Space, Museaum pkway, somewhere, AB 2015 United States')


category2 = Category.create(category_name: 'Snacks', user_id: 1)

product2 = Product.create(product_name:'Potato chips', product_description: 'Its just potato chips', product_price: 2.99, product_quantity: 70, category_id: 2)

customer2 = Customer.create(customer_name: 'Quang', customer_contact: '725-134-1242', customer_email: 'quang@email.com', customer_address: '1234 Somewhere, Houston, TX United States')