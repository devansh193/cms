'use client';
import React, { useState } from "react";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import Courses from "@/components/Courses";
import Link from "next/link";



export default function CoursesAdmin () {
  const admin = true;
  if(!admin){
    return (
      <main className="flex items-center justify-center flex-col">
            <div className="py-40">
                   <h1 className="text-2xl font-semibold"> Youre not authorized to access this page.</h1>
                   
            </div>
        </main>
    );
  }
  return (
    <main className="flex items-center justify-center flex-col">
            <div className="py-20">
                   <h1 className="text-4xl font-semibold my-5"> Welcome to admin dashboard.</h1>
            </div>
            <div className="flex flex-row justify-between gap-10">
              <Link href="/admin/PublishedCourse">
              <Button variant="secondary">View published courses</Button>
              </Link>
              <Link href="/admin/CreateCourse">
              <Button className="hover:bg-blue-500">Create Courses</Button>
              </Link>
            </div>
        </main>
    
  );
}
