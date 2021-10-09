# CH Robinson: Interview Project

Created by Justin Rule

This project was made with [React](https://reactjs.org/) and [Konva](https://konvajs.org/) for graphics.

The logic for this application is primarily implemented in `utils.js`, where the list of countries is set up as a tree structure.\
Given a three letter country code, `getCountries()` will return a list of countries you must travel through from the USA.

This function is called when a user clicks `Submit` on the form in `App.js`.\
Then, country information is passed as props to `CountryMap` and `CountryItem`, where Konva is used to render a box for each country, colored as blue
if it's included in the country list. 

## Running Locally

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.