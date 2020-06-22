## IGNW Intersight SDK

This project uses OpenAPI generator to generate a TypeScript/JavaScript client for the Cisco Intersight API.

### Building

To build and compile the typescript sources to javascript use:

```
npm install
npm run build
```

### Publishing

First build the package then run `npm publish`

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_using the package published on npm:_

```
npm i @ignw/intersight-sdk
```

_using the unpublished package (not recommended):_

```
npm i .
```

### Contributing

To update the sdk, replace the intersight-openapi-xxx.json doc with the latest version from Intersight. Run NPM run build to transpile the typescript files and update the dist folder. Finally, publish the package `npm publish`
