# Fides Web Console

## Install

### Prerequisites
For first time installation, go through general Node.js and npm install, and create the project environment.

### Before you start 
Go through the following steps to align spree-console installation:
1. `npm install`
1. `npm update`
1. `npm install -g webpack webpack-cli`

## Running the environments

#### Develop
To run the environment in an hot reload configuration execute the following command:
1. `npm start` will start the server
2. `npm run watch` (on another console tab) will watch the code files for changes, and rebuild the environment 
automatically. 
3. Browse to `http://localhost:3030`

### Build
Run the following command to build the environment: 
`npm run build`

#### Deploy
After running the build command now the environment is ready to be deploy. To deploy run:
`eb deploy spree-console-prod`

Now run the `eb open` command to open a browser with the root location of the Spree Console. 