import { Button } from "./button"
interface Courses{
    courseId: number,
    Title: string,
    Description: string,
    published?:boolean
}

export const CourseCard = ({course}:{course: Courses;}) =>{
    if(course.published === undefined){
            return(
                <div className="max-w-sm bg-blue-100 border border-gray-900 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                    <div className="p-2 grid items-center">
                        <div className="flex justify-center">
                                <div className="mt-2 mb-2"><h1 className="text-xl font-bold">{course.Title}</h1></div>
                        </div>
                        <p className="text-center font-semibold">{course.Description}</p>

                        <Button variant="outline" className="rounded-full mt-2 border border-gray-900">View Content</Button>
                    </div>
                </div>
            );
        }
    return(
        <div className="max-w-sm bg-blue-100 border border-gray-900 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
            <div className="p-2 grid items-center">
                <div className="flex justify-center">
                        <div className="mt-2 mb-2"><h1 className="text-xl font-bold">{course.Title}</h1></div>
                </div>
                <p className="text-center font-semibold">{course.Description}</p>
                <Button variant="outline" className="rounded-full mt-2 border border-gray-900">Edit</Button>
            </div>
        </div>
    )
}