const readline = require('readline');

function askQuestion(rl, question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => resolve(answer));
  });
}

async function getUserData() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const userData = {};
  userData.name = await askQuestion(rl, "Enter your name: ");
  userData.age = await askQuestion(rl, "Enter your age: ");
  userData.university = await askQuestion(rl, "Enter your university name: ");
  userData.roll = await askQuestion(rl, "Enter your roll number: ");

  userData.semester = parseInt(await askQuestion(rl, "Enter number of semesters: "), 10);

  userData.cgpas = [];
  for (let i = 1; i <= userData.semester; i++) {
    const cgpa = parseFloat(await askQuestion(rl, `Enter CGPA for semester ${i}: `));
    userData.cgpas.push(cgpa);
  }

  rl.close();
  return userData;
}

module.exports = { getUserData };
