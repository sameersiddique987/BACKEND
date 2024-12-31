import { NextResponse } from "next/server";
import { todos } from "../todo";


export async function GET(request, { params }) {
  const { id } = await params;
  const index = todos.findIndex((item) => item.id === +id);
  
  if (index === -1)
    return NextResponse.json({ message: "No todo found" }, { status: 404 });

  return NextResponse.json({
    todo: todos[index],
  });
}

// PUT: Edit 
export async function PUT(request, { params }) {
  const { id } = await params;
  const index = todos.findIndex((item) => item.id === +id);

  if (index === -1)
    return NextResponse.json({ message: "No todo found" }, { status: 404 });

  const data = await request.json(); // Expect updated data from the request body
  todos[index] = { ...todos[index], ...data };

  return NextResponse.json({
    message: "Todo updated successfully",
    todo: todos[index],
  });
}

// DELETE: Remove 
export async function DELETE(request, { params }) {
  const { id } = await params;
  const index = todos.findIndex((item) => item.id === +id);

  if (index === -1)
    return NextResponse.json({ message: "No todo found" }, { status: 404 });

  const deletedTodo = todos.splice(index, 1);

  return NextResponse.json({
    message: "Todo deleted successfully",
    deletedTodo: deletedTodo[0],
  });
}
