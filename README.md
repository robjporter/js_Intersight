## IGNW Intersight SDK

This project uses OpenAPI generator to generate a TypeScript/JavaScript client for the Cisco Intersight API.

### Building

To transpile the typescript sources to javascript use:

```
npm install
npm run build
```

### Publishing

First build the package then run `npm publish`

### Consuming

Navigate to the folder of your consuming project and run one of the following commands.

_using the package published on npm:_

```
npm i @ignw/intersight
```

_using the unpublished package from your filesystem (not recommended):_

- CD into this project's root folder
- Run `npm i`
- Run `npm build`.

After running those commands you should have a dist folder that contains the transpiled code. CD back into the root folder of the consuming project and run

```
npm i /path/to/this/repo's/root/folder
```

### Contributing

To update the sdk, replace the intersight-openapi-xxx.json doc with the latest version from Intersight. Run NPM run build to transpile the typescript files and update the dist folder. Finally, publish the package with `npm publish`.
