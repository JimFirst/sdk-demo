import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'
import replace from '@rollup/plugin-replace'
import postcss from 'rollup-plugin-postcss'
import alias from '@rollup/plugin-alias'
import path from 'path'
const packageJson = require('./package.json')

export default {
  input: 'src/index.jsx',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: false,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: false,
    },
    {
      file: packageJson.browser,
      format: 'umd',
      name: 'MySDK',
      sourcemap: false,
      // globals: {
      //   react: 'React',
      //   'react-dom': 'ReactDOM',
      // },
    },
  ],
  context: 'window',
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'), // 替换为生产环境
      'use client': '',
      preventAssignment: true, // 防止直接赋值警告
    }),
    peerDepsExternal(),
    alias({
      entries: [
        {
          find: '@components',
          replacement: path.resolve(__dirname, 'src/components'),
        },
        { find: '@', replacement: path.resolve(__dirname, 'src') },
      ],
    }),
    resolve({
      extensions: ['.js', '.jsx'],
    }),
    commonjs(),
    postcss({
      modules: true, // 开启 CSS Modules
      extract: true, // 将 CSS 分离为独立文件
      minimize: true, // 压缩 CSS
      sourceMap: false,
    }),
    babel({
      exclude: 'node_modules/**',
      presets: [
        ['@babel/preset-react', { runtime: 'automatic' }],
        '@babel/preset-env',
      ],
      plugins: ['@babel/plugin-transform-runtime'], // 添加插件
      babelHelpers: 'runtime',
    }),
    terser(),
  ],
  // external: ['react', 'react-dom'], // 标记为外部依赖
}
