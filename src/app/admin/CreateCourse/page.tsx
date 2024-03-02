'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'

export default function CreateCourse  ()  {
    const [title, setTitle]= useState("");
    const [description, setDescription] = useState("");
    const [id, setId]=useState("");
    const [image, setImage]= useState("");
  return (
    <main className="flex items-center justify-center flex-col">
      <div className="pt-40 pb-20 mx-auto text-4xl font-bold text-center flex flex-col items-center max-w-3xl m-15">
        Create new course
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-10">
       <Input type="text"
       className="text-black"
       placeholder="Title"
       onChange={(e)=>setTitle(e.target.value)}
       /> 
         <Input type="text"
       className="text-black"
       placeholder="Description"
       onChange={(e)=>setDescription(e.target.value)}
       /> 
         <Input type="text"
       className="text-black"
       placeholder="Id"
       onChange={(e)=>setId(e.target.value)}
       /> 
         <Input type="text"
       className="text-black"
       placeholder="Image-link"
       onChange={(e)=>setImage(e.target.value)}
       /> 
      </div>
      <Button variant="default" className="text-sm font-semibold   hover:bg-blue-500 active:border-gray-950">Create</Button>
      </div>
    </main>
  )
}

