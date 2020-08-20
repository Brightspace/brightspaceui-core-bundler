import { createBasicConfig } from '@open-wc/building-rollup';
import merge from 'deepmerge';
import resolve from 'rollup-plugin-node-resolve';

const componentFiles = [
	'./node_modules/@brightspace-ui/core/components/alert/alert.js',
	'./node_modules/@brightspace-ui/core/components/alert/alert-toast.js',
	'./node_modules/@brightspace-ui/core/components/backdrop/backdrop.js',
	'./node_modules/@brightspace-ui/core/components/breadcrumbs/breadcrumb.js',
	'./node_modules/@brightspace-ui/core/components/breadcrumbs/breadcrumb-current-page.js',
	'./node_modules/@brightspace-ui/core/components/breadcrumbs/breadcrumbs.js',
	'./node_modules/@brightspace-ui/core/components/button/button.js',
	'./node_modules/@brightspace-ui/core/components/button/button-icon.js',
	'./node_modules/@brightspace-ui/core/components/button/button-subtle.js',
	'./node_modules/@brightspace-ui/core/components/button/floating-buttons.js',
	'./node_modules/@brightspace-ui/core/components/dialog/dialog-fullscreen.js',
	'./node_modules/@brightspace-ui/core/components/dropdown/dropdown-context-menu.js',
	'./node_modules/@brightspace-ui/core/components/dropdown/dropdown-button.js',
	'./node_modules/@brightspace-ui/core/components/dropdown/dropdown-button-subtle.js',
	'./node_modules/@brightspace-ui/core/components/expand-collapse/expand-collapse-content.js',
	'./node_modules/@brightspace-ui/core/components/inputs/input-checkbox.js',
	'./node_modules/@brightspace-ui/core/components/inputs/input-search.js',
	'./node_modules/@brightspace-ui/core/components/inputs/input-text.js',
	'./node_modules/@brightspace-ui/core/components/inputs/input-time.js',
	'./node_modules/@brightspace-ui/core/components/loading-spinner/loading-spinner.js',
	'./node_modules/@brightspace-ui/core/components/menu/menu.js',
	'./node_modules/@brightspace-ui/core/components/menu/menu-item.js',
	'./node_modules/@brightspace-ui/core/components/menu/menu-item-checkbox.js',
	'./node_modules/@brightspace-ui/core/components/menu/menu-item-link.js',
	'./node_modules/@brightspace-ui/core/components/menu/menu-item-radio.js',
	'./node_modules/@brightspace-ui/core/components/menu/menu-item-separator.js',
	'./node_modules/@brightspace-ui/core/components/more-less/more-less.js',
	'./node_modules/@brightspace-ui/core/components/switch/switch.js',
	'./node_modules/@brightspace-ui/core/components/switch/switch-visibility.js',
	'./node_modules/@brightspace-ui/core/components/tooltip/tooltip.js',
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
