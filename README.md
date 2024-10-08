
# Full-Screen Exam Platform

This is a React-based full-screen exam platform that features a countdown timer, exit restrictions, and violation notifications. The platform allows users to take exams in a controlled environment with notifications for exit attempts.

## Features

- Full-screen exam mode
- Countdown timer
- Exit restrictions with violation warnings
- Success modal upon exam submission
- Simple and user-friendly interface

## Technologies Used

- React
- CSS
- HTML

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (version 14 or later)
- npm (Node package manager)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Swarnim114/Exam_site.git
   ```

2. **Navigate to the project directory**

   ```bash
   cd Exam_site
   ```

3. **Install the dependencies**

   ```bash
   npm install
   ```

### Running the Application

To start the application, run the following command:

```bash
npm start
```

This will start the development server and open the application in your default web browser at [http://localhost:3000](http://localhost:3000).

### Usage

1. When the application starts, a confirmation modal will appear. Click "Start Exam" to enter the exam mode.
2. The exam will enter full-screen mode, and a countdown timer will be visible.
3. If you try to exit full-screen mode, a violation warning will be displayed.
4. You can submit the exam by clicking the "Submit Exam" button. A success modal will appear upon successful submission.
