/**
 * ============================================
 * DAY 3: ASKING QUESTIONS (IF/ELSE)
 * ============================================
 *
 * GOAL: Make decisions based on yes or no
 *
 * Think: "IF it's raining, THEN take an umbrella"
 *        "IF not, THEN wear sunscreen"
 *
 */

// ============================================
// PART 1: SIMPLE YES/NO QUESTIONS (5 minutes)
// ============================================

// Is it raining? YES
var isRaining = true;

if (isRaining) {
    gs.info('Take an umbrella');
}

// PRACTICE 1: Is it cold?
var isCold = true;
if (isCold) {
    gs.info('Wear a jacket');
}

// PRACTICE 2: Am I hungry?
var amHungry = true;
if (amHungry) {
    gs.info('Eat food');
}

// PRACTICE 3: Is the store open?
var isOpen = true;
if (isOpen) {
    gs.info('Go shopping');
}

// PRACTICE 4: Do I like ice cream?
var likeIceCream = true;
if (likeIceCream) {
    gs.info('Buy ice cream');
}

// PRACTICE 5: Is it my birthday?
var isBirthday = true;
if (isBirthday) {
    gs.info('Have a party');
}


// ============================================
// PART 2: YES OR NO (IF/ELSE) (5 minutes)
// ============================================

// Is it raining? NO - so do something else
var isRaining = false;

if (isRaining) {
    gs.info('Take umbrella');
} else {
    gs.info('Leave umbrella at home');
}

// PRACTICE 6: Is it hot?
var isHot = false;
if (isHot) {
    gs.info('Drink water');
} else {
    gs.info('Drink hot tea');
}

// PRACTICE 7: Am I late?
var amLate = false;
if (amLate) {
    gs.info('Run to the office');
} else {
    gs.info('Walk slowly');
}

// PRACTICE 8: Do I have money?
var haveMoney = false;
if (haveMoney) {
    gs.info('Buy something');
} else {
    gs.info('Save money');
}

// PRACTICE 9: Is it a weekend?
var isWeekend = true;
if (isWeekend) {
    gs.info('Sleep late');
} else {
    gs.info('Wake up early');
}

// PRACTICE 10: Do I know how to code?
var canCode = true;
if (canCode) {
    gs.info('I am a developer');
} else {
    gs.info('I am still learning');
}


// ============================================
// PART 3: COMPARE NUMBERS (5 minutes)
// ============================================

// Is 10 bigger than 5?
var num1 = 10;
var num2 = 5;

if (num1 > num2) {
    gs.info('10 is bigger than 5');
} else {
    gs.info('10 is not bigger than 5');
}

// PRACTICE 11: Is age >= 18?
var age = 20;
if (age >= 18) {
    gs.info('You can vote');
} else {
    gs.info('You cannot vote yet');
}

// PRACTICE 12: Did I pass the test?
var score = 75;
if (score >= 60) {
    gs.info('I passed');
} else {
    gs.info('I failed');
}

// PRACTICE 13: Is price less than 100?
var price = 50;
if (price < 100) {
    gs.info('This is cheap');
} else {
    gs.info('This is expensive');
}

// PRACTICE 14: Do I have enough apples?
var apples = 8;
if (apples > 5) {
    gs.info('I have enough apples');
} else {
    gs.info('I need more apples');
}

// PRACTICE 15: Is my age exactly 25?
var myAge = 25;
if (myAge == 25) {
    gs.info('You are 25 years old');
} else {
    gs.info('You are not 25 years old');
}


// ============================================
// PART 4: MULTIPLE QUESTIONS (5 minutes)
// ============================================

// Both must be true (AND)
var isSunny = true;
var isWarm = true;

if (isSunny && isWarm) {
    gs.info('Go to the beach');
}

// PRACTICE 16: Do I have money AND time?
var haveMoney = true;
var haveTime = true;
if (haveMoney && haveTime) {
    gs.info('Go on vacation');
}

// PRACTICE 17: Am I hungry AND tired?
var hungry = true;
var tired = true;
if (hungry && tired) {
    gs.info('Eat and sleep');
}

// PRACTICE 18: Is it weekend AND not raining?
var weekend = true;
var notRaining = true;
if (weekend && notRaining) {
    gs.info('Play outside');
}

// PRACTICE 19: Do I have homework AND time?
var haveHomework = true;
var haveTime = true;
if (haveHomework && haveTime) {
    gs.info('Do homework now');
}

// PRACTICE 20: Is the restaurant open AND nearby?
var open = true;
var nearby = true;
if (open && nearby) {
    gs.info('Eat lunch here');
}

// One must be true (OR)
var hasUmbrella = false;
var hasRaincoat = true;

if (hasUmbrella || hasRaincoat) {
    gs.info('You can go out in rain');
}

// PRACTICE 21: Do I like pizza OR burgers?
var likePizza = true;
var likeBurgers = false;
if (likePizza || likeBurgers) {
    gs.info('Let us get food');
}

// PRACTICE 22: Can I swim OR play games?
var canSwim = false;
var canPlayGames = true;
if (canSwim || canPlayGames) {
    gs.info('I can have fun');
}

// PRACTICE 23: Do I speak English OR Hindi?
var speakEnglish = true;
var speakHindi = true;
if (speakEnglish || speakHindi) {
    gs.info('I can communicate');
}


// ============================================
// PART 5: REAL WORLD EXAMPLES (5 minutes)
// ============================================

// Example 1: Can you drive?
var age = 25;
if (age >= 18) {
    gs.info('You can drive a car');
} else {
    gs.info('You are too young to drive');
}

// PRACTICE 24: Movie rating check
var movieRating = 5;
if (movieRating >= 8) {
    gs.info('This is an excellent movie');
} else {
    gs.info('This movie is okay');
}

// PRACTICE 25: Temperature check
var temperature = 35;
if (temperature > 30) {
    gs.info('It is very hot');
} else if (temperature > 20) {
    gs.info('It is warm');
} else {
    gs.info('It is cold');
}

// PRACTICE 26: Grade assignment
var marks = 85;
if (marks >= 90) {
    gs.info('Grade: A');
} else if (marks >= 80) {
    gs.info('Grade: B');
} else if (marks >= 70) {
    gs.info('Grade: C');
} else {
    gs.info('Grade: F');
}

// PRACTICE 27: Age group
var personAge = 15;
if (personAge < 13) {
    gs.info('You are a child');
} else if (personAge < 18) {
    gs.info('You are a teenager');
} else {
    gs.info('You are an adult');
}

// PRACTICE 28: Speed check
var carSpeed = 80;
if (carSpeed > 100) {
    gs.info('Slow down! Too fast!');
} else if (carSpeed > 60) {
    gs.info('Good speed');
} else {
    gs.info('You are going slow');
}


// ============================================
// CHALLENGE 1: TIME OF DAY (What time is it?)
// ============================================

var hour = 14;  // 2 PM

if (hour < 12) {
    gs.info('Good morning!');
} else if (hour < 18) {
    gs.info('Good afternoon!');
} else {
    gs.info('Good evening!');
}


// ============================================
// CHALLENGE 2: SHOPPING DISCOUNT (Save Money!)
// ============================================

var totalBill = 150;
var discount = 0;

if (totalBill > 200) {
    discount = 30;
} else if (totalBill > 100) {
    discount = 20;
} else {
    discount = 5;
}

gs.info('Bill: $' + totalBill);
gs.info('Discount: $' + discount);
gs.info('You save: $' + discount);


// ============================================
// CHALLENGE 3: PASS OR FAIL (Test Results!)
// ============================================

var testScore = 72;
var passingScore = 60;

if (testScore >= passingScore) {
    gs.info('Congratulations! You passed!');
    gs.info('Score: ' + testScore);
} else {
    gs.info('Sorry, you failed.');
    gs.info('Score: ' + testScore);
    gs.info('You needed: ' + passingScore);
}


// ============================================
// CHALLENGE 4: SWIMMING POOL RULES (Fun!)
// ============================================

var temperature = 28;
var isRaining = false;
var haveTicket = true;

if (temperature > 25 && !isRaining && haveTicket) {
    gs.info('Perfect day to swim!');
} else {
    gs.info('Sorry, you cannot swim today');
}


// ============================================
// CHALLENGE 5: LOGIN CHECK (Security!)
// ============================================

var username = 'admin';
var password = '12345';

var correctUsername = 'admin';
var correctPassword = '12345';

if (username == correctUsername && password == correctPassword) {
    gs.info('Login successful!');
    gs.info('Welcome, ' + username);
} else {
    gs.info('Login failed!');
    gs.info('Wrong username or password');
}


// ============================================
// BONUS CHALLENGES - KEEP GOING!
// ============================================

// BONUS 1: Fruit availability
var hasApple = true;
var hasOrange = false;
var hasGrape = true;

if (hasApple) {
    gs.info('I have apples');
}
if (hasOrange) {
    gs.info('I have oranges');
}
if (hasGrape) {
    gs.info('I have grapes');
}

// BONUS 2: Game score
var playerScore = 450;
if (playerScore > 500) {
    gs.info('You are a super player!');
} else if (playerScore > 300) {
    gs.info('You are a good player');
} else if (playerScore > 100) {
    gs.info('You are okay');
} else {
    gs.info('Keep practicing');
}

// BONUS 3: Doctor visit
var temperature = 37;
var hasHeadache = true;

if (temperature > 38 && hasHeadache) {
    gs.info('See a doctor immediately');
} else if (temperature > 37) {
    gs.info('Rest at home');
} else {
    gs.info('You are healthy');
}

// BONUS 4: Job promotion
var yearsWorked = 5;
var performanceRating = 9;

if (yearsWorked > 3 && performanceRating > 8) {
    gs.info('Congratulations! You got promoted!');
    gs.info('New salary: $80,000');
} else {
    gs.info('Keep working hard');
}

// BONUS 5: Savings goal
var currentSavings = 5000;
var savingsGoal = 10000;

if (currentSavings >= savingsGoal) {
    gs.info('Congratulations! Goal reached!');
} else {
    var needed = savingsGoal - currentSavings;
    gs.info('You need $' + needed + ' more');
}


// ============================================
// WHAT YOU LEARNED TODAY
// ============================================

/*
1. if (question) { answer }
2. if (question) { yes answer } else { no answer }
3. > bigger than, < smaller than, == equal to
4. && both must be true (AND)
5. || one must be true (OR)

YOU CAN NOW MAKE DECISIONS! 🎉
*/


// ============================================
// NEXT: DAY 4 - DOING THINGS OVER (LOOPS)
// ============================================

/*
Today you asked questions.
Tomorrow you'll repeat things (loops)!
*/
