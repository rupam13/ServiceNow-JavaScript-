/**
 * DAY 2: Variables & Data Types
 *
 * Learning Objectives:
 * - Declare and use variables
 * - Understand different data types
 * - Use meaningful variable names
 * - Recognize type conversions
 */

// ============================================
// CONCEPT 1: Variable Declaration
// ============================================

// Declare and assign a variable
var firstName = 'Chuck';
var age = 30;
var isActive = true;

// Output variables
gs.info('First Name: ' + firstName);
gs.info('Age: ' + age);
gs.info('Is Active: ' + isActive);

// ============================================
// CONCEPT 2: Data Types
// ============================================

// String - text enclosed in quotes
var email = 'chuck@example.com';
var address = '123 Main Street';
gs.info('String type: ' + typeof email);  // "string"

// Number - integers or decimals
var count = 10;
var price = 19.99;
var negative = -5;
gs.info('Number type: ' + typeof count);  // "number"

// Boolean - true or false
var isAvailable = true;
var hasError = false;
gs.info('Boolean type: ' + typeof isAvailable);  // "boolean"

// ============================================
// CONCEPT 3: Variable Naming Best Practices
// ============================================

// Good names - descriptive
var userCount = 5;
var incidentNumber = 'INC0010001';
var lastUpdated = '2024-06-29';
var isResolved = false;

// Bad names - avoid these
// var c = 5;                    // not descriptive
// var case = true;              // reserved word!
// var verylongvariablenamethatisconfusing = 1;

// ServiceNow naming conventions
var incidentGr = null;           // GlideRecord
var userList = [];               // Array
var configObj = {};              // Object
var processActive = true;        // Boolean flag

// ============================================
// CONCEPT 4: Type Checking
// ============================================

var testString = 'Hello';
var testNumber = 42;
var testBool = true;
var testArray = [1, 2, 3];
var testObject = {key: 'value'};

gs.info('typeof "Hello": ' + typeof testString);      // "string"
gs.info('typeof 42: ' + typeof testNumber);           // "number"
gs.info('typeof true: ' + typeof testBool);           // "boolean"
gs.info('typeof []: ' + typeof testArray);            // "object"
gs.info('typeof {}: ' + typeof testObject);           // "object"

// ============================================
// CONCEPT 5: Type Conversion
// ============================================

// String to Number
var stringNum = '123';
var num = parseInt(stringNum);
gs.info('parseInt("123") = ' + num);                  // 123

// String to Float
var stringFloat = '19.99';
var floatNum = parseFloat(stringFloat);
gs.info('parseFloat("19.99") = ' + floatNum);        // 19.99

// Number to String
var numToStr = 123;
var str = numToStr.toString();
gs.info('(123).toString() = ' + str);                // "123"

// Check type after conversion
var originalStr = '456';
var converted = parseInt(originalStr);
gs.info('Original type: ' + typeof originalStr);     // "string"
gs.info('Converted type: ' + typeof converted);      // "number"

// ============================================
// PRACTICE EXERCISE 1: Declare variables
// ============================================
/*
TODO: Create the following variables:
1. A string for a person's name
2. A number for their age
3. A boolean for whether they're employed
4. Output all three with gs.info()
*/

var personName = 'John Doe';
var personAge = 28;
var isEmployed = true;

gs.info('Person Name: ' + personName);
gs.info('Person Age: ' + personAge);
gs.info('Is Employed: ' + isEmployed);

// ============================================
// PRACTICE EXERCISE 2: Type conversions
// ============================================
/*
TODO: You have a string '100' that represents a price
1. Convert it to a number
2. Add 50 to it
3. Output the result
*/

var priceStr = '100';
var priceNum = parseInt(priceStr);
var newPrice = priceNum + 50;
gs.info('Original price string: ' + priceStr);
gs.info('New price (number): ' + newPrice);

// ============================================
// PRACTICE EXERCISE 3: ServiceNow Variables
// ============================================
/*
TODO: Create appropriate variables for an incident:
- incident number (string)
- short description (string)
- priority (number, 1-5)
- is urgent (boolean)
- assigned count (number)

Then output all information with gs.info()
*/

var incNumber = 'INC0000123';
var incDescription = 'Email not working';
var incPriority = 2;
var incUrgent = true;
var incAssignedCount = 3;

gs.info('Incident: ' + incNumber);
gs.info('Description: ' + incDescription);
gs.info('Priority: ' + incPriority);
gs.info('Urgent: ' + incUrgent);
gs.info('Assigned: ' + incAssignedCount);

// ============================================
// CHALLENGE: Create a user profile
// ============================================
/*
Create a complete user profile with:
- User ID (number)
- Username (string)
- Full name (string)
- Email (string)
- Active status (boolean)
- Department (string)
- Years employed (number)

Output each field with a label on a separate line.
*/

var userId = 10042;
var username = 'ctomasi';
var fullName = 'Chuck Tomasi';
var userEmail = 'chuck.tomasi@example.com';
var userActive = true;
var department = 'IT Support';
var yearsEmployed = 5;

gs.info('User ID: ' + userId);
gs.info('Username: ' + username);
gs.info('Full Name: ' + fullName);
gs.info('Email: ' + userEmail);
gs.info('Active: ' + userActive);
gs.info('Department: ' + department);
gs.info('Years Employed: ' + yearsEmployed);

// ============================================
// KEY CONCEPTS SUMMARY
// ============================================
/*
1. Variable Declaration
   - var variableName = value;
   - Choose descriptive names
   - Use camelCase for multi-word names

2. Data Types
   - String: 'text', "text"
   - Number: 42, 3.14, -5
   - Boolean: true, false

3. Type Checking
   - typeof variable returns the type
   - Arrays and Objects show as "object"

4. Type Conversion
   - parseInt() string → number (integer)
   - parseFloat() string → number (decimal)
   - toString() number → string

Next: Move to day_03_operators.js
*/
