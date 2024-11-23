// Array to store student records
let students = [];
let employees = []; // Array to store employee records
let announcements = []; // Array to store announcements
let schedule = []; // Array to store the schedule

// Function to add a student
function addStudent() {
    const name = document.getElementById('student-name').value;
    const dob = document.getElementById('student-dob').value;
    const department = document.getElementById('student-department').value;
    const section = document.getElementById('student-section').value;

    if (!name || !dob || !department || !section) {
        alert("Please fill in all fields.");
        return;
    }

    const studentId = students.length + 1;
    const student = {
        id: studentId,
        name: name,
        dob: dob,
        department: department,
        section: section
    };

    students.push(student);
    alert("Student added successfully!");
    clearInputs();
    viewStudents(); // Automatically refresh the student list after adding
    updateCounts();
}

// Function to update student details
function updateStudent() {
    const studentId = document.getElementById('update-student-id').value;
    const name = document.getElementById('update-student-name').value;
    const dob = document.getElementById('update-student-dob').value;

    if (!studentId || !name || !dob) {
        alert("Please fill in all fields.");
        return;
    }

    const student = students.find(s => s.id === parseInt(studentId));
    if (student) {
        student.name = name;
        student.dob = dob;
        alert("Student updated successfully!");
        clearInputs();
        viewStudents();
    } else {
        alert("Student not found!");
    }
}

// Function to remove a student
function removeStudent() {
    const studentId = document.getElementById('remove-student-id').value;

    if (!studentId) {
        alert("Please provide a student ID.");
        return;
    }

    const studentIndex = students.findIndex(s => s.id === parseInt(studentId));
    if (studentIndex !== -1) {
        students.splice(studentIndex, 1);
        alert("Student removed successfully!");
        clearInputs();
        viewStudents();
        updateCounts();
    } else {
        alert("Student not found!");
    }
}

// Function to view all students
function viewStudents() {
    const studentList = document.getElementById('student-list');
    studentList.innerHTML = ''; // Clear existing list

    if (students.length === 0) {
        studentList.innerHTML = '<p>No students found.</p>';
        return;
    }

    students.forEach(student => {
        const studentDiv = document.createElement('div');
        studentDiv.classList.add('student');

        studentDiv.innerHTML = `
            <p><strong>ID:</strong> ${student.id}</p>
            <p><strong>Name:</strong> ${student.name}</p>
            <p><strong>DOB:</strong> ${student.dob}</p>
            <p><strong>Department:</strong> ${student.department}</p>
            <p><strong>Section:</strong> ${student.section}</p>
        `;

        studentList.appendChild(studentDiv);
    });
}

// Function to update counts for students and employees
function updateCounts() {
    document.getElementById('student-count').textContent = students.length;
    document.getElementById('employee-count').textContent = employees.length; // Assuming you have an employee array
}

// Function to generate calendar (simple view)
function generateCalendar() {
    const calendarView = document.getElementById('calendar-view');
    const currentMonth = new Date().toLocaleString('default', { month: 'long' });

    let calendarHTML = `<h3>${currentMonth} Calendar</h3><div class="calendar-grid">`;

    // Simple 30-day calendar
    for (let i = 1; i <= 30; i++) {
        calendarHTML += `<div class="calendar-day">${i}</div>`;
    }

    calendarHTML += `</div>`;
    calendarView.innerHTML = calendarHTML;
}

// Function to add an announcement
function addAnnouncement() {
    const announcementText = document.getElementById('announcement-input').value;
    if (announcementText) {
        announcements.push(announcementText);
        document.getElementById('announcement-input').value = '';
        displayAnnouncements();
    }
}

// Function to display announcements
function displayAnnouncements() {
    const announcementList = document.getElementById('announcement-list');
    announcementList.innerHTML = '';
    announcements.forEach(announcement => {
        const announcementDiv = document.createElement('div');
        announcementDiv.classList.add('announcement');
        announcementDiv.innerHTML = `<p>${announcement}</p>`;
        announcementList.appendChild(announcementDiv);
    });
}

// Function to add a schedule
function addSchedule() {
    const scheduleText = document.getElementById('schedule-input').value;
    if (scheduleText) {
        schedule.push(scheduleText);
        document.getElementById('schedule-input').value = '';
        displaySchedule();
    }
}

// Function to display the schedule
function displaySchedule() {
    const scheduleList = document.getElementById('schedule-list');
    scheduleList.innerHTML = '';
    schedule.forEach(item => {
        const scheduleDiv = document.createElement('div');
        scheduleDiv.classList.add('schedule');
        scheduleDiv.innerHTML = `<p>${item}</p>`;
        scheduleList.appendChild(scheduleDiv);
    });
}

// Function to clear all input fields
function clearInputs() {
    document.getElementById('student-name').value = '';
    document.getElementById('student-dob').value = '';
    document.getElementById('student-department').value = '';
    document.getElementById('student-section').value = '';
    document.getElementById('update-student-id').value = '';
    document.getElementById('update-student-name').value = '';
    document.getElementById('update-student-dob').value = '';
    document.getElementById('remove-student-id').value = '';
}
