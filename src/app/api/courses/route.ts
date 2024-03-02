import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:Request) {
    const {
        
        title,
        description,
        imageUrl,
        
    } = await req.json();
  
    await db.course.create({
        data:{
            title,
            imageUrl,
            description,
            
        },
    });
    return NextResponse.json({},{status: 200,},);
}