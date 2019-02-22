import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import sass from 'rollup-plugin-sass';
import { terser } from 'rollup-plugin-terser';
import browsersync from "rollup-plugin-browsersync";
const historyApiFallback = require('connect-history-api-fallback');
// --------------------------

const production = !process.env.ROLLUP_WATCH;
const OUTPUT_FOLDER = 'public';

function outputTo(path) {
  return(`${OUTPUT_FOLDER}/${path}`);
}
// --------------------------

export default {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: outputTo('bundle.js')
	},
	plugins: [
    sass({
      output: outputTo('global.css'),
    }),
		svelte({
			// opt in to v3 behaviour today
			skipIntroByDefault: true,
			nestedTransitions: true,

			// enable run-time checks when not in production
			dev: !production,
			// we'll extract any component CSS out into
			// a separate file — better for performance
			css: css => {
				css.write(outputTo('bundle.css'));
			}
		}),
		browsersync({
      server: {
        baseDir: OUTPUT_FOLDER,
        middleware: [ historyApiFallback() ],
      },
      files: outputTo("**.*"),
      open: false,
      reloadOnRestart: false
    }),
		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration —
		// consult the documentation for details:
		// https://github.com/rollup/rollup-plugin-commonjs
		resolve(),
		commonjs(),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser()
	]
};
