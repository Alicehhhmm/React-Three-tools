module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    jsxPragma: "React",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['react-refresh',"simple-import-sort"],
  rules: {
    "simple-import-sort/imports": "error",  // 导入模块自动排序
    "simple-import-sort/exports": "error",  // 导出模块自动排序
    "@typescript-eslint/no-explicit-any": ["off"], // 关闭any类型错误提示
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
