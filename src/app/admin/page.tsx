'use client';
import React, { useState } from "react";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";


export default function Courses() {
    const [title, setTitle]= useState("");
    const [description, setDescription] = useState("");
    const [id, setId]=useState("");
    const [image, setImage]= useState("");
  return (
    <main className="flex items-center justify-center flex-col">
      <div className="pt-40 pb-20 mx-auto text-4xl font-bold text-center flex flex-col items-center max-w-3xl m-15">
        Admin Dashboard
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-10">
       <Input type="text"
       className="text-black"
       placeholder="Course Name"
       onChange={(e)=>setTitle(e.target.value)}
       /> 
         <Input type="text"
       className="text-black"
       placeholder="Course description"
       onChange={(e)=>setTitle(e.target.value)}
       /> 
         <Input type="text"
       className="text-black"
       placeholder="Id"
       onChange={(e)=>setTitle(e.target.value)}
       /> 
         <Input type="text"
       className="text-black"
       placeholder="Image-link"
       onChange={(e)=>setTitle(e.target.value)}
       /> 
      </div>
      <Button variant="outline" className="text-xl font-semibold border border-gray-950 rounded-full hover:bg-zinc-100 active:border-gray-950">Create</Button>
      </div>
    </main>
  );
}
