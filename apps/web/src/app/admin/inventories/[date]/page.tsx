// apps/web/src/app/admin/inventories/[date]/page.tsx
import { getInventoryByDate } from "@/features/inventory/api";
import InventoryEditor from "@/features/inventory/components/InventoryEditor";

interface Props {
  params: Promise<{ date: string }>;
}

export default async function Page({ params }: Props) {
  const { date } = await params;  

  const dateObj = new Date(date + "T00:00:00Z");
  const inventory = await getInventoryByDate(1, dateObj);
  
  if (!inventory) {
    return <div>Inventory not found for {date}</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">
        Edit Inventory ({date.toString().split("T")[0]})
      </h1>

      <InventoryEditor inventory={inventory} />
    </div>
  );
}
