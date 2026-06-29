# ServiceNow JavaScript Quick Reference

## Fundamentals Cheat Sheet

### Variables & Data Types
```javascript
// Declaration
var name = 'Chuck';          // String
var count = 10;              // Number
var isActive = true;         // Boolean
var arr = [1, 2, 3];         // Array
var obj = {key: 'value'};    // Object

// Type checking
typeof name;                 // "string"
typeof count;                // "number"
Array.isArray(arr);          // true
```

### Operators
```javascript
// Arithmetic
5 + 3          // 8
5 - 3          // 2
5 * 3          // 15
5 / 3          // 1.67
5 % 3          // 2 (modulo)

// Comparison
a == b         // loose equality
a === b        // strict equality (value AND type)
a != b         // not equal
a > b, a < b   // greater/less than

// Logical
a && b         // AND (both true)
a || b         // OR (either true)
!a             // NOT (reverse)
```

### Strings
```javascript
var str = "Hello";
str.length              // 5
str.toUpperCase()       // "HELLO"
str.toLowerCase()       // "hello"
str.indexOf('l')        // 2
str.substring(0, 3)     // "Hel"
str + ' World'          // "Hello World"

// Special characters
\n                      // newline
\t                      // tab
\\                      // backslash
\'                      // single quote
\"                      // double quote
```

## Control Flow

### If/Else/Switch
```javascript
// If statement
if (condition) {
    // do something
} else if (otherCondition) {
    // do something else
} else {
    // fallback
}

// Switch statement
switch (value) {
    case 1:
        // code
        break;
    case 2:
        // code
        break;
    default:
        // fallback
}

// Ternary operator
var result = condition ? 'yes' : 'no';
```

### Loops
```javascript
// For loop
for (var i = 0; i < 5; i++) {
    gs.info(i);
}

// While loop
while (condition) {
    // code
}

// Do-While
do {
    // code
} while (condition);

// Break and Continue
for (var i = 0; i < 5; i++) {
    if (i == 2) continue;  // skip
    if (i == 4) break;     // exit
}
```

## Functions

```javascript
// Basic function
function sayHello(name) {
    return 'Hello ' + name;
}

// Function with parameters and return
function add(a, b) {
    return a + b;
}

// Anonymous function
var multiply = function(a, b) {
    return a * b;
};

// Call function
sayHello('Chuck');
add(2, 3);

// Function with default behavior
function greet(name) {
    name = name || 'Guest';
    gs.info('Hello ' + name);
}
```

## Arrays

```javascript
var arr = [1, 2, 3];

// Access/modify
arr[0]                  // 1
arr[1] = 5              // modify

// Add/remove
arr.push(4)             // add to end
arr.pop()               // remove from end
arr.shift()             // remove from start
arr.unshift(0)          // add to start

// Search
arr.indexOf(2)          // 1
arr.includes(2)         // true

// Loop
for (var i = 0; i < arr.length; i++) {
    gs.info(arr[i]);
}

// Methods
arr.join(', ')          // "1,2,3"
arr.reverse()           // reverse order
arr.slice(0, 2)         // [1, 2]
arr.splice(1, 1)        // remove 1 element at index 1

// Practical
arr.length              // 3
arr.forEach(function(item) {
    gs.info(item);
});
```

## Objects

```javascript
// Create object
var car = {
    make: 'Toyota',
    model: 'CR-V',
    year: 2018,
    drive: function() {
        gs.info('Driving...');
    }
};

// Access properties
car.make                // 'Toyota'
car['model']            // 'CR-V'

// Set properties
car.color = 'red';
car['wheels'] = 4;

// Methods
car.drive()             // calls function

// Loop through object
for (var key in car) {
    gs.info(key + ': ' + car[key]);
}

// Check property exists
car.hasOwnProperty('make');  // true

// JSON conversion
var str = JSON.stringify(car);
var obj = JSON.parse(str);
```

## ServiceNow Specific

### GlideRecord (Database Queries)
```javascript
// Query records
var gr = new GlideRecord('incident');
gr.addQuery('active', true);
gr.orderBy('number');
gr.setLimit(5);
gr.query();

// Loop through results
while (gr.next()) {
    gs.info(gr.getValue('number'));
    gs.info(gr.getDisplayValue('state'));
}

// Get single record
if (gr.get('965c9e5347c12200e0ef563dbb9a7156')) {
    gs.info(gr.getValue('number'));
}

// Get by field value
if (gr.get('number', 'INC0000059')) {
    gs.info(gr.getValue('sys_id'));
}
```

### Logging
```javascript
// Info level
gs.info('Message');

// Error level
gs.error('Error message');

// Debug (if enabled)
gs.debug('Debug message');
```

### Try/Catch
```javascript
try {
    // code that might error
    var result = riskyFunction();
    gs.info(result);
} catch (e) {
    gs.error('Error: ' + e.message);
} finally {
    // always runs
    gs.info('Done');
}
```

### Classes & Objects
```javascript
var person = Class.create();
person.prototype = {
    initialize: function(fname, lname) {
        this.firstName = fname;
        this.lastName = lname;
    },
    getName: function() {
        return this.firstName + ' ' + this.lastName;
    },
    type: 'person'
};

var me = new person('Chuck', 'Tomasi');
gs.info(me.getName());
```

### REST API
```javascript
(function process(request, response) {
    var queryParams = request.queryParams;
    var tableName = queryParams.tableName;
    
    var gr = new GlideRecord(tableName);
    gr.query();
    
    var result = [];
    while (gr.next()) {
        result.push({
            sys_id: gr.getUniqueValue(),
            display_value: gr.getDisplayValue()
        });
    }
    
    response.setBody(result);
})(request, response);
```

## Truthy & Falsy

### Falsy Values
- `false`
- `0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

### Truthy Values
- Everything else!
- `true`, any number except 0, non-empty strings, objects, arrays

```javascript
if (0) { /* won't run */ }
if (1) { /* will run */ }
if ('') { /* won't run */ }
if ('text') { /* will run */ }
```

## Common Mistakes to Avoid

```javascript
// ❌ Wrong: loose equality
if (name == 'Chuck')   // "Chuck" == 'Chuck' is true

// ✅ Right: strict equality
if (name === 'Chuck')

// ❌ Forget semicolons consistently
var x = 5

// ✅ Be consistent
var x = 5;

// ❌ Variable scope issues
function test() {
    globalVar = 'oops';  // declares global!
}

// ✅ Always declare with var
function test() {
    var localVar = 'safe';
}

// ❌ Modifying loop variable
for (var i = 0; i < 5; i++) {
    i++;  // confusing!
}

// ✅ Don't modify loop variable
for (var i = 0; i < 5; i++) {
    // just use i
}
```

---

**Tip**: Bookmark this page for quick lookups during practice!
