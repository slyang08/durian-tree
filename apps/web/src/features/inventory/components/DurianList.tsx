// apps/web/src/features/inventory/components/DurianList.tsx
"use client";

import { useTodayInventory } from "../hooks/useTodayInventory";

interface Props {
  storeId: number;
}

export default function DurianList({ storeId }: Props) {
  const { todayInventory, loading, error } = useTodayInventory(storeId);

  if (loading) return <div className="text-center py-8">載入中...</div>;
  if (error) return <div className="text-red-500 text-center py-8">{error}</div>;
  if (!todayInventory.length) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p>今日榴槤暫無進貨或已賣光 😢</p>
        <p className="text-sm mt-2">請明天再來看看新鮮的榴蓮哦！</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {todayInventory.map(item => (
        <div key={item.id} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
          <h3 className="font-bold text-xl mb-2 text-green-800">
            {item.variety.name}
          </h3>
          <div className="space-y-2 text-lg">
            <p className="text-2xl font-bold text-emerald-600">
              ${Number(item.price).toFixed(2)} (RM / 1000 克(1KG))
            </p>
            <p className="text-gray-600">庫存：{item.quantity} 顆</p>
          </div>
          {/* <button className="mt-4 w-full bg-emerald-500 text-white py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors">
            立即選購
          </button> */}
        </div>
      ))}
    </div>
  );
}