import React, { useState, useEffect } from "react";
import EmployeeCard from "../../components/admin/EmployeeCard";
import axios from "axios";
import { toast } from "react-toastify";

export default function AdminEmployeePage() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch employees on mount
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/service1/employee/employees"
        );
        setEmployees(response.data.data);
      } catch (error) {
        console.error("Error fetching employees:", error);
        toast.error("Error fetching employees");
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="w-full text-center p-6 text-4xl font-black">
        <h1>Employees</h1>
      </div>
      <div className="w-full px-12 grid grid-cols-3 gap-6 pb-40">
        {loading ? (
          <div>Loading...</div>
        ) : (
          employees.map((employee, index) => (
            <EmployeeCard key={index} employee={employee} />
          ))
        )}
      </div>
    </div>
  );
}
