import React from 'react'

type pageProps = {
    params:{
        id:number;
    }
}

const getUser = async(userId:number)=>{
    try {
        const response = await fetch(`http//:localhost:3000/api/users/${userId}`)
        if(!response.ok) throw new Error('Error fetching user')
            const result = await response.json();
        return result;
    } catch (error) {
        console.log('error',error);
        throw error;
        
    }
}

const page = async({params}:pageProps) => {
   const {id} = await params;
   const data = await getUser(id)

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-16 px-6">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-800">
            👤 User Profile
          </h1>
          <p className="text-gray-500 mt-2">
            Detailed information about this user
          </p>
        </div>

        {/* Profile Info */}
        {data?.user ? (
          <div className="flex flex-col items-center space-y-6">
            {/* Avatar (placeholder) */}
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold">
              {data.user.name?.charAt(0).toUpperCase()}
            </div>

            {/* User Info */}
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-800">
                {data.user.name}
              </h2>
              <p className="text-gray-500 text-sm mt-1">User ID: {id}</p>
            </div>

            {/* Buttons */}
           
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500 text-lg">User not found 😕</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default page
