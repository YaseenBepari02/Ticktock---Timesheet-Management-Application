"use client";

import React from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

interface HeaderProps {
  userName?: string;
}

export function Header({ userName }: HeaderProps) {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push("/login");
    router.refresh();
  };

  return (
    <header className="bg-white shadow">
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-bold text-primary">ticktock</h1>
          <nav className="flex gap-6">
            <button className="text-gray-700 font-medium border-b-2 border-primary pb-1">
              Timesheets
            </button>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-700">
            Welcome, {userName || "User"}
          </span>
          <button
            onClick={handleSignOut}
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            Sign out
          </button>
        </div>
      </div>
    </header>
  );
}
export default Header;
