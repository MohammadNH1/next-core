'use server'
import { revalidatePath } from "next/cache";
export const deleteUser = async (userId: number) => {
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
