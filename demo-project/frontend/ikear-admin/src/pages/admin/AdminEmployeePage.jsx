import React from "react";
import EmployeeCard from "../../components/admin/EmployeeCard";

export default function AdminEmployeePage() {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="w-full text-center p-6 text-4xl font-black">
        <h1>Employees</h1>
      </div>
      <div className="w-full px-12 grid grid-cols-3 gap-6 pb-40">
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />

        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />

        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
      </div>
    </div>
  );
}
