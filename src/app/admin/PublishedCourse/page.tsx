import Courses from '@/components/Courses';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

import React from 'react'

const published=[{
    courseId:1,
    Title: "Full-stack",
    Description:"This is a full stack web development course",
    published: true
  },
  {
    courseId:2,
    Title:"Web3",
    Description:"This is a complete Web3 course",
    published: true
  },{
    courseId:3,
    Title:"AI",
    Description:"This is a complete AI course",
    published: true
  },{
    courseId:4,
    Title:"AI",
    Description:"This is a complete AI course",
    published: true
  },{
    courseId:5,
    Title:"AI",
    Description:"This is a complete AI course",
    published: true
  },{
    courseId:6,
    Title:"AI",
    Description:"This is a complete AI course",
    published: true
  }]

export default function PublishedContent() {
  return (
    <main className=' flex flex-col items-center justify-center'>
           <Courses courses={published}/>
           <Link href='/admin/CreateCourse'>
           <Button variant="secondary">Create new course</Button>
           </Link>
    </main>
  );
}
