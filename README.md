# Ecommerce Flow Test

This repository contains automated tests for an e-commerce user flow in **Amazon.com**

These UI tests are developed with **Cypress**

The e-commerce user flow of I chose is: **Adding a birthday eGift card to the cart**

- Navigate to amazon.com 
- Click the Gift option in the upper menu
- Select Birthday
- Select the first egift card option shown
- Customize your eGift card 
- The selected product should be in the cart


&nbsp;
## Running the tests

&nbsp;

  

### Requirements

&nbsp;

  

You will need to install **NPM**. Refer to the official NPM documentation for installation instructions:

  
https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

  

&nbsp;

### Installing dependencies

&nbsp;

  

Before running the application we need to install all the dependencies. You can do this with the following command (execute it from the root directory of this application):


&nbsp;

  

    npm install  

&nbsp;

### Executing the tests
&nbsp;

### Headless Mode
&nbsp;
  

Tests will not open Chrome directly  and will display tests resuts in the console.

After the execution there will be screenshots in the **screenshots directory** and a video of the 
execution in the "video" folder 

&nbsp;

    npx cypress run   

&nbsp;

### Open Mode 
&nbsp;
  

Tests will be executed in **Cypress Test Runner** which is a GUI used to execute the tests.
Double click in the Amazon.spec file fot the tests to start. You will see real-time execution of the tests in the available browsers

&nbsp;

    npx cypress open  

&nbsp;