import { usersData } from "../route";
import { NextRequest, NextResponse } from "next/server";
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string; }> }
) {
  const  {id}  = await context.params;
  const user = usersData.find((user) => user.id === id);
  if (!user)
    return NextResponse.json({ message: "User not found!", status: 404 });

  return NextResponse.json({
    user,
    message: "User found",
    status: 200,
  });
}

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string; }> }
) {
  const  {id}  = await context.params;
  const user = usersData.find((user) => user.id === id);
  if (!user)
    return NextResponse.json({ message: "User not found", status: 404 });

  const data = usersData.filter((user) => user.id !== id);

  return NextResponse.json({ message: "User deleted!", status: 200 });
}

export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string; }> }
) {
  const  {id}  = await context.params;
  const dataToUpdate = await request.json();

  const user = usersData.find((user) => user.id === id);
  if (!user)
    return NextResponse.json({ message: "User not found", status: 404 });

  const updatedUser = usersData.map((user) =>
    user.id === id ? { ...dataToUpdate } : user
  );
  return NextResponse.json({
    message: "User updated!",
    status: 201,
    user: updatedUser,
  });
}
