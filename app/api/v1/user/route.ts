import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/utils/prisma";

export async function POST(req : NextRequest) {
try {
    const { email, name} = await req.json();

    const newTodo = await prisma.user.create({
        data: {
            email,
            name
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