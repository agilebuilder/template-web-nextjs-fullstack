# AGENTS.md

本文件为 AI 编码代理提供项目导航指南。

## 项目概览

<%= projectName %> —— <%= description %>。基于 Next.js 15 App Router + TypeScript + Tailwind CSS 的全栈应用。

## 目录结构与约定

- `app/`：App Router 路由。每个子目录是一个路由段，`page.tsx` 是页面，`layout.tsx` 是布局，`route.ts` 是 API Route Handler。
  - `app/layout.tsx`：根布局，导出全局 `metadata`（SEO），数据来自 `lib/site.ts`。
  - `app/api/health/route.ts`：API 示例，新增接口时在 `app/api/` 下建目录并导出 `GET`/`POST` 等函数。
- `components/`：共享 React 组件。默认是服务端组件；需要交互（useState、事件）时在文件顶部加 `"use client"`。
- `lib/`：非 UI 代码。`site.ts` 是站点配置的单一事实来源，`utils.ts` 放通用工具函数。
- 路径别名：`@/*` 映射到项目根（如 `@/lib/site`），导入时优先使用别名。

## 编码约定

- TypeScript 严格模式；避免 `any`。
- 组件使用默认导出（`export default function Xxx()`），与现有文件保持一致。
- 样式一律使用 Tailwind CSS 工具类，不写内联 style 或额外 CSS 文件。
- 文案使用中文，`lang="zh-CN"`。
- 不添加未在 package.json 中声明的依赖；确有需要时先说明理由。

## 常用命令

```bash
<% if (packageManager === 'pnpm') { -%>
pnpm dev        # 开发服务器（端口 <%= port %>）
pnpm build      # 生产构建（含 lint 与类型检查）
pnpm start      # 生产服务器
pnpm lint       # ESLint
<% } else if (packageManager === 'yarn') { -%>
yarn dev        # 开发服务器（端口 <%= port %>）
yarn build      # 生产构建（含 lint 与类型检查）
yarn start      # 生产服务器
yarn lint       # ESLint
<% } else { -%>
npm run dev     # 开发服务器（端口 <%= port %>）
npm run build   # 生产构建（含 lint 与类型检查）
npm run start   # 生产服务器
npm run lint    # ESLint
<% } -%>
```

## 验证改动

提交前运行 `build` 命令确认 lint 与类型检查全部通过。
