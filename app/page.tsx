import Counter from "@/components/Counter";
import { siteConfig } from "@/lib/site";

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">
          {siteConfig.name}
        </h1>
        <p className="text-lg text-slate-600">{siteConfig.description}</p>
      </section>
      <section className="rounded-xl border border-slate-200 p-6">
        <h2 className="mb-2 text-xl font-semibold">客户端组件示例</h2>
        <p className="mb-4 text-sm text-slate-500">
          下方计数器是一个 Client Component，运行在浏览器中。
        </p>
        <Counter />
      </section>
    </div>
  );
}
