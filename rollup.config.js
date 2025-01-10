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
      extract: true, // 提取到同一个文件
      minimize: true, // 压缩 CSS
      sourceMap: true,
      modules: {
        // 启用 CSS Modules，仅针对 `.module.css` 文件
        generateScopedName: '[name]__[local]___[hash:base64:5]',
        auto: filename => filename.endsWith('.module.css'), // 自动匹配规则
      },
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
