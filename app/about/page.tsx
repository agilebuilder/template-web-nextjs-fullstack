import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于",
  description: "了解这个项目",
};

export default function AboutPage() {
  return (
    <article className="space-y-4">
      <h1 className="text-3xl font-bold tracking-tight">关于</h1>
      <p className="text-slate-600">
        这是一个示例路由页面，位于 <code>app/about/page.tsx</code>
        。你可以在同级目录新增文件夹来创建更多路由。
      </p>
      <p className="text-slate-600">
        每个路由都可以导出 <code>metadata</code> 对象或{" "}
        <code>generateMetadata</code> 函数来定制 SEO 信息。
      </p>
    </article>
  );
}
