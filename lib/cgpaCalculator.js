function calculateAverageCgpa(cgpaList) {
  if (!Array.isArray(cgpaList) || cgpaList.length === 0) {
    throw new Error("CGPA list must be a non-empty array");
  }

  const total = cgpaList.reduce((acc, val) => acc + val, 0);
  return total / cgpaList.length;
}

module.exports = { calculateAverageCgpa };
