# 使用的技术

React18 + Vite4 + TypeScript

# 安装依赖

初始依赖

```bash
pnpm install
```

主包依赖

```bash
pnpm add -w [package name]

#or

pnpm add -w -D [package name]
```

指定工作区依赖安装

```bash
pnpm add  [package name]  --filter [workspace name]

#or

pnpm add  [package name]  --filter [workspace name]
```

包之间的依赖关系

> B包上使用到A包的方法

```bash
pnpm add [packages A] --filter [packages B]

```

# 项目运行

```bash
pnpm run dev
# or
pnpm dev
# or
pnpm start
```

# 语法检测

`lint:eslint` : 检测 eslint 语法格式

```bash
  pnpm run lint:eslint
```

`lint:prettier` : 检测 prettier 语法格式

```bash
  pnpm run lint:prettier
```

`lint:stylelint` : 检测css语法 stylelint 格式

```bash
  pnpm run lint:stylelint
```

# 项目打包

```bash
pnpm run build
```
