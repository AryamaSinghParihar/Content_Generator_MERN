# Content Generator MERN 

A comprehensive content generation tool built with the MERN stack (MongoDB, Express, React, Node.js) that allows users to generate and manage content efficiently. The application integrates with Stripe for payment processing and uses OpenAI's API for content generation.

## Features

- **User Authentication:** Secure login and registration using JWT and cookie-based authentication.
- **Content Generation:** Generate blog posts and other content using AI-powered tools.
- **Subscription Plans:** Multiple subscription plans with Stripe integration for handling payments.
- **Content History:** Keep track of previously generated content.
- **Responsive Design:** User-friendly interface accessible from any device.

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, Stripe API
- **Backend:** Node.js, Express, MongoDB, Stripe API
- **Authentication:** JWT, Cookie-based sessions
- **State Management:** React Query

## Installation

### Clone the Repository

```bash
git clone https://github.com/AryamaSinghParihar/Content_Generator_MERN.git
cd Content_Generator_MERN
```

## Frontend Setup
Navigate to the frontend directory:

```bash
cd frontend
```
Install dependencies:

```bash
npm install
```
Create a .env file in the frontend directory with the following variables:

```env

REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
```
Start the development server:

```bash
npm start
```
Backend Setup
Navigate to the backend directory:

```bash

cd backend
```
Install dependencies:

```bash

npm install
```
Create a .env file in the backend directory with the following variables:

```env

MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```
Start the backend server:

```bash
npm start
```
##Usage
- Navigate to the application URL (usually http://localhost:3000 for the frontend).
- Register or log in to the application.
- Choose a subscription plan and proceed to checkout.
- Generate content using the AI-powered tools available.
- View and manage your content history.
