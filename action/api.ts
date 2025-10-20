'use server'
import { revalidatePath } from "next/cache";
export const deleteUser = async (userId: string) => {
    console.log('userId',userId)
  try {
    const response = await fetch(`http://localhost:3000/api/users/${userId}`, {
      method: "DELETE",
    });
    console.log('response',response)

    if (!response.ok) {
      throw new Error("Error deleting user");
    }
    revalidatePath('/users')

    const result = await response.json();
    return result;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

export const getPost = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  try {
    const response = await fetch("https://dummyjson.com/posts?limit=10", {
      cache: "no-store",
    });
    if (!response.ok) throw new Error("Error fetching ticket!");
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

export const getUsers = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/users",{
      cache:'no-store'
    });
    if (!response.ok) {
      throw new Error("Error fetching users!");
    }
    return await response.json();
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

export const createUsers = async () => {
  const data = {
    id: (Math.random() * 10).toString(),
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

export const getUser = async(userId:string)=>{
    try {
        const response = await fetch(`http://localhost:3000/api/users/${userId}`)
        if(!response.ok) throw new Error('Error fetching user')
            const result = await response.json();
        return result;
    } catch (error) {
        console.log('error',error);
        throw error;
        
    }
}