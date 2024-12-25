# 1. DATABASE DESIGN FOR IKEAR PROJECT

- [1. DATABASE DESIGN FOR IKEAR PROJECT](#1-database-design-for-ikear-project)
  - [1.1. Product Catalog Service](#11-product-catalog-service)
  - [1.2. Inventory Management](#12-inventory-management)
  - [1.3. Cart management, Favorite List and Review Management](#13-cart-management-favorite-list-and-review-management)
  - [1.4. Order Management - Payment Processing](#14-order-management---payment-processing)
  - [1.5. Delivery and Logistics](#15-delivery-and-logistics)
  - [1.6. Customer Authentication, User management and Store management](#16-customer-authentication-user-management-and-store-management)

## 1.1. Product Catalog Service

- Manages product listings, descriptions, and categories.

![Image](./images/ikear-service-2.png)

- Details:

```text
Table items {
  id ObjectId
  name String
  description String
  short_description String
  price Number
  color String
  size String
  image Array
}


Table products {
  id ObjectId
  name String
  image String
}

Table rooms {
  id ObjectId
  name String
  image String

}

Table ItemOfRoom {
  id ObjectId
  room ObjectId [ref: - rooms.id]
  item ObjectId [ref: < items.id]
}


Table ItemOfProduct {
  id ObjectId
  product ObjectId [ref: - products.id]
  item ObjectId [ref: < items.id]
}

Table holiday {
  id ObjectId
  name String
}

Table HolidayToItem {
  id objectId
  item ObjectId [ref: < items.id]
  holiday ObjectId [ref: - holiday.id]
}
```

## 1.2. Inventory Management

- Tracks stock levels and updates availability across stores and online.

![Image](./images/ikear-service-3.png)

- Details:

```text
Table store {
  id ObjectId
  name String
  address String
  city String
  country String
  phone Array
}

Table items {
  id ObjectId
  name String
  description String
  short_description String
  price Number
  color String
  size String
}

Table StoreToItem {
  id ObjectId
  item ObjectId [ref: > items.id]
  store ObjectId [ref: > store.id]
  quantity Number
}
```

## 1.3. Cart management, Favorite List and Review Management

- Handling customer cart and favorite list
- Handling review of customer about items

![Image](./images/ikear-service-4.png)

- Details:

```text
Table user {
  id ObjectId
  username String
  phone String
  email String
  country String
  city String
  address String
}

Table items {
  id ObjectId
  name String
  description String
  short_description String
  price Number
  color String
  size String
}

Table cart {
  id ObjectId
  user ObjectId [ref: - user.id]
  total_quantity Number
  total_item Number
}

Table cartToItem {
  id ObjectId
  cart ObjectId [ref: > cart.id]
  item ObjectId [ref: - items.id]
  quantity Number
}

Table fav {
  id ObjectId
  user ObjectId [ref: - user.id]
  items Array [ref: < items.id]
}

Table review {
  id ObjectId
  user ObjectId [ref: - user.id]
  item ObjectId [ref: - items.id]
  rating Number
  comment String
}
```

## 1.4. Order Management - Payment Processing

- Handles customer orders, updates, and tracking.
- Handles secure payments, refunds, and invoicing

![image](./images/ikear-service-5.png)

- Details:

```text
Table orders {
  id ObjectId
  user ObjectId
  status String
  date Date
  total_amount Number
  total_items Number
}

Table OrderItems{
  id ObjectId
  item OjectId
  order ObjectId [ref: > orders.id]
  quantity Number
  price Number
}

Table payments {
  id ObjectId
  order ObjectId [ref: - orders.id]
  status String
  amount Number
  date Date
}
```

## 1.5. Delivery and Logistics

- Manages shipping, delivery schedules, and tracking.

## 1.6. Customer Authentication, User management and Store management

- Manages user logins, profiles, and roles.
- Manages store information

![Image](./images/ikear-service-1.png)

- Details:

```text
Table user {
  id ObjectId
  username String
  phone String
  email String
  password Hashed
  country String
  city String
  address String
  store ObjectId [ref: > store.id]
}

Table admin {
  id ObjectId
  admin String
  email String
  password Hashed
}

Table employee {
  id ObjectId
  store ObjectId [ref: > store.id]
  name String
  phone String
  email String
  password String
  role String
}

Table token {
  id ObjectId
  refresh_token String
  last_login Date
}

Table sessions {
  id ObjectId
  sessions String
}

Table store {
  id ObjectId
  name String
  description String
  address String
  city String
  country String
  phone Array
  week_day_open String
  week_day_close String
  weekend_open String
  weekend_close String
  longitude String
  latitude String
}

Table secret {
  id ObjectId
  value string
}
```
