import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/utils/prisma";

export async function POST(req : NextRequest) {
try {
    const { title, authorId} = await req.json();

    const newTodo = await prisma.todo.create({
        data: {
            title,
            authorId
        }
    });

   return NextResponse.json(newTodo);
} catch (error) {
  return NextResponse.json({
    status : 500,
    ErrorMessage : error
  })  
}
    
}