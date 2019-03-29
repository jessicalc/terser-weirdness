/**
 * Rollup Configuration file specifically for building the microsnippet.
 */
const commonjs = require('rollup-plugin-commonjs');
const nodeResolve = require('rollup-plugin-node-resolve');
const { terser } = require('rollup-plugin-terser');

module.exports = {
  input: './src/index.js',
  output: {
    file: './dist/main.js',
    format: 'iife',
  },
  plugins: [
    // NOTE: DO NOT MOVE THIS
    // Test setup expects this to be the first plugin
    terser(),

    nodeResolve({
      jsnext: true,
      main: true,
    }),

    commonjs({
      include: 'node_modules/**',
      // if false then skip sourceMap generation for CommonJS modules
      sourceMap: false, // Default: true
    }),
  ],
};
