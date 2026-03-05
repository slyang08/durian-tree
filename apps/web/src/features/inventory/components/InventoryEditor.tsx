// apps/web/src/features/inventory/components/InventoryEditor.tsx
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { updateInventoryItem } from "../api";

interface Item {
  id: number;
  quantity: number;
  price: number;
  variety: {
    name: string;
  };
}

interface Props {
  inventory: {
    id: number;
    date: string;
    items: Item[];
  };
}

export default function InventoryEditor({ inventory }: Props) {
  const [items, setItems] = useState(inventory.items);
  const router = useRouter();

  const updateField = (
    index: number,
    field: "quantity" | "price",
    value: number
  ) => {
    const updated = [...items];
    updated[index] = { ...updated[index], [field]: value };
    setItems(updated);
  };

  const save = async () => {
    await Promise.all(
      items.map((item) =>
        updateInventoryItem(item.id, {
          quantity: item.quantity,
          price: item.price,
        })
      )
    );

    alert("Saved!");
  };

  const back = async () => {
    router.back();
  };

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div key={item.id} className="flex gap-2 items-center">

          <div className="w-40">{item.variety.name}</div>

          <input
            type="number"
            value={item.quantity}
            onChange={(e) =>
              updateField(index, "quantity", Number(e.target.value))
            }
            className="border p-1 w-20"
          />

          <input
            type="number"
            step="0.01"
            value={item.price}
            onChange={(e) =>
              updateField(index, "price", Number(e.target.value))
            }
            className="border p-1 w-24"
          />

        </div>
      ))}

      <div className="flex gap-4 my-6">
        <button
          onClick={save}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          💾 Save
        </button>
          <button
            onClick={back}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            ← Back
          </button>
      </div>
    </div>
  );
}
