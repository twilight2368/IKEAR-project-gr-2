import React from "react";
import UserCard from "../../components/admin/UserCard";

export default function AdminUserPage() {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="w-full text-center p-6 text-4xl font-black">
        <h1>Users</h1>
      </div>
      <div className="w-full px-12 grid grid-cols-3 gap-6 pb-40">
        <UserCard />
        <UserCard />
        <UserCard />

        <UserCard />
        <UserCard />
        <UserCard />

        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  );
}
