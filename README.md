# create-react-app-without-CRA
This repo manually configure a minimal setup for React without create-react-app.

## Steps to create react app use webpack and babel:
1. Run `npm init` to manage your package.
1. Then Run `npm install webpack webpack-cli --save-dev` to install webpack and webpack-cli.
    Webpack is a module bundler. It takes modules with dependencies and generates a static file that could be served to browser.
1. Create a *src* folder for resource and a *dist* folder for distributable. Create *index.html* file under the dist folder and *index.js* file under the src folder.
1. Write a simple 'Hello world' react app in src folder. To make the dependencies to work, just install it.
1. To make webpack work for react app, we need to install babel loader and configure webpack to use babel loader to transform JS and JSX file.
1. To make babel work, we need to configure babel using *@babel/preset-react* and *@babel/preset-env*.
1. And now when you run `npx webpack`, you can see *main.js* file is generated. We need to add this script in *index.html*.
1. Add build script in *package.json* so that you don't need to remember the command for running webpack, just run `npm run build`.

Now when you open *index.html* with browser, you can see 'Hello world' on the page! Checkout commits for each step.

Also! Checkout [webpack start tutorial](https://webpack.js.org/guides/getting-started/) for more explanation and feature.
Checkout [babel](https://babeljs.io/docs/en/babel-preset-react) for more explanation and feature.

## Steps to create react app use CDN link:
I read a [tutorial](https://www.pluralsight.com/guides/using-react-router-with-cdn-links) online to implement this.
