// @see: https://stylelint.io
// TODO(优化): 移到 pages/stylelint-config 模块单独管理
module.exports = {
    extends: [
        'stylelint-config-standard', // 配置stylelint拓展插件
        'stylelint-config-prettier', // 配置stylelint和prettier兼容
        'stylelint-config-recess-order', // 配置stylelint css属性书写顺序插件,
    ],
    customSyntax: 'postcss-less',
    plugins: ['stylelint-less'],
    rules: {
        indentation: null, // 指定缩进空格
        'no-descending-specificity': null,
        'function-url-quotes': 'always',
        'unit-case': null,
        'color-hex-length': 'long',
        'rule-empty-line-before': 'never',
        'font-family-no-missing-generic-family-keyword': null,
        'property-no-unknown': null,
        'no-empty-source': null,
        'declaration-block-trailing-semicolon': null,
        'selector-class-pattern': null,
        'value-no-vendor-prefix': null,
        'at-rule-no-unknown': null,
        'selector-pseudo-class-no-unknown': [
            true,
            {
                ignorePseudoClasses: ['global', 'v-deep', 'deep'],
            },
        ],
    },
};
