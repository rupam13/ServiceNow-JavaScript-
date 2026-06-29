/**
 * DAY 1: Getting Started with ServiceNow JavaScript
 *
 * Learning Objectives:
 * - Write your first ServiceNow script
 * - Understand server-side vs client-side scripts
 * - Use gs.info() for logging
 * - Add basic comments
 */

// ============================================
// CONCEPT 1: Simple Script
// ============================================

// This is a single-line comment
gs.info('Hello, world!');

/*
This is a multi-line comment
You can write multiple lines here
Useful for documenting complex logic
*/

// ============================================
// CONCEPT 2: Working with gs.info()
// ============================================

// gs.info() outputs informational messages
gs.info('This is an info message');
gs.info('You can output any text');

// Concatenate strings
var message = 'Welcome to ServiceNow JavaScript';
gs.info(message);

// Combine strings and variables
var name = 'Chuck';
gs.info('Hello, ' + name);

// ============================================
// CONCEPT 3: Output formatting
// ============================================

// Output multiple lines
gs.info('Line 1');
gs.info('Line 2');
gs.info('Line 3');

// Use newline character for multi-line output
gs.info('First line\nSecond line\nThird line');

// ============================================
// PRACTICE EXERCISE 1: Create a greeting
// ============================================
// TODO: Modify the variables below with your own information
var firstName = 'Your Name';
var lastName = 'Your Surname';
var role = 'ServiceNow Developer';

// TODO: Output a greeting using these variables
// gs.info('...');

// ============================================
// PRACTICE EXERCISE 2: Create an informational message
// ============================================
// TODO: Create variables for:
// - systemName = 'ServiceNow'
// - version = '2024.03'
// - environment = 'Development'
// Then output: "systemName version on environment"

// ============================================
// RUNNING YOUR SCRIPT
// ============================================
/*
Steps to run this script in ServiceNow:
1. Log into your ServiceNow instance (PDI)
2. Navigate to: System Definition > Scripts - Background
3. Click "New" to create a new script
4. Copy and paste this code into the Script field
5. Click "Execute"
6. Check the "System Logs - All" table to see output

Your scripts will appear as:
*** Script: Hello, world!
*** Script: This is an info message
etc.
*/

// ============================================
// SOLUTION EXAMPLES
// ============================================

// Solution 1: Greeting
var firstName_sol = 'Chuck';
var lastName_sol = 'Tomasi';
var role_sol = 'ServiceNow Developer';
gs.info('Hello, ' + firstName_sol + ' ' + lastName_sol + '! You are a ' + role_sol);

// Solution 2: System Information
var systemName_sol = 'ServiceNow';
var version_sol = '2024.03';
var environment_sol = 'Development';
gs.info(systemName_sol + ' version ' + version_sol + ' on ' + environment_sol);

// ============================================
// CHALLENGE: Create a log with multiple info items
// ============================================
/*
Create a script that outputs:
1. Your name
2. Today's date (as a string)
3. The script's purpose
4. A motivational message

Example output:
Name: Chuck Tomasi
Date: 2024-06-29
Purpose: Learning ServiceNow JavaScript
Motivation: Every expert started as a beginner!
*/

// Your challenge code here:
// ...

// ============================================
// KEY CONCEPTS SUMMARY
// ============================================
/*
1. Comments
   - Single line: // comment
   - Multi-line: /* comment */

2. gs.info()
   - Logs informational messages
   - Output appears in System Logs - All
   - Can concatenate with + operator

3. Variables
   - Stored using 'var' keyword
   - Can hold text (strings) or numbers
   - Useful for organizing information

Next: Move to day_02_statements_syntax.js
*/
