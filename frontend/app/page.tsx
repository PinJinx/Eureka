"use client";

import Image from "next/image";
import {Bell, Pencil, House, User } from "lucide-react";

export default function Home() {
  return (
    <main>
      <div className="topbar w-full h-[10vh] bg-[#ccd1d1] flex items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <Image src="/wmremove-transformed.png" alt="logo" width={150} height={50} />
        </div>

        <div className="flex items-center gap-4">
        <House className="w-6 h-6 text-gray-700 cursor-pointer hover:text-black" />
          <Bell className="w-6 h-6 text-gray-700 cursor-pointer hover:text-black" />
          <Pencil className="w-6 h-6 text-gray-700 cursor-pointer hover:text-black" />
          <User className="w-6 h-6 text-gray-700 cursor-pointer hover:text-black" />
        </div>
      </div>

      <div className="p-4">
        
      </div>
    </main>
  );
}
