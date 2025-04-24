
//Back end Node JS Node JS 

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/api/courses' && req.method === 'GET') {
        const courses = [
            { id: 1, title: 'Introduction to Node.js', duration: '1Y', short_descripton: 'Accredited Course', full_decripton: 'tstststs' },
            { id: 2, title: 'Introduction to Vet', duration: '1Y', short_descripton: 'Accredited Course', full_decripton: 'tstststs' },
            { id: 3, title: 'Diploma of Nursing', duration: '1Y', short_descripton: 'Accredited Course', full_decripton: 'tstststs' },
            { id: 4, title: 'Coookery', duration: '1Y', short_descripton: 'Accredited Course', full_decripton: 'tstststs' },
            { id: 5, title: 'Aged Care', duration: '1Y', short_descripton: 'Accredited Course', full_decripton: 'tstststs' },
        ];
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(courses));
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Not Found' }));
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});


//curl http://localhost:3000/api/courses

// Add a second endpoint `/api/courses/:id` to fetch details for a specific course.
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathSegments = parsedUrl.pathname.split('/').filter(segment => segment);

    if (pathSegments.length === 3 && pathSegments[0] === 'api' && pathSegments[1] === 'courses') {
        const courseId = parseInt(pathSegments[2], 10);
        const course = courses.find(c => c.id === courseId);

        if (course) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(course));
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Course not found' }));
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Not Found' }));
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});