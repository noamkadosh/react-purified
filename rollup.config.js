import commonjs from '@rollup/plugin-commonjs'
import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'
import { externals } from 'rollup-plugin-node-externals'
import json from '@rollup/plugin-json'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import path from 'node:path'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'
import typescript from '@rollup/plugin-typescript'

const packageJson = require('./package.json')

// ignore Circular Dependency warning from node_modules
const onwarn = (warning, rollupWarn) =>
	warning.code === 'CIRCULAR_DEPENDENCY' &&
	warning.importer.includes(path.normalize('node_modules'))
		? undefined
		: rollupWarn(warning)

const config = [
	{
		input: 'src/index.ts',
		output: [
			{
				file: packageJson.main,
				format: 'cjs',
				sourcemap: true
			},
			{
				file: packageJson.module,
				format: 'esm',
				sourcemap: true
			}
		],
		plugins: [
			peerDepsExternal(),
			externals(),
			nodeResolve({ preferBuiltins: true }),
			commonjs(),
			json(),
			typescript({ tsconfig: './tsconfig.json' }),
			esbuild(),
			terser({
				ecma: 2020,
				mangle: { toplevel: true },
				compress: {
					module: true,
					toplevel: true,
					unsafe_arrows: true,
					drop_console: true,
					drop_debugger: true
				},
				output: { quote_style: 1 }
			})
		],
		external: ['react', 'canvas'],
		onwarn
	},
	{
		input: 'dist/esm/types/index.d.ts',
		output: [{ file: 'dist/index.d.ts', format: 'esm' }],
		plugins: [dts()]
	}
]

export default config
