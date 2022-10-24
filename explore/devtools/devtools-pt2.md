## ANSWERS FOR DEVTOOLS PT2:

1. The bug was that the program was taking the inputs from the user as strings. Therefore the two numbers enter where of type string, so when they were added in the function CalculateSum the varibale *result* added two strings therefore it print out the two numbers one next two each other because both were of type string. 

2. To fix it I would cast both num1 and num2 to convert both values to a number, so when they are added they are consider numbers instead of strings. Using the number convertion of Number(value) function which explicitly convert a value to a number. 
I attached a ScreenShot with my fix solution. 
