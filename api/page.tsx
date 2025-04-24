// app/courses/page.tsx
export default async function CoursesPage() {
    const res = await fetch('https://api.example.com/courses');
    const courses = await res.json();

    return (
        <div>
            <h1>Available Courses</h1>
            <ul>
                {courses.map((course: { id: number; title: string, duration: string, description: string }) => (
                    <li key={course.id}>{course.title}</li>
                ))}
            </ul>
        </div>
    );
}
