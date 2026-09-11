"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center gap-4">
      <button
        type="button"
        onClick={() => setCount((value) => value - 1)}
        className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm transition-colors hover:bg-slate-100"
      >
        -1
      </button>
      <span className="w-10 text-center text-2xl font-semibold tabular-nums">
        {count}
      </span>
      <button
        type="button"
        onClick={() => setCount((value) => value + 1)}
        className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm transition-colors hover:bg-slate-100"
      >
        +1
      </button>
    </div>
  );
}
