import React from "react";
import { revalidatePath } from "next/cache";
import UserList from "@/components/UserList";

const getUsers = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/users");
    if (!response.ok) {
      throw new Error("Error fetching users!");
    }
    return await response.json();
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

const createUsers = async () => {
  const data = {
    id: Math.random() * 10,
    name: "Habib",
  };
  try {
    const response = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Error creating users");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};
const page = async () => {
  const data = await getUsers();
  //console.log("data", data);
  const handleClick = async () => {
    "use server";

    const data = await createUsers();
    console.log('data',data)
    revalidatePath('/users')
  };
  return (
     <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
          <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">
            👥 Users Management
          </h1>

          <form action={handleClick}>
            <button
              type="submit"
              className="mt-4 sm:mt-0 px-6 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 transition-all duration-200"
            >
              + Create User
            </button>
          </form>
        </div>

        {/* User List */}
        <UserList users={data?.data || []} />
      </div>
    </div>
  );
};

export default page;
