// HAVES:
// Array of questions
// HTML Interface-- 
// Start Button
// Timer (text box)
// Button "View high scores"
// Div to show high scores
// Instructions
// Text box for the question
// Div to hold buttons for answers
// Buttons for the answers
// Feedback text box (right or wrong)
// End screen (Score)
// Variables:
// Time left
// High scores (array)
// Index of current question
// Score
// Things to do:
// Start Quiz: 
// 1 Hide everything unnecessary
// 2 Display the first question
// 3 start timer
// Display Next Question:
// 1 clear question.innerText 
// 2 display question 
// 2a use question index to get question text
// 2b update question.innerText
// 3 display buttons for answers using a for loop
// 3a delete all buttons in the div where buttons go
// 3b make a for loop that iterates over the answers
// 3c Make a button for each answer
// 3d Connect the button to the answer function
// 3e Add the button to the div
// 4 connect the buttons to the scoring function
// Score an Answer:
// 1 if they're wrong subtract time (using the current question index)
// 2 update feedback
// 3 update question index
// 4 if they're done, display score
// Timer Tick:
// 1 Decrement time left
// 2 update display
// 3 if they're out of time, display score
// Show high scores:
// 1 hide unnecessary stuff
// 2 display high scores
// Display end screen:
// 1 hide unnecessary stuff
// 2 display score
// 3 if they made high score list, add them