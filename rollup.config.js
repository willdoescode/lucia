import { uglify } from 'rollup-plugin-uglify';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import pkg from './package.json';

const extensions = ['.js', '.ts'];

const name = 'Lucia';

export default {
  input: './src/index.ts',
  external: [],
  plugins: [
    resolve({ extensions }),
    commonjs(),
    babel({
      extensions,
      babelHelpers: 'bundled',
      include: ['src/**/*'],
    }),
  ],

  output: [
    {
      file: pkg.main,
      format: 'umd',
      name,
      globals: {},
      strict: false,
    },
    {
      file: pkg.browser,
      format: 'umd',
      plugins: uglify(),
      name,
      globals: {},
      strict: false,
    },
  ],
};
