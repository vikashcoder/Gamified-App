# Genetics and Evolution Quiz App

This is a web-based quiz application focusing on Genetics and Evolution topics. It fetches quiz data from a provided API and presents it in an interactive, gamified user interface.

## Overview

This application allows users to:

-   Start a quiz with multiple-choice questions.
-   Answer questions and navigate through the quiz.
-   See a summary of their results, including the total score and time spent.
-   Use a timer and progress bar to add gamification.

## Features

-   **Data Fetching:** Fetches quiz data from the external API: `https://api.jsonserve.com/Uw5CrX`.
-   **Question Display:** Displays questions with multiple-choice options.
-   **Answer Selection:** Allows users to select an answer for each question.
-   **Scoring:** Automatically calculates the total score at the end of the quiz based on correct answers and negative marking.
-   **Results Summary:** Displays a clear results summary after quiz completion, showing the total score and points available.
-   **Gamification:**
    -   **Timer:** A timer is added to add pressure to the quiz.
    -   **Progress Bar:** A progress bar shows the user their progress through the quiz.
-   **Responsive Design:** The user interface adapts to various screen sizes.

## Technologies Used

-   **React:** For building the user interface.
-   **Axios:** For making HTTP requests to the API.
-   **CSS Modules:** For styling components.

## Setup Instructions

1.  **Clone the Repository:**

    ```bash
    git clone [Your-GitHub-Repository-URL]
    cd [Your-Project-Directory]
    ```

2.  **Install Dependencies:**

    ```bash
    npm install
    ```

3.  **Start the Application:**

    ```bash
    npm start
    ```

    This will start the application in your default browser.

4. **Optional:**  For a better developer experience you can use VSCode plugins such as ESLint and Prettier to improve code consistency and readability.

## Project Structure
Use code with caution.
Markdown
quiz-app/
├── node_modules/
├── public/
│ └── ...
├── src/
│ ├── components/
│ │ ├── Question.js
│ │ ├── Question.module.css
│ │ ├── Quiz.js
│ │ ├── Quiz.module.css
│ │ ├── Results.js
│ │ ├── Results.module.css
│ │ ├── Progressbar.js
│ │ ├── Progressbar.module.css
│ │ ├── Timer.js
│ │ ├── Timer.module.css
│ ├── services/
│ │ └── quizService.js
│ ├── App.js
│ ├── App.css
│ ├── index.js
│ └── ...
├── package.json
├── package-lock.json
└── README.md

## Screenshots

-   Main quiz screen: Shows a quiz question with multiple choice options.
    ![Quiz Screen]((https://ibb.co/XfJMCTvy))
-   Results screen: Show quiz result along with score.
    ![Results Screen](https://ibb.co/XfJMCTvy)

## Video Walkthrough
[Video Walkthrough](https://via.placeholder.com/1920x1080?text=Video+Walkthrough+Link)

## Project Overview

The application is created to fulfill the requirements for a gamified quiz application and it uses React framework along with CSS modules for styling. It is easy to use and has core features such as:

*   **Dynamic Question Fetching:** Retrieves quiz questions dynamically via an API endpoint.
*   **User Interaction:** Provides interactive multiple-choice selection, and simple navigation between questions.
*   **Scoring Algorithm:** Calculates quiz scores based on predefined points and negative marking.
*   **Gamification:** Features a timer and progress bar to enhance user engagement.
*   **User Friendly Interface:** Simple layout with clear visual cues.
*   **Responsive Interface:** Works well on different screen sizes.

## Issues
* Currently the negative marking in the application will display negative values if the user selects an incorrect answer.

## Future Enhancements
* Display detailed quiz answers and correct options after quiz is finished.
* Feedback after every answer submission.
* Improve UI and UX to provide a better experience.

## Credits
* All images and content are property of testline.
* This application is made by [Your Name/GitHub Username].

## License
*   [You can include a license here or remove this section]
