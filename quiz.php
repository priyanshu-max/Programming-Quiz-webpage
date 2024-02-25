<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz Results</title>
</head>
<body>
    <h1>Quiz Results</h1>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $totalQuestions = count($_POST);
        $score = 0;

        // Define the correct answers for each question
        $correctAnswers = array(
            "Question 1" => "Answer 1",
            "Question 2" => "Answer 2",
            "Question 3" => "Answer 1",
            "Question 4" => "Answer 1",
            "Question 5" => "Answer 1",
            "Question 6" => "Answer 1",
            "Question 7" => "Answer 3",
            "Question 8" => "Answer 3",
            "Question 9" => "Answer 2",
            "Question 10" => "Answer 4",
            "Question 11" => "Answer 1",
            "Question 12" => "Answer 1",
            "Question 13" => "Answer 1",
            "Question 14" => "Answer 2",
            "Question 15" => "Answer 1",
            "Question 16" => "Answer 3",
            "Question 17" => "Answer 1",
            "Question 18" => "Answer 1",
            "Question 19" => "Answer 1",
            "Question 20" => "Answer 1",
        );

        // Loop through the submitted answers and compare them with the correct answers
        foreach ($_POST as $question => $selectedAnswer) {
            if (isset($correctAnswers[$question]) && $correctAnswers[$question] == $selectedAnswer) {
                $score++;
            }
        }

        
        $percentage = ($score / $totalQuestions) * 100;
        ?>

        <p>Your score: <?php echo $score; ?> out of <?php echo $totalQuestions; ?></p>
        <p>Percentage: <?php echo $percentage; ?>%</p>

        <?php
    } else {
        echo "<p>No quiz results to display.</p>";
    }
    ?>
</body>
</html>
