# Integrate Stripe with Angular

 Here's a guide covers how to integrate Stripe Checkout with an Angular application using Node.js APIs:
 
  Step 1: Backend Setup

    1. Obtain Stripe Keys

      Go to Stripe.com and copy your Publishable Key & Secret Key.

    2. Create a Product

      Ensure you have a product in your Stripe dashboard and copy its PriceId.

    3. Project Initialization

      In the project root folder, create a folder named api for the backend.
      Navigate to the api folder and initialize the project:
      
      npm init

    4. Install Required Packages

      Install the necessary packages:

      npm install stripe express cors --save

      Verify the installation in package.json.

    5. Project Structure

      stripe-api
      ├── config
      │   └── config.js
      ├── controllers
      │   └── stripe.controller.js
      ├── routes
      │   └── app.routes.js
      ├── services
      │   └── stripe.service.js
      ├── index.js
      └── package.json

    6. Config File (config/config.js)

    7. Stripe Service (services/stripe.service.js)

    8. Stripe Controller (controllers/stripe.controller.js)

    9. Routes (routes/app.routes.js)
    
    10. Server Setup (index.js)

    11. Use nodemon js to launch the backend; Test the backend via Postman by sending a POST request. In the body, the priceId information should be passed. You should get the id in the response.

  Step 2: Frontend Setup

    1. Project Initialization
    
      In the project root folder, create a folder named web for the frontend.
      Navigate to the web folder and start a new Angular project:
      
      ng new stripe-checkout
      
      Choose Yes when asked "Would you like to add Angular routing?" Packages should be successfully installed.

    2. Install Stripe Package
    
      Navigate to the stripe-checkout directory and install the Stripe.js package:
      
      npm install @stripe/stripe-js
      
      Add the Stripe.js script to the index.html file in the <head> section:

      <script src="https://js.stripe.com/v3" async></script>

    3. Environment Setup
    
      Create a new folder under src named environments.
      Add environment.prod.ts and environment.ts in the environments folder.

    4. Stripe Service (src/app/services/stripe.service.ts)

    5. Pages Setup

      Create a folder under src/app named pages.
      
      Navigate to the pages folder in the terminal:

      cd src/app/pages

      Generate new components:

      ng generate component payment-page
      ng generate component success-page

      Customize the HTML & CSS for these pages as desired.

    6. Modify Components

      Update payment-page.component.ts with necessary Stripe logic.

    7. Routing

      Modify app-routing.module.ts to include routes for the payment and success pages.

    8. Proxy Configuration

      Create a file named proxy.conf.json under web/stripe-checkout.

    8. Modify package.json

      Update the start script in package.json under web/stripe-checkout:

      "start": "ng serve --proxy-config proxy.conf.json"

    9. Prepare for Testing

      Remove any default code in app.component.html under src/app, keeping only <router-outlet>.

    10. Run Frontend

      In the terminal, run the frontend:

      npm start

      Open the browser and navigate to http://localhost:4200 to test the functionality.
