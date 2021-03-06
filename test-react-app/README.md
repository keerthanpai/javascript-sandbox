This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Used ```create-react-app test-react-app``` to create the react app.

To run this app run in the client machine, run 
```
npm install
```
followed by 
```
npm start
```
`npm install` installs all the dependency in package.json required for this app to run in the client machine.
`npm start` starts the single page application with the root as index.js - `<div id='root'>`


## Steps taken to recreate this package, outside of what can be tracked in commits

#### These are the additional dependency added to this project. (npm -- equivalaent to gradle/maven for java, package manager)

1. npm install axios --save    ---------> httpClient package save will make an entry in package.json

2. npm - react-router-dom      ---------> link and route, parameterized route, route using program

#### These dependencies were required for carbon design skins            

1. npm install -s carbon-components-react carbon-components carbon-icons

2. npm install -s node-sass --dev

3. npm install -s @carbon/grid







## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify



## Tips and tricks

1.  Useful plugins in Visual Studio Code - Live Server, Bootstrap 3 snippets

2. Component -> UI/View - Model (functional compomnents - stateless... class components - stateful)

3. To deploy within a war on tomcat 
a. Change web.xml of sample.war, add the following to app's web.xml
```
<error-page>
   <error-code>404<error-code>
   <location>/index.html<location>    
</error-page>
```
b.Contents in build directory needs to be copied to `apache-tomcat-9.0.1/webapps/sample` then start tomcat
