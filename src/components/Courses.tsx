'use client';
import { CourseCard } from "./ui/CourseCard";

interface Courses{
    courseId: number,
    Title: string,
    Description: string,
    published?:boolean
}

const Courses = ({courses}:{courses:Courses[]}) =>{
    return(
        <div className="max-w-screen-xl w-full mx-auto py-20 px-6 cursor-pointer grid grid-cols-1 gap-5 md:grid-cols-3 sm:grid-cols-2">
            {courses?.map((course)=>
                    <CourseCard 
                    key={course.courseId}
                    course={course}/>
            )}
        </div>
    )
}
export default Courses;