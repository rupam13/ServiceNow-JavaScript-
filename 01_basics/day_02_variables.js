/**
 * ============================================
 * DAY 2: TEACHING COMPUTER TO REMEMBER (VARIABLES)
 * ============================================
 *
 * GOAL: Save things in boxes so you can use them later
 *
 * Think: A box is like a piggy bank. You put money in,
 *        close the lid, and take it out when you need it!
 *
 */

// ============================================
// PART 1: CREATE YOUR FIRST BOX (5 minutes)
// ============================================

// Make a box called "name" with "Alice" inside
var name = 'Alice';

// Now use what's in the box!
gs.info(name);  // Prints: Alice

// PRACTICE 1: Create a box with your name
var myName = 'Bob';
gs.info(myName);

// PRACTICE 2: Create a box with your city
var city = 'New York';
gs.info(city);

// PRACTICE 3: Create a box with your hobby
var hobby = 'Coding';
gs.info(hobby);

// PRACTICE 4: Create a box and use it twice
var color = 'Blue';
gs.info(color);
gs.info(color);

// PRACTICE 5: Create 3 boxes, use them all
var firstName = 'John';
var lastName = 'Smith';
var age = 25;
gs.info(firstName);
gs.info(lastName);
gs.info(age);


// ============================================
// PART 2: PUT BOXES TOGETHER (5 minutes)
// ============================================

// You can combine boxes with +
var first = 'Hello';
var second = 'World';
var message = first + ' ' + second;
gs.info(message);  // Prints: Hello World

// PRACTICE 6: Combine name with greeting
var greet = 'Hi';
var person = 'Sarah';
var fullMessage = greet + ' ' + person;
gs.info(fullMessage);

// PRACTICE 7: Combine first and last name
var fname = 'John';
var lname = 'Doe';
var fullName = fname + ' ' + lname;
gs.info(fullName);

// PRACTICE 8: Combine address parts
var street = '123 Main Street';
var town = 'Boston';
var address = street + ', ' + town;
gs.info(address);

// PRACTICE 9: Make a sentence
var subject = 'I';
var verb = 'love';
var object = 'coding';
var sentence = subject + ' ' + verb + ' ' + object;
gs.info(sentence);

// PRACTICE 10: Make multiple sentences
var sentence1 = 'I' + ' ' + 'am' + ' ' + 'learning';
var sentence2 = 'Code' + ' ' + 'is' + ' ' + 'fun';
gs.info(sentence1);
gs.info(sentence2);


// ============================================
// PART 3: NUMBERS IN BOXES (5 minutes)
// ============================================

// Boxes can hold numbers too!
var age = 25;
gs.info(age);  // Prints: 25

// You can add numbers together
var num1 = 10;
var num2 = 5;
var sum = num1 + num2;
gs.info(sum);  // Prints: 15

// PRACTICE 11: Make a box with your age
var myAge = 30;
gs.info(myAge);

// PRACTICE 12: Add two numbers
var x = 7;
var y = 3;
var result = x + y;
gs.info(result);

// PRACTICE 13: Subtract numbers
var a = 20;
var b = 8;
var difference = a - b;
gs.info(difference);

// PRACTICE 14: Multiply numbers
var c = 4;
var d = 5;
var product = c * d;
gs.info(product);

// PRACTICE 15: Divide numbers
var e = 20;
var f = 4;
var quotient = e / f;
gs.info(quotient);

// PRACTICE 16: Mix text and numbers
var itemName = 'Apple';
var cost = 5;
var message1 = itemName + ' costs $' + cost;
gs.info(message1);

// PRACTICE 17: Price calculation
var price = 100;
var quantity = 3;
var total = price * quantity;
gs.info(total);


// ============================================
// PART 4: TRUE/FALSE BOXES (5 minutes)
// ============================================

// Boxes can hold YES or NO (true or false)
var amIHappy = true;
gs.info(amIHappy);  // Prints: true

var isDayTime = false;
gs.info(isDayTime);  // Prints: false

// PRACTICE 18: Is it raining?
var isRaining = false;
gs.info(isRaining);

// PRACTICE 19: Am I a student?
var amStudent = true;
gs.info(amStudent);

// PRACTICE 20: Is the sky blue?
var isSkyBlue = true;
gs.info(isSkyBlue);

// PRACTICE 21: Multiple true/false boxes
var canICode = true;
var canIFly = false;
var amISmart = true;
gs.info(canICode);
gs.info(canIFly);
gs.info(amISmart);


// ============================================
// PART 5: PUT EVERYTHING TOGETHER (5 minutes)
// ============================================

// Text box
var studentName = 'Emma';

// Number box
var score = 95;

// True/False box
var passed = true;

// Use them all!
gs.info(studentName);
gs.info(score);
gs.info(passed);

