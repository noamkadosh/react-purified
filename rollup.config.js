import commonjs from '@rollup/plugin-commonjs'
import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'
import json from '@rollup/plugin-json'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import path from 'path'
import typescript from '@rollup/plugin-typescript'

const packageJson = require('./package.json')

// ignore Circular Dependency warning from node_modules
const onwarn = (warning, rollupWarn) =>
	warning.code === 'CIRCULAR_DEPENDENCY' &&
	warning.importer.indexOf(path.normalize('node_modules')) >= 0
		? null
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
			nodeResolve({ preferBuiltins: true }),
			commonjs(),
			json(),
			typescript({ tsconfig: './tsconfig.json' }),
			esbuild()
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
