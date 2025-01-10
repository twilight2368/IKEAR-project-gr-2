import React, { useState, useEffect } from "react";
import UserCard from "../../components/admin/UserCard";
import axios from "axios";
import { toast } from "react-toastify";

export default function AdminUserPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch users on mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/service1/user/users"
        );
        setUsers(response.data.data);
      } catch (error) {
        console.error("Error fetching users:", error);
        toast.error("Error fetching users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="w-full text-center p-6 text-4xl font-black">
        <h1>Users</h1>
      </div>
      <div className="w-full px-12 grid grid-cols-3 gap-6 pb-40">
        {loading ? (
          <div>Loading...</div>
        ) : (
          users.map((user, index) => <UserCard key={index} user={user} />)
        )}
      </div>
    </div>
  );
}
