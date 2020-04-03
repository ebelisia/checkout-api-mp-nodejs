# Checkout API + Checkout Mercado Pago Node.js

This is an example of Mercado Pago integration API +  Checkout Mercado Pago - Node.js

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

```
* Node.js 
* Server Localhost
```

### Installing

Clone the project:

```
$ git clone https://github.com/ebelisia/checkout-api-wallet-button-nodejs
```

### Configurations

Step 1. 

Set your access_token in a .env file. Example:

```
ACCESS_TOKEN=TEST-2318480319735397-071217-715101e600b5c3f0043c10bd714cb71d-123456789
```
Step 2.

Configure your public key in checkout.hbs. Example:

```
Mercadopago.setPublishableKey("TEST-99c6d09d-7dca-4c45-bffb-b9d699012345");
```

### Running application

Inside the project, type on terminal:

```
$ npm install 
```
And then:

```
$ npm start 
```

Access localhost:3000 and done!
