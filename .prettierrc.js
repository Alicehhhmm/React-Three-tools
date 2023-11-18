// @see: https://www.prettier.cn
module.exports = {
    tabWidth: 4, // 缩进字节数
    printWidth: 150, // 超过最大值换行
    semi: true, // 结尾不用分号(true有，false没有)
    singleQuote: true, // 使用单引号(true单双引号，false 双引号)
    insertPragma: false,
    requirePragma: false,
    jsxSingleQuote: false,
    trailingComma: 'all', // 多行时尽可能打印尾随逗号
    proseWrap: 'never', // 折行 preserve
    htmlWhitespaceSensitivity: 'strict',
    endOfLine: 'auto', // 自动选择适合当前操作系统的换行符。
    plugins: ['prettier-plugin-packagejson'],
    // 覆盖特定文件类型的配置
    overrides: [
        {
            files: '.*rc',
            options: {
                parser: 'json',
            },
        },
    ],
};
