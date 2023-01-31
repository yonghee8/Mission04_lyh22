
$(document).ready(function () {
    // Attach an event handler to the click event of the "Calculate Grade" button
    $("#calculate-btn").click(function () {
        // Get the values of the input fields
        var assignments = $("#assignments").val();
        var project = $("#project").val();
        var quizzes = $("#quizzes").val();
        var midterm = $("#midterm").val();
        var final = $("#final").val();
        var intex = $("#intex").val();

        // Calculate the final percentage based on the weights
        var finalPercentage = (assignments * 0.5) + (project * 0.1) + (quizzes * 0.1) + (midterm * 0.1) + (final * 0.1) + (intex * 0.1);

        // Determine the letter grade based on the final percentage
        var letterGrade;
        if (finalPercentage >= 94) {
            letterGrade = "A";
        } else if (finalPercentage >= 90) {
            letterGrade = "A-";
        } else if (finalPercentage >= 87) {
            letterGrade = "B+";
        } else if (finalPercentage >= 84) {
            letterGrade = "B";
        } else if (finalPercentage >= 80) {
            letterGrade = "B-";
        } else if (finalPercentage >= 77) {
            letterGrade = "C+";
        } else if (finalPercentage >= 74) {
            letterGrade = "C";
        } else if (finalPercentage >= 70) {
            letterGrade = "C-";
        } else if (finalPercentage >= 67) {
            letterGrade = "D+";
        } else if (finalPercentage >= 64) {
            letterGrade = "D";
        } else if (finalPercentage >= 60) {
            letterGrade = "D-";
        } else {
            letterGrade = "E";
        }

        // Update the text of the "letter-grade" output field with the calculated letter grade
        $("#letter-grade").text("Grade: " + letterGrade);
    });
});