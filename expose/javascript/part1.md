## ANSWERS FOR QUESTIONS PART 1:

1. In line 9 is printed: "values added: 20"
2. In line 13 is printed "final result: 20" 
3. In line 9 "20" will be printed out, but taking into consideration the whole program it will not compile becuase "result" is also called outside the {} where it was declared, so this will cause an error saying that "result is not defined", but if line 13 wasn't there then the number 20 will be printed out becuase of line 9.  
4. Nothing will be printed out, we will get an error. This is because the "result" variable was declared inside the if statement with let variable type , which means it can only be accessed within the block it is defined in, and on this case line 13 is outisde this if statemnt. 
5. Nothing is printed , a const variable cannot be changed when declared. and on line 7 we are trying to change it with causes a problem and the problem crashes. 
6. Similar answer to question 5, nothing is printed because the program crashes, it detects a "TypeError: assignment to constant variable". again, declaring a variable with the const prevents it from being reassifned after is assigned for the first time.  