# brightspaceui-core-bundler
A configuration for building BrightspaceUI/core components for browser consumption.

## Usage
After cloning this repo, start by installing the required dependencies.

```
npm install
```

Two styles of builds can be produced: a single-file bundle, or a multiple-file full build. 

### Single File Bundle
This style of build will bundle each of the desired components and their dependencies into a single file. This style of build may be desired if you are only using a select few components from our library.  
In the file `components.js`, import each of your desired components.  
```javascript
import '@brightspace-ui/core/components/<path to component>';
```
Then run the bundle script.  
```
npm run bundle
```
This will create an output folder `build-bundle` that will contain a file `components.js` which will define each of your desired components. See `example-bundle.html` for an example of using this bundle file.

### Multiple File Full Build
This style of build will output each included component as a separate file to import. This style of build may be desired if you intend to use a wide variety of components, or if you are working on a multi-age application.  
In the file `rollup.config.js` add the path to the component you wish to include in the build in the `componentFiles` array.
```javascript
const componentFiles = [
	'./node_modules/@brightspace-ui/core/<path to component>',
	...
];
```
Then run the build script.
```
npm run build
```
This will create an output folder `build` that will contain a file for each component included in the build. See `example-build.html` for an example of using this bundle file.
