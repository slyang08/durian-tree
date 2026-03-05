// apps/web/src/app/durians/page.tsx
import DurianList from "@/features/inventory/components/DurianList";

export default function Page() {
  return (
    <div className="flex flex-col p-6">
      <h1 className="text-2xl font-bold mb-4">今日榴蓮樹樹的榴蓮</h1>
      <DurianList storeId={1} />
    </div>
  );
}
