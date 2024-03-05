import Courses from "@/components/Courses";


const purchased=[{
    courseId:1,
    Title: "Full-stack",
    Description:"This is a full stack web development course"
},
{
    courseId:2,
    Title:"Web3",
    Description:"This is a complete Web3 course"
},{
    courseId:3,
    Title:"AI",
    Description:"This is a complete AI course"
},{
    courseId:4,
    Title:"AI",
    Description:"This is a complete AI course"
},{
    courseId:5,
    Title:"AI",
    Description:"This is a complete AI course"
},{
    courseId:7,
    Title:"AI",
    Description:"This is a complete AI course"
}]



const MyCourse = () =>{
    if(!purchased.length) 
    return(
        <main className="flex items-center justify-center flex-col">
            <div className="py-40">
                   <h1 className="text-2xl font-semibold"> Sorry, no course found.</h1>
            </div>
        </main>
    );
    return(
        <Courses courses={purchased}/>
    );
}
export default MyCourse;