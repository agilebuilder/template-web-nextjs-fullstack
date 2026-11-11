# <%= projectName %>

<%= description %>

## 技术栈

- [Next.js 15](https://nextjs.org/)（App Router）+ React 19
- TypeScript（严格模式）
- Tailwind CSS 3
- ESLint（next/core-web-vitals）

## 目录结构

```
├── app/                    # App Router 路由目录
│   ├── layout.tsx          # 根布局（含全局 SEO metadata）
│   ├── page.tsx            # 首页
│   ├── globals.css         # 全局样式（Tailwind 指令）
│   ├── about/              # 示例路由 /about
│   │   └── page.tsx
│   └── api/
│       └── health/
│           └── route.ts    # Route Handler 示例：GET /api/health
├── components/             # React 组件
│   ├── SiteHeader.tsx      # 站点头部（服务端组件）
│   └── Counter.tsx         # 计数器（客户端组件示例）
├── lib/                    # 工具与配置
│   ├── site.ts             # 站点配置（名称、描述、URL）
│   └── utils.ts            # 通用工具函数
├── next.config.ts          # Next.js 配置
├── tailwind.config.ts      # Tailwind CSS 配置
└── .env.example            # 环境变量示例
```

## 快速开始

本项目由 [AgileBuilder](https://github.com/agilebuilder) 模板生成。使用以下命令创建一个新项目：

```bash
ag create --git-url <模板仓库地址> --target <目标目录>
```

生成后进入项目目录，安装依赖并启动开发服务器：

```bash
<% if (packageManager === 'pnpm') { -%>
pnpm install
pnpm dev
<% } else if (packageManager === 'yarn') { -%>
yarn
yarn dev
<% } else { -%>
npm install
npm run dev
<% } -%>
```

开发服务器默认运行在 `http://localhost:<%= port %>`。

## 模板变量

| 变量名 | 说明 | 默认值 |
| --- | --- | --- |
| `projectName` | 项目名称（包名与站点名） | `demo-web` |
| `description` | 项目描述 | `一个 Next.js 全栈应用` |
| `author` | 作者 | （空） |
| `port` | 开发/启动服务器端口 | `3000` |
| `packageManager` | 包管理器（pnpm / npm / yarn） | `pnpm` |

## 环境变量

复制 `.env.example` 为 `.env.local` 并按需修改：

```bash
cp .env.example .env.local
```

## 常用命令

| 命令 | 说明 |
| --- | --- |
| `<% if (packageManager === 'pnpm') { %>pnpm dev<% } else if (packageManager === 'yarn') { %>yarn dev<% } else { %>npm run dev<% } %>` | 启动开发服务器（端口 <%= port %>） |
| `<% if (packageManager === 'pnpm') { %>pnpm build<% } else if (packageManager === 'yarn') { %>yarn build<% } else { %>npm run build<% } %>` | 生产构建 |
| `<% if (packageManager === 'pnpm') { %>pnpm start<% } else if (packageManager === 'yarn') { %>yarn start<% } else { %>npm run start<% } %>` | 启动生产服务器 |
| `<% if (packageManager === 'pnpm') { %>pnpm lint<% } else if (packageManager === 'yarn') { %>yarn lint<% } else { %>npm run lint<% } %>` | 运行 ESLint |

## 许可证

[MIT](./LICENSE)
