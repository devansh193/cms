import { db } from "@/lib/db";
import { error } from "console";
import { NextResponse } from "next/server";

export async function POST(
    req: Request,
    ) {
        const course = await db.course.create({
            data:{
                id,
                title,
                description,
                imageUrl

            }
        });
        return NextResponse.json(course);
    } 
