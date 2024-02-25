document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("start-btn");
    const quizContainer = document.getElementById("quiz-container");
    const resultContainer = document.getElementById("result-container");
    const submitButton = document.getElementById("submit-btn");
    const nextButton = document.getElementById("next-btn");
    const restartButton = document.getElementById("restart-btn");
    const thankYouMessage = document.getElementById("thank-you");
    let currentQuestionIndex = 0;
    let score = 0;
    let isQuizCompleted = false;

    const technologyQuestions = [
        {
            question: "What is the time complexity of binary search?",
            answers: ["O(log n)", "O(n)", "O(n log n)", "O(1)"],
            correctAnswer: "O(log n)"
        },
        {
            question: "What data structure is typically used to implement a priority queue?",
            answers: ["Heap", "Array", "Linked List", "Stack"],
            correctAnswer: "Heap"
        },
        {
            question: "What is the purpose of dynamic programming?",
            answers: ["To solve problems by breaking them down into smaller subproblems", "To implement algorithms that change their behavior over time", "To optimize the use of memory in a program", "To design algorithms that use recursion"],
            correctAnswer: "To solve problems by breaking them down into smaller subproblems"
        },
        {
            question: "What is a constructor in Java?",
            answers: ["A method used to initialize an object", "A special type of variable used to store object state", "A way to define the behavior of an object", "A data structure used to store elements in memory"],
            correctAnswer: "A method used to initialize an object"
        },
        {
            question: "What is the difference between an array and a linked list?",
            answers: ["Arrays have constant-time access to elements, while linked lists have constant-time insertion and deletion", "Arrays have constant-time insertion and deletion, while linked lists have constant-time access to elements", "Arrays and linked lists have the same time complexity for all operations", "Arrays and linked lists are essentially the same data structure"],
            correctAnswer: "Arrays have constant-time access to elements, while linked lists have constant-time insertion and deletion"
        },
        // SQL questions
        {
            question: "What does SQL stand for?",
            answers: ["Structured Query Language", "Standard Query Language", "Simple Query Language", "Sequential Query Language"],
            correctAnswer: "Structured Query Language"
        },
        {
            question: "Which SQL keyword is used to retrieve data from a database?",
            answers: ["FETCH", "RETRIEVE", "SELECT", "GET"],
            correctAnswer: "SELECT"
        },
        {
            question: "What SQL clause is used to filter the result set?",
            answers: ["GROUP BY", "ORDER BY", "WHERE", "HAVING"],
            correctAnswer: "WHERE"
        },
        {
            question: "Which SQL statement is used to delete data from a database?",
            answers: ["REMOVE", "DELETE", "ERASE", "DROP"],
            correctAnswer: "DELETE"
        },
        {
            question: "What is the time complexity of bubble sort?",
            answers: ["O(n)", "O(log n)", "O(n log n)", "O(n^2)"],
            correctAnswer: "O(n^2)"
        },
        {
            question: "What is recursion?",
            answers: ["A programming technique where a function calls itself", "A way to define the behavior of an object", "A type of loop used to iterate over elements in a data structure", "A way to store data in memory"],
            correctAnswer: "A programming technique where a function calls itself"
        },
        {
            question: "What is an abstract class in Java?",
            answers: ["A class that cannot be instantiated and may contain abstract methods", "A class that represents a concrete object", "A class that has only static methods", "A class that is defined with the 'abstract' keyword"],
            correctAnswer: "A class that cannot be instantiated and may contain abstract methods"
        },
         // Core Java questions
       {
            question: "What is Java?",
            answers: ["A programming language", "A coffee brand", "An operating system", "A database management system"],
            correctAnswer: "A programming language"
        },
        {
            question: "Which of the following is not a Java keyword?",
            answers: ["static", "integer", "void", "private"],
            correctAnswer: "integer"
        },
        {
            question: "What is the correct syntax for creating an object in Java?",
            answers: ["new Object();", "create Object();", "Object.create();", "Object newObject();"],
            correctAnswer: "new Object();"
        },
        {
            question: "Which of the following is not a valid data type in Java?",
            answers: ["int", "char", "real", "boolean"],
            correctAnswer: "real"
        },
        {
            question: "Which Java keyword is used to define a class?",
            answers: ["class", "define", "struct", "type"],
            correctAnswer: "class"
        },
        {
            question: "What is the parent class of all classes in Java?",
            answers: ["Object", "Main", "Class", "Parent"],
            correctAnswer: "Object"
        },
        {
            question: "What is the correct way to declare a constant in Java?",
            answers: ["final int CONSTANT_VALUE = 10;", "const CONSTANT_VALUE = 10;", "static final CONSTANT_VALUE = 10;", "int CONSTANT_VALUE = 10;"],
            correctAnswer: "final int CONSTANT_VALUE = 10;"
        },
        {
            question: "Which of the following is a valid method declaration in Java?",
            answers: ["void method()", "method(void)", "method()", "void method"],
            correctAnswer: "void method()"
        }
    ];


    // Shuffle the technology questions array
    shuffleArray(technologyQuestions);

    function displayQuestion() {
        const question = technologyQuestions[currentQuestionIndex];
        let output = `
             <div class="question">
                 <p>${question.question}</p>
                 <div class="answers">
         `;
        question.answers.forEach(answer => {
            output += `
                 <label class="answer">
                     <input type="radio" name="answer" value="${answer}">
                     ${answer}
                 </label>
             `;
        });
        output += "</div></div>";
        quizContainer.innerHTML = output;

        submitButton.disabled = false;
        nextButton.style.display = "none";
        resultContainer.textContent = "";
    }

    // Function to start the quiz
    function startQuiz() {
        startButton.style.display = "none"; // Hide start button
        quizContainer.style.display = "block"; // Show quiz container
        displayQuestion(); // Display first question
        submitButton.style.display = "block"; // Show submit button
    }

    // Event listener for the start button
    startButton.addEventListener("click", startQuiz);

    function calculateScore() {
        const selectedOption = document.querySelector("input[name='answer']:checked");
        if (!selectedOption) {
            alert("Please select an answer.");
            return;
        }

        const userAnswer = selectedOption.value;
        const correctAnswer = technologyQuestions[currentQuestionIndex].correctAnswer;

        if (userAnswer === correctAnswer) {
            score++;
            resultContainer.textContent = "Correct!";
        } else {
            resultContainer.textContent = `Incorrect. The correct answer is ${correctAnswer}.`;
        }

        submitButton.disabled = true;
        nextButton.style.display = "block";
    }

    function goToNextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < technologyQuestions.length) {
            displayQuestion();
        } else {
            endQuiz();
        }
    }

    function endQuiz() {
        isQuizCompleted = true;
        quizContainer.innerHTML = "";
        resultContainer.textContent = `Quiz completed. Your final score is ${score} out of ${technologyQuestions.length}.`;
        submitButton.style.display = "none";
        nextButton.style.display = "none";
        restartButton.style.display = "block";
        thankYouMessage.style.display = "block";
    }

    function restartQuiz() {
        isQuizCompleted = false;
        currentQuestionIndex = 0;
        score = 0;
        shuffleArray(technologyQuestions);
        displayQuestion();
        submitButton.style.display = "block";
        restartButton.style.display = "none";
        thankYouMessage.style.display = "none";
        resultContainer.textContent = "";
    }

    // Function to shuffle array elements (Fisher-Yates algorithm)
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    displayQuestion();

    submitButton.addEventListener("click", calculateScore);
    nextButton.addEventListener("click", goToNextQuestion);
    restartButton.addEventListener("click", restartQuiz);
});
