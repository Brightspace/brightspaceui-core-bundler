import { createBasicConfig } from '@open-wc/building-rollup';
import merge from 'deepmerge';
import resolve from '@rollup/plugin-node-resolve';

const config = createBasicConfig({
	developmentMode: false, /* forces tree-shaking, minify ON */
	legacyBuild: true, /* required for IE11 and legacy-Edge support */
	outputDir: 'build-bundle'
});
config.input = './components.js';
config.output[0].entryFileNames = '[name].js';
config.output[0].chunkFileNames = '[name].js';
config.output[1].entryFileNames = 'nomodule-[name].js';
config.output[1].chunkFileNames = 'nomodule-[name].js';

export default merge(config, {
	plugins: [
		resolve()
	]
});
