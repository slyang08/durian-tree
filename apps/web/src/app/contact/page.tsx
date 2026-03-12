// apps/web/src/app/contact/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="p-6 space-y-6 max-w-xl">
      <h1 className="text-2xl font-bold">聯絡我們</h1>

      <p className="text-gray-600">
        如果想預留榴蓮或有任何問題，可以透過以下方式聯絡我們。
      </p>

      <div className="space-y-3">
        <div>
          <p className="font-semibold">電話 / WhatsApp</p>
          <p>+60 0103835814</p>
        </div>

        <div>
          <p className="font-semibold">微信 WeChat</p>
          <p>ElingKi5814</p>
          <div className="flex flex-col w-65.5 h-113 relative items-center p-6 bg-white rounded-xl shadow-lg border-2 border-green-100">
            <Image 
              src="/LiuShuShu-QR.JPG"
              alt="掃描加微信"
              fill
              className="w-48 h-48 mb-3 rounded-lg shadow-md"
            />
            <p className="text-sm text-gray-600 text-center font-medium">
              掃描二維碼，立刻加樹樹家好友
            </p>
          </div>
        </div>

        <div>
          <p className="font-semibold">營業時間</p>
          <p>每天 09:00 - 17:00</p>
        </div>

        <div>
          <p className="font-semibold">地址</p>
          <Link href="/map" className="text-blue-600 hover:underline">
            <p>27, Jalan Sri Bahari, George Town, 10050 George Town, Pulau Pinang, Malaysia</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
