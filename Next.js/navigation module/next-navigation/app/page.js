"use client"
import { useSearchParams } from "next/navigation";
export default function Home() {
 const searchParams = useSearchParams();
  return (
    <div>
      <h1 className="text-2xl font-bold">
        Welcome to Next.js! and blog is {searchParams.get("blog")} and utm source is {searchParams.get("utm_source")}
      </h1>
    </div>
  );
}