// PRACTICE 22: Make 3 boxes about a car
var carName = 'Tesla';
var year = 2023;
var isElectric = true;
gs.info(carName);
gs.info(year);
gs.info(isElectric);

// PRACTICE 23: Make 3 boxes about yourself
var yourName = 'Mike';
var yourAge = 28;
var likeCoding = true;
gs.info(yourName);
gs.info(yourAge);
gs.info(likeCoding);

// PRACTICE 24: Combine and create a profile
var name1 = 'Lisa';
var job = 'Developer';
var years = 5;
var isBusy = false;
gs.info(name1 + ' is a ' + job);
gs.info('Years of experience: ' + years);
gs.info('Is busy: ' + isBusy);

// PRACTICE 25: Make a simple bio
var firstName = 'Alex';
var hometown = 'Seattle';
var favoriteColor = 'Green';
var canSwim = true;
gs.info('Name: ' + firstName);
gs.info('From: ' + hometown);
gs.info('Favorite Color: ' + favoriteColor);
gs.info('Can Swim: ' + canSwim);


// ============================================
// CHALLENGE 1: YOUR PROFILE (Simple!)
// ============================================

// Create 4 boxes about yourself
var name = 'Your Name Here';
var age = 0;  // Put your age
var city = 'Your City';
var likesCode = true;

// Print your profile
gs.info('=== MY PROFILE ===');
gs.info('Name: ' + name);
gs.info('Age: ' + age);
gs.info('City: ' + city);
gs.info('Likes Coding: ' + likesCode);


// ============================================
// CHALLENGE 2: SIMPLE MATH (Math is Easy!)
// ============================================

// Do some math
var apple = 5;
var orange = 3;
var total = apple + orange;

gs.info('Apples: ' + apple);
gs.info('Oranges: ' + orange);
gs.info('Total Fruit: ' + total);


// ============================================
// CHALLENGE 3: SHOPPING LIST (Pretend Shopping!)
// ============================================

var item1 = 'Milk';
var price1 = 3;
var item2 = 'Bread';
var price2 = 2;
var item3 = 'Eggs';
var price3 = 4;

var totalCost = price1 + price2 + price3;

gs.info('Shopping List');
gs.info(item1 + ': $' + price1);
gs.info(item2 + ': $' + price2);
gs.info(item3 + ': $' + price3);
gs.info('Total: $' + totalCost);


// ============================================
// CHALLENGE 4: TEMPERATURE CONVERTER (Real World!)
// ============================================

var celsius = 25;
var fahrenheit = (celsius * 9/5) + 32;

gs.info('Temperature in Celsius: ' + celsius);
gs.info('Temperature in Fahrenheit: ' + fahrenheit);


// ============================================
// CHALLENGE 5: TRIP PLANNER (Fun!)
// ============================================

var destination = 'Paris';
var days = 7;
var costPerDay = 100;
var totalCost = days * costPerDay;

gs.info('Trip to ' + destination);
gs.info('Days: ' + days);
gs.info('Cost per day: $' + costPerDay);
gs.info('Total cost: $' + totalCost);


// ============================================
// BONUS CHALLENGES - DO THESE TOO!
// ============================================

// BONUS 1: Rectangle area
var length = 10;
var width = 5;
var area = length * width;
gs.info('Rectangle - Length: ' + length + ', Width: ' + width + ', Area: ' + area);

// BONUS 2: Circle (pretend)
var radius = 5;
var circumference = 2 * 3.14 * radius;
gs.info('Circle radius: ' + radius + ', Circumference: ' + circumference);

// BONUS 3: Grade check
var studentScore = 85;
var passingScore = 60;
var didPass = studentScore >= passingScore;
gs.info('Score: ' + studentScore + ', Passed: ' + didPass);

// BONUS 4: Book reading
var bookName = 'JavaScript Guide';
var pagesRead = 150;
var totalPages = 300;
var percentDone = (pagesRead / totalPages) * 100;
gs.info('Book: ' + bookName);
gs.info('Pages read: ' + pagesRead + ' out of ' + totalPages);
gs.info('Progress: ' + percentDone + '%');

// BONUS 5: Speed calculator
var distance = 100;
var time = 2;
var speed = distance / time;
gs.info('Distance: ' + distance + ' km');
gs.info('Time: ' + time + ' hours');
gs.info('Speed: ' + speed + ' km/h');


// ============================================
// WHAT YOU LEARNED TODAY
// ============================================

/*
1. var name = 'text' - saves text in a box
2. var age = 25 - saves numbers in a box
3. var isTrue = true - saves yes/no in a box
4. box1 + box2 - combine two boxes
5. number * number - do math with boxes

BOXES ARE SUPER USEFUL! 📦
*/


// ============================================
// NEXT: DAY 3 - ASKING QUESTIONS (IF/ELSE)
// ============================================

/*
Today you saved things in boxes.
Tomorrow you'll ask questions like: "Is this true?"
*/
