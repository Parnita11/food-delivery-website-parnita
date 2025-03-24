# Tomato - Full Stack Food Delivery Website

## 📌 Overview
This is a full-stack web application for a food delivery service that allows users to browse restaurants, order food, and track deliveries in real time.

## 🚀 Features
- User authentication (Login/Register)
- Browse restaurants and menus
- Add items to cart and place orders
- Real-time order tracking
- Admin panel for restaurant owners
- Payment gateway integration
- Responsive design

## 🛠️ Tech Stack
### Frontend:
- React.js

### Backend:
- Node.js
- Express.js
- MongoDB
- WebSockets for real-time updates

### Other Integrations:
- Stripe for payments
- JWT for authentication
- Map APIs for delivery tracking

## 🏗️ Installation
### Clone the repository
```bash
git clone https://github.com/diya-burman/food-delivery-website.git
cd food-delivery-app
```
## Install dependencies
### Frontend:
```
cd frontend
npm install
npm run dev
```
## Backend:
### cd backend
```
npm install
npm run server
```
## Admin Panel:
```
cd admin
npm install
npm run dev
```

## Usage
- Sign up or log in as a user or restaurant owner.
- Browse restaurants and add items to your cart.
- Place an order and make a payment.
- Track the order in real time.
- Admins can manage restaurants, menus, and orders.

## API Endpoints
### API Endpoints
| Method | Endpoint | Description |
|--------|---------|-------------|
| GET    | `/api/restaurants` | Fetch all restaurants |
| GET    | `/api/menu/:restaurantId` | Fetch menu of a restaurant |
| POST   | `/api/order` | Place an order |
| GET    | `/api/order/:id` | Track order status |


## Deployment
- Frontend: Vercel / Netlify
- Backend: Render / AWS / Heroku
- Database: MongoDB Atlas

### Security Measures
- JWT Authentication
- Data validation with Joi / Zod
- Secure payments with Stripe

## Contributing
- Fork the repository.
- Create a feature branch.
- Commit your changes.
- Push to the branch.
- Submit a pull request.

## License
This project is licensed under the MIT License.

## Contact
For any queries, contact: diyaburman60@gmail.com
