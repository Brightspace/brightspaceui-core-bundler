import { createBasicConfig } from '@open-wc/building-rollup';
import merge from 'deepmerge';
import resolve from 'rollup-plugin-node-resolve';

const componentFiles = [
	// './node_modules/@brightspace-ui/core/components/button/button.js',
	// './node_modules/@brightspace-ui/core/components/loading-spinner/loading-spinner.js',
];

const config = createBasicConfig({
	developmentMode: false, /* forces tree-shaking, minify ON */
	legacyBuild: true, /* required for IE11 and legacy-Edge support */
	outputDir: 'build',
});
config.input = componentFiles;
config.output[0].entryFileNames = '[name].js';
config.output[0].chunkFileNames = '[name].js';
config.output[1].entryFileNames = 'nomodule-[name].js';
config.output[1].chunkFileNames = 'nomodule-[name].js';

export default merge(config, {
	plugins: [
		resolve()
	]
});
