# [STOREINVO](https://store-invo-app.herokuapp.com/)  


Live demo for this application can be found at https://store-invo-app.herokuapp.com/

<small><i><a>Table of contents</a></i></small>
- [Getting Started](#getting-started)
      - [install following dependencies](#install-following-dependencies)
- [Features](#features)
- [Technologies](#technologies)
    + [Front-End](#front-end)
    + [Back-End](#back-end)



###An application made for store owners to keep track of inventory and create invoices for customers. 

![Invo1](https://user-images.githubusercontent.com/35578002/146253669-a05cdafa-d828-4fac-b565-1d53d3c74182.gif)

![Invo2](https://user-images.githubusercontent.com/35578002/146253681-e0623fa6-eca1-4dab-a6e5-efa094e8732d.gif)

## Features

- Add/Remove Categories
- Add/Remove/Edit Products/price/quantity
- Add/Remove/Edit Customers and customer information
- Create an transaction for a customer in invoice page
- A customer invoice can hold many goods and can be finalized or canceled
- Store owner can print a receipt for the customer in transactions page
- Store owner can search for receipts by date or customer information
- Revenue/Products left and orders will be updated in the home page


## Technologies

#### Front-End

- React

#### Back-End

- Ruby on Rails
- PostgreSQL

## Getting Started
 
1. Clone the repo

 `git@github.com:dilshanmudali/Invoice_app.git`

2. Set up Client

 ##### install following dependencies
 `npm install --prefix client`
 
- please visit the docs for these packages incase they are outdated
    "date-fns": "^2.27.0",
    "react-calendar": "^3.5.0",
    "react-chartjs-2": "^4.0.0",
    "react-countup": "^6.1.0"
    
3. Set up Server

 Make sure to install the latest versions of bundler and rails 
 
 `gem install bundler`
 `gem install rails`

 `bundle install`
 `rails db:create`
 `rails db:migrate db:seed`
 
4. Start application

 `rails s` - start server
 `npm start --prefix client` - start client
 
 Application is set to start at localhost:3000
 



  
