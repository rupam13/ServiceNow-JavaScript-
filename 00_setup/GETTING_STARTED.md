# Getting Started with ServiceNow JavaScript Practice

## Prerequisites

### 1. Get a ServiceNow Instance
You need access to a ServiceNow instance to run your scripts.

**Option A: Personal Developer Instance (Recommended)**
- Visit: https://developer.servicenow.com
- Sign up for free (if you don't have an account)
- Create a new Personal Developer Instance (PDI)
- This gives you a free, fresh ServiceNow environment for learning

**Option B: Existing ServiceNow Instance**
- Use your company's instance (if available)
- Get admin access or ask your admin for a sandbox

### 2. System Access
Make sure you have access to:
- System Definition > Scripts - Background (for background scripts)
- System Definition > Client Scripts (for client-side scripts)
- System Logs - All (to see your script output)

## How to Execute Your First Script

### Step 1: Access Background Scripts
1. Log into your ServiceNow instance
2. Use the search bar to find: **Scripts - Background**
3. Or navigate: System Definition > Scripts - Background
4. Click **New**

### Step 2: Create Your First Script
1. In the Script field, enter:
```javascript
gs.info('Hello from ServiceNow!');
```

2. Click **Execute**

### Step 3: View Results
1. Navigate to: **System Logs - All**
2. Look for your message in the output
3. You should see: `*** Script: Hello from ServiceNow!`

## Running Lessons in This Repository

### For Each Day's Lesson:

1. **Read** the comments at the top of the file to understand objectives
2. **Study** each CONCEPT section
3. **Follow** the PRACTICE EXERCISES
4. **Complete** the CHALLENGE at the end
5. **Copy** the code to ServiceNow and execute
6. **Verify** output in System Logs - All
7. **Update** your progress log

### Example Flow (Day 1):

```
1. Open: 01_basics/day_01_getting_started.js
2. Read the Learning Objectives
3. Understand CONCEPT 1: Simple Script
4. Try PRACTICE EXERCISE 1
5. Copy your code to ServiceNow
6. Execute and verify in System Logs - All
7. Update 05_practice-logs/daily_log.md
```

## Recommended Setup

### 1. Create a Notes File
- Use your favorite text editor (VS Code, Notepad++, etc.)
- Save notes from each lesson
- Keep a personal glossary of terms

### 2. Keep a Window Layout
- Left: Your text editor with lesson file
- Right: ServiceNow browser window

### 3. Have These Pages Open
- Lesson file (current practice)
- System Logs - All (to see output)
- 04_reference/QUICK_REFERENCE.md (for quick lookups)

## Daily Practice Routine

### Time Allocation (55 minutes total)

| Time | Activity |
|------|----------|
| 0-5 min | Read lesson objectives and concepts |
| 5-20 min | Study examples and understand code |
| 20-35 min | Complete practice exercises |
| 35-45 min | Implement challenge exercises |
| 45-50 min | Test code in ServiceNow instance |
| 50-55 min | Log progress and review notes |

## Troubleshooting

### Script Won't Execute
- Check for syntax errors (red highlights in ServiceNow)
- Make sure you're in the correct script type (Background vs Client)
- Review error message in System Logs - All

### Can't See Output
- Make sure you're using `gs.info()` to output
- Check System Logs - All table
- Verify the execution completed (no error message)

### GlideRecord Errors
- Make sure the table exists in your instance
- Try with a standard table like 'incident' first
- Check table name spelling (case-sensitive)

## Progress Checklist

- [ ] Have PDI access
- [ ] Can log in to ServiceNow
- [ ] Found Scripts - Background
- [ ] Can execute a simple script
- [ ] Can view output in System Logs
- [ ] Have text editor ready
- [ ] Have setup 01_basics folder files

## Next Steps

1. Complete Day 1: Getting Started
2. Complete Day 2: Variables & Data Types
3. Complete Day 3: Operators
4. Then continue sequentially...

## Tips for Success

✅ **Best Practices:**
- Execute your scripts daily
- Test every concept you learn
- Write your own variations of examples
- Keep notes of what confused you
- Review previous lessons weekly

❌ **Common Mistakes:**
- Skipping the practice exercises
- Copy-pasting without understanding
- Not testing code in ServiceNow
- Moving too fast through lessons
- Ignoring error messages

## Resources

| Resource | URL |
|----------|-----|
| ServiceNow Developer | https://developer.servicenow.com |
| ServiceNow Community | https://community.servicenow.com |
| System Logs | System Logs - All table |
| Quick Reference | 04_reference/QUICK_REFERENCE.md |

## Sample Script Template

Use this template for organizing your scripts:

```javascript
/**
 * DAY X: [Topic Name]
 * 
 * Learning Objectives:
 * - Objective 1
 * - Objective 2
 */

// ============================================
// CONCEPT 1: [Concept Name]
// ============================================
// Your code here

// ============================================
// PRACTICE EXERCISE 1: [Exercise Name]
// ============================================
// TODO: What needs to be done
// Solution here

// ============================================
// CHALLENGE: [Challenge Name]
// ============================================
// Extended exercise here
```

## Frequently Asked Questions

**Q: Can I use an older PDI instance?**
A: Yes, but features might be different. ServiceNow updates regularly, so newer versions have more features.

**Q: Do I need admin access?**
A: For a personal developer instance, yes. You are the admin. For a shared instance, ask your admin.

**Q: Can I work offline?**
A: No, you need internet access to reach your ServiceNow instance.

**Q: How long does this program take?**
A: 40 days of 55 minutes daily. Can be flexible - speed up or slow down as needed.

**Q: Can I skip days?**
A: Not recommended. Best practice is daily consistency, even if just 15 minutes.

---

**Ready?** Start with `01_basics/day_01_getting_started.js`!
