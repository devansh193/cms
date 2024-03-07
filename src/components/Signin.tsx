"use client";
import axios from "axios";
import { useRef, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Eye, EyeOff } from "lucide-react";
import { signIn } from "@/auth";
import * as z from "zod";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

const FormSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have than 8 characters"),
});

export function Signin() {
  const [isVisible, setIsVisible] = useState(false);

  function toggle() {
    setIsVisible(!isVisible);
  }
  const email = useRef("");
  const password = useRef("");

  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="flex justify-center">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Sign in</CardTitle>
            <CardDescription>Sign in to your account</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  placeholder="Username"
                  onChange={(e) => (email.current = e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">Password</Label>
                <div className="flex border rounded-lg">
                  <Input
                    className="border-0"
                    name="password"
                    type={isVisible ? "text" : "password"}
                    id="password"
                    placeholder="••••••••"
                    onChange={(e) => (password.current = e.target.value)}
                  />
                  <button
                    className="inset-y-0 right-0 flex items-center px-4 text-gray-600"
                    onClick={(e) => {
                      toggle();
                    }}
                  >
                    {isVisible ? <Eye /> : <EyeOff />}
                  </button>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full flex justify-center"
              onClick={async () => {
                const response = await axios.post("http://localhost:3000/api/user",{
                  username,
                  password
                });
                router.push("/")
              }}
            >
              Sign in
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
            }
