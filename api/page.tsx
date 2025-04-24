// app/courses/page.tsx
import React from 'react';
export default async function CoursesPage() {
    const res = await fetch('https://cid-api.com/courses');
    const courses = await res.json();

    return (
        <div>
            <h1>Available Courses</h1>
            <ul>
                {courses.map((course: { id: number; title: string, duration: string, description: string }) => (
                    <li key={course.id}>{course.title}</li>
                    <li>{course.duration}</li>
                    <li>course.description</li>

                ))}
            </ul>
        </div>
    );
}

//view More 
export default function ViewMore({ course, onClick }) {

    return (
        <div className="flex flex-col border p-4 rounded-lg hover:shadow-lg 
       transition-shadow bg-white" >
            <Link href={`/course/${course.id}`}>
                <Button
                    label="View More"
                    className="bg-indigo-500 hover:bg-gray-600 focus-visible:outline- 
          indigo-600 w-32 flex flex-row justify-center items-center"
                />
            </Link>
        </div>
    )
}
