import globals from 'globals'
import eslintRecommended from '@eslint/js' // ESLint 官方推荐规则
import reactRecommended from 'eslint-plugin-react/configs/recommended.js' // React 推荐规则
import prettierRecommended from 'eslint-config-prettier' // Prettier 推荐配置
export default {
  files: ['src/**/*.{js,mjs,jsx}'],
  ignores: ['node_modules', 'dist'],
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
    globals: { ...globals.browser },
  },
  plugins: {
    react: reactRecommended.plugins.react, // React 插件
  },
  settings: {
    react: {
      version: 'detect', // 自动检测 React 版本
    },
  },
  /*
   * "off" 或 0    ==>  关闭规则
   * "warn" 或 1   ==>  打开的规则作为警告（不影响代码执行）
   * "error" 或 2  ==>  规则作为一个错误（代码不能执行，界面报错）
   */
  rules: {
    ...eslintRecommended.configs.recommended.rules, // 合并 ESLint 推荐规则
    ...reactRecommended.rules, // 合并 React 推荐规则
    ...prettierRecommended.rules, // 合并 Prettier 推荐规则
    /** @js */
    quotes: [2, 'single'], // 强制使用一致的单引号
    semi: [2, 'never'], // 强制是否使用分号
    'no-undef': 'error', // 不能有未定义的变量
    'no-var': 'error', // 要求使用 let 或 const 而不是 var
    'no-debugger': 'off', // 是否允许使用debugger
    'no-console': 'off', //  是否允许使用console
    /** @react */
    'react-refresh/only-export-components': 'off',
    'react/react-in-jsx-scope': 'off', // React17后不需要在jsx中主动引入react
    'react/prop-types': 'off',
  },
}
