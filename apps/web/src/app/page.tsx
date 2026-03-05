// apps/web/src/app/page.tsx
import Link from "next/link";

export default async function Home() {
  return (<>
    <p>榴蓮樹樹</p>
    <div>
      <Link href="/durians">今日榴蓮樹樹的庫存</Link>
    </div>
  </>);
}
