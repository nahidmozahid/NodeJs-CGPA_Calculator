# CGPA Calculator CLI Application

A simple command-line Node.js application that collects user information including name, age, university, roll number, number of semesters, and CGPA for each semester. It then calculates and displays the average CGPA along with the user’s details.

## Project Structure

cgpa-calculator/
│
├── index.js # Main application entry point
├── lib/
│ ├── inputHandler.js # Handles user input logic
│ └── cgpaCalculator.js # CGPA calculation logic
├── utils/
│ └── formatter.js # Output formatting helpers
├── package.json # Node.js project metadata
├── .gitignore # Files to exclude from git
└── README.md # Project documentation

## Features

- Asks user for personal and academic details
- Supports input of CGPA for multiple semesters
- Calculates average CGPA
- Outputs a clean summary of user info and average CGPA

## Prerequisites

- [Node.js](https://nodejs.org/) (version 12 or above recommended)

## Installation

1. Clone the repository or download the project files:
git clone https://github.com/yourusername/cgpa-calculator.git
cd cgpa-calculator

2. Initialize and install dependencies
   npm install
3. Run the application:
   node index.js
