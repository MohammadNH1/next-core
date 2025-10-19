"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {deleteUser} from '../action/api'
type UserListProps = {
  users: {
    id: number;
    name: string;
  }[];
};




const UserList = ({ users }: UserListProps) => {
  const router = useRouter();
  const handleClick = (userId: number) => {
    router.push(`/users/${userId}`);
  };

  const handleDelete = async (userId:number)=>{
    console.log('handleDelte click')
  const  data = await deleteUser(userId)
 
  console.log('data',data)
  }
  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">User List</h2>

      {users.length > 0 ? (
        <ul className="space-y-4">
          {users.map((user) => (
            <li
              key={user.id}
              className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 p-4 rounded-lg transition-colors duration-200"
            >
              <span className="text-lg font-medium text-gray-700">
                {user.name}
              </span>

              <div className="flex gap-2">
                <button
                  onClick={() => handleClick(user.id)}
                  className="px-3 py-1.5 text-sm font-semibold text-blue-600 border border-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition-all"
                >
                  View
                </button>
                <button className="px-3 py-1.5 text-sm font-semibold text-yellow-600 border border-yellow-600 rounded-md hover:bg-yellow-600 hover:text-white transition-all">
                  Edit
                </button>
                <button onClick={()=>handleDelete(user.id)} className="px-3 py-1.5 text-sm font-semibold text-red-600 border border-red-600 rounded-md hover:bg-red-600 hover:text-white transition-all">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-center py-6">No users found 😕</p>
      )}
    </div>
  );
};

export default UserList;
