# protractor-tests
Protractor tests

## Instalation
```
  npm install
```

## Setup
Update the ``conf.js`` file to correctly point the installation path for selenium-server-standalone jar under the directory path `node_modules/webdriver-manager/selenium/` 

For example the current path points to ``node_modules/webdriver-manager/selenium/selenium-server-standalone-3.13.0.jar`` update as necessary to point to the right jar. The version keeps changing based on the latest release

Credentials such as username and password are read from System variables 
`````$xslt
var username = process.env.GP_USER;
var password = process.env.GP_PASSWORD;
`````

So create system variables 
`GP_USER` and `GP_PASSWORD`

## Running the tests
```
  npm test
```
