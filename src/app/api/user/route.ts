import  {db}  from "@/lib/db";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";
import * as z from 'zod';

//schema validation

const userSchema = z.object({
    username: z.string().min(1,'Username is required').max(100),
    email: z.string().min(2,"Email is required").email('Invalid email'),
    password: z.string().min(1, "Password is required").min(8,'Password must have 8 characters'),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, username, password } = body;
    const existingUser = await db.user.findUnique({
      where: { email: email },
    });
    if (existingUser) {
      return NextResponse.json(
        { user: null, message: "user with the email already exist" },
        { status: 409 }
      );
    }
    const hashedPassword = await hash(password, 10);

    const newUser = await db.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    const { password: newUserPassword, ...rest } = newUser;

    return NextResponse.json(
      { user: rest, message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
