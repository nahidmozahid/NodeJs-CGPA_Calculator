const inputHandler = require('./lib/inputHandler');
const cgpaCalculator = require('./lib/cgpaCalculator');
const formatter = require('./utils/formatter');

async function main() {
  try {
    const userData = await inputHandler.getUserData();
    const averageCgpa = cgpaCalculator.calculateAverageCgpa(userData.cgpas);

    console.log("\n----- User Information -----");
    console.log(formatter.formatUserInfo(userData, averageCgpa));
  } catch (err) {
    console.error("Error:", err.message);
  }
}

main();
