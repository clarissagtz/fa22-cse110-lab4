## ANSWERS FOR QUESTIONS PART 2:
1. In line 12, "3" will be printed out. And this is because "i" represents the total number of items in the array, and on the for loop above we went through all the prices in the array given. 
2. In line 13,  "150" is going to be printed because that was the last value given for discounted prices. The last price item in the arrray is 300. And discounted price = 300 (1-0.5) which is indeed 150. this is why 150 is printed thats the last updated value given to that variable. 
3. Line 14 will print out "150", this is similar to question 2. The final value given to the variable finalPrice is 150. Why?, as mentioned before 300 is the last item in te arrray and finalPrice = Math.round(discountedPrice*100) / 100, in this case will be finalPrice = Math.round(150 * 100)/100 which is indeed 150. 
4. This fucntion will return an array with all the discounted elements which are [50, 100, 150]. Discounted is an arrray with all the final prices. 
5. There is an error and the code will not run. We get a Reference error saying that i is not defined. This is because the variable i was declared with the let keyword which means that it can only be accessed within the block it is defined in, in this case i is only available in the for loop not otuside of it.

6. Similar to question 5 we will get an error and this is because discountedPrice was declared inside the for loop with the let keyword, therefore will not be available outside this brackets. And line 13 is outside the for loop. 

7. At line 14, "150" will be printed out. This is beacause finalPrice was declared at the top of this function. If we take a closer look we can see that both, the declaration and the call of finalPrice are within the same {} function. Therefore it works perfectly. 

8. This fucntion will return an array with all the discounted elements which are [50, 100, 150]. Discounted is an arrray with all the final prices. Similar to question 7 *discounted* array is decalred on the top of the function with the let keyword, and the call at the bottom is within the same {} function, therefore it works. 

9. Nothing will be printed out, we will get an error because variable i was declared with the *let* keyword which means that it can only be accessed within the block it is defined in, in this case i is only available inside the for loop not otuside of it. Line 11 is outside the for loop. 

10. At line 12 the number "3" will be printed out. and this is because it corresponds to the prices.length declared on the top of the function. As we see this variable length was never changed, this is why it works. 

11. This function will return the array of discountedPrices [50, 100, 150]. This is because discounted is an array with all the discounted prices. inside the for loop each discounted prices is being "push" (added) to the array. 

12. 
    - A. console.log(student.name)
    - B. console.log(student["Grad Year"]);
    - C. student.greeting();
    - D. console.log(student["Favorite Teacher"].name);
    - E. console.log(student.courseLoad[0]);

13. ARITHMETIC: 
    - A. The output will be a string type "32", since integers map to their exact string representation. 
    - B. The output will be 1, bacause of the "-" subtraction sign is reading both as numbers, and the operation 3-2 is 1.
    - C. The output will be 3 and this is because 3 is counted as a number because it does not have the '' around it. 
    - D. The output will be 3null and this is because we are adding a string type "3" with a null which putting them together makes a 3null. 
    - E. The output will be 4, and this is because true maps to 1 and adding 1 + number 3 is 4. 
    - F. The output here will be 0 and this is because false maps to 0 and zero plus null give us 0. 
    - G. The output will be "3undefined" and this is because '3' is being considered a string because of the ''. Adding it with undefined which will also be considered a string becuase is being added with another string as well will give us 3undefined. 
    - H. The output will be NaN (undefined, and this is because of "-" we are considering subtraction of the number 3 - undefined)
    Undefinded is NaN as a number, this is why we get this output. 

14. COMPARISON:
    - A. The output will be true, and this is because string '2' is cast to the number 2 and 2 is greater than 1. 
    - B. The output will be false, because first char of 12 is 1 so it will take into consideration the number 1, and 1 is not greater than 2. Therefore is false. 
    - C. The output is true. Because the string '2' is cast to the number 2 and 2 is equal to 2. 
    - D. The output is false. Because === checks the equality without type conversion, and because 2 (a number) and '2'(a string) are of different types it will return false.
    - E. False , becuase true becomes 1 and 1 is not equal to 2 therefore is false. 
    - F. True , becuase Boolean(2) is "true", and because we have === (3 equal signs) this means we are checking the equality without type conversion, we are compairng two BOOLEAN values. 

15. Explain the difference between the == and === operators:

"===" is a strict equality operator which checks the equality without type conversion. On the other hand, "==" (two equals signs) is used to compare two variables but ignoring their datatype, so it makes the conversion( for example '2' > 1, makes the conversion of the string '2' to the number 2, and compares 2 > 1 )

16. (look at part2-question16.js)

17. The output (what is going to be returned) is an array with the elements [2, 4, 6]. This is becasue when we call the modifyArray function we passed an array with [1,2,3] and the doSomething function what it does is take a num and multiply it by 2. So in the for loop of the function modifyArray we are pushing to newArr the output of the callback on the element i of the array. Saying for example, the first element in the original array is 1, so when we call the doSomething on it we get  num*2 = 2 so 2 is the first element in newArr, and so on. 

18. (look at part2-question18.js)

19. The output will be 1, followed by a 4, then a 3 and finally a 2. 
