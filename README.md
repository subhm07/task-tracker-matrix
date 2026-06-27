# AI Task Tracker - Futuristic Matrix Interface

A beautiful, futuristic task tracker website with Matrix-inspired visual effects, designed to help you track your daily task completion progress.

## Features

- 🌐 **Matrix Background**: Authentic falling green code effect like in the Matrix movies
- ✅ **Task Management**: Add, complete, and delete daily tasks
- 📊 **Progress Visualization**: Circular progress bar showing completion percentage
- 💾 **Persistent Storage**: Tasks saved in browser's localStorage
- ⚡ **Responsive Design**: Works on mobile and desktop
- 🎯 **Focus Mode**: Matrix effect pauses when tab is hidden to save performance

## Files

- `index.html` - Main HTML structure
- `style.css` - Futuristic Matrix-inspired styling
- `script.js` - Interactive functionality and Matrix animation

## How to Use

### Option 1: Open Directly in Browser (Simplest)
1. Download all three files to the same folder
2. Double-click `index.html` to open it in your default web browser
3. Start adding your daily tasks!

### Option 2: Local Development Server
If you prefer to run a local server:

#### Using Python (if available):
```bash
# Navigate to the folder containing the files
cd task-tracker-matrix

# Start server (Python 3)
python3 -m http.server 8000

# Open browser to http://localhost:8000
```

#### Using Node.js (if available):
```bash
# Install http-server if you don't have it
npm install -g http-server

# Navigate to folder and start server
cd task-tracker-matrix
http-server

# Open browser to http://localhost:8080
```

## Customization

### Change Colors
In `style.css`, modify the `#0f0` (green) values to change the theme:
- `#00ff00` for brighter green
- `#00ffff` for cyan
- `#ff00ff` for magenta
- `#ffff00` for yellow

### Adjust Matrix Speed
In `script.js`, modify the `setInterval(draw, 50)` value:
- Lower number = faster falling code faster effect (e.g., 30)
- Higher number = slower effect (e.g., 80)

### Change Font
In `style.css`, modify the `font-family` to use different monospace fonts:
- `'Consolas', monospace`
- `'Monaco', monospace`
- `'Courier New', monospace` (default)

## Technology Stack

- **HTML5** - Semantic structure
- **CSS3** - Animations, gradients, responsive design
- **Vanilla JavaScript** - No frameworks, pure DOM manipulation
- **Canvas API** - Matrix background effect
- **localStorage** - Client-side data persistence

## Future Enhancements Ideas

- Add categories/tags for tasks
- Implement daily/weekly/monthly views
- Add task priority levels
- Include pomodoro timer integration
- Add dark/light mode toggle
- Implement task reminders/notifications
- Export/import task data
- Add achievement/badge system

## Built With

- Created using Hermes Agent with Nemotron-3-Super model
- Inspired by Matrix movie aesthetics
- Designed for daily productivity tracking

---

**Start tracking your progress today and watch your productivity grow!**