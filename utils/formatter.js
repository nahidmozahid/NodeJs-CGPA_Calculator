function formatUserInfo(userData, averageCgpa) {
  return `
Name: ${userData.name}
Age: ${userData.age}
University: ${userData.university}
Roll Number: ${userData.roll}
Semesters Completed: ${userData.semester}
Average CGPA: ${averageCgpa.toFixed(2)}
  `;
}

module.exports = { formatUserInfo };
