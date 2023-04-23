"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";

export function Button() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  console.log("Button.tsx rendering");
  return (
    <button
      className="p-2 bg-gray-100 text-black"
      onClick={async () => {
        startTransition(() => {
          router.refresh();
        });
      }}
    >
      {isPending ? "Refreshing..." : "Refresh"}
    </button>
  );
}
