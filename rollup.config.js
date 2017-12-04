import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import buble from 'rollup-plugin-buble'

import pkg from './package.json';

const plugins = [
        resolve(),
        commonjs(),
        buble({
            objectAssign: 'Object.assign',
             exclude: ['node_modules/**'],
        })
    ]

const external = [ 'react', 'redux', 'crypto', 'react-router-redux', 'react-redux', 'prop-types', 'query-string' ]

const globals = {
    crypto: 'crypto',
    'react-router-redux': 'react-router-redux',
    react: 'react',
    redux: 'redux',
    'react-redux': 'react-redux',
    'prop-types': 'prop-types',
    'query-string': 'query-string'
}

export default [
    // browser-friendly UMD build
    {
        input: 'src/index.js',
        output: {
                file: pkg.browser,
                format: 'umd'
        },
        name: 'stroom-js',
        plugins,
        external,
        globals
    },

    // CommonJS (for Node) and ES module (for bundlers) build.
    // (We could have three entries in the configuration array
    // instead of two, but it's quicker to generate multiple
    // builds from a single configuration where possible, using
    // an array for the `output` option, where we can specify 
    // `file` and `format` for each target)
    {
        input: 'src/index.js',
        file: 'wat',
        external: ['ms'],
        output: [
            { file: pkg.main, format: 'cjs' },
            { file: pkg.module, format: 'es' }
        ],
        plugins,
        external,
        globals
    },
]
