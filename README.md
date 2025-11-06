# ScholarKit - React Educational Platform

A comprehensive educational platform built with React.js, featuring multiple study tools and productivity features. This is a React conversion of the original HTML/CSS/JavaScript ScholarKit project.

## Features
## Authentication (Firebase)

Public routes:
- `/` Home
- `/pomodoro`, `/quiz`, `/calculator`, `/quotes`, `/facts`

Private routes (require login):
- `/planner`, `/flashcards`, `/todo`, `/notes`

Auth flow:
- Firebase Auth (email/password, Google)
- `AuthProvider` manages `user` and `loading` via `onAuthStateChanged`
- `ProtectedRoute` redirects unauthenticated users to `/login`
- `Navigation` shows Login/Signup when logged out, and Logout + email when logged in

Setup Firebase:
1. Create a Firebase project and a Web app, enable Email/Password provider
2. Add a `.env` file in project root with:
   - `REACT_APP_FIREBASE_API_KEY=...`
   - `REACT_APP_FIREBASE_AUTH_DOMAIN=...`
   - `REACT_APP_FIREBASE_PROJECT_ID=...`
   - `REACT_APP_FIREBASE_STORAGE_BUCKET=...`
   - `REACT_APP_FIREBASE_MESSAGING_SENDER_ID=...`
   - `REACT_APP_FIREBASE_APP_ID=...`
3. Or put values directly in `src/firebase.js` (for local/dev only)
4. Install deps: `npm install`
5. Start app: `npm start`


### 🍅 Pomodoro Timer
- 25-minute work sessions with 5-minute breaks
- Visual timer with start/stop functionality
- Automatic break management
- Clean, focused interface

### 📚 Flashcards
- Create, edit, and delete flashcards
- Interactive show/hide answers
- Persistent storage using localStorage
- Modern card-based design

### 🧠 Quiz System
- Interactive coding quiz with timer
- Score tracking and high score storage
- Penalty system for incorrect answers
- Local storage for persistent scores

### 📝 Notes App
- Create, edit, and delete notes
- Rich text support with line breaks
- Persistent storage
- Clean, organized interface

### 🧮 Calculator
- Full-featured calculator with keyboard support
- Real-time display updates
- Responsive design
- All basic mathematical operations

### 💬 Quote Generator
- Inspirational quotes with random generation
- Beautiful typography and design
- One-click quote refresh

### 🎯 Fun Facts
- Educational facts about "Back to the Future"
- Random fact generation
- Engaging visual design

### ✅ To-Do List
- Add, complete, and delete tasks
- Visual completion indicators
- Persistent storage
- Responsive design

### 📅 Daily Planner
- Hourly time blocks (9 AM - 5 PM)
- Real-time current time indicator
- Add events with titles and descriptions
- Color-coded time blocks (past, present, future)
- Persistent storage

## Technology Stack

- **React 18** - Modern React with hooks
- **CSS3** - Custom styling with gradients and animations
- **JavaScript ES6+** - Modern JavaScript features
- **localStorage** - Client-side data persistence
- **Font Awesome** - Icons and visual elements

## Project Structure

```
src/
├── components/
│   ├── Navigation.js          # Main navigation component
│   ├── Home.js               # Landing page with feature showcase
│   ├── Pomodoro.js           # Pomodoro timer component
│   ├── Flashcards.js         # Flashcard management
│   ├── Quiz.js              # Interactive quiz system
│   ├── Notes.js             # Notes application
│   ├── Calculator.js        # Calculator component
│   ├── QuoteGen.js          # Quote generator
│   ├── FactGen.js           # Fun facts generator
│   ├── ToDoList.js          # To-do list management
│   └── Planner.js           # Daily planner component
├── App.js                   # Main application component
├── App.css                  # Global styles
├── index.js                 # Application entry point
└── index.css               # Base styles
```

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd scholarkit-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Key Features Implemented

### React Hooks Usage
- **useState** - State management for all components
- **useEffect** - Side effects, timers, and localStorage operations
- **Custom hooks** - Reusable logic patterns

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interfaces
- Adaptive typography

### Data Persistence
- localStorage integration for all data
- Automatic save/load functionality
- Data validation and error handling

### User Experience
- Smooth animations and transitions
- Intuitive navigation
- Visual feedback for user actions
- Consistent design language

## Component Details

### Navigation
- Responsive hamburger menu
- Dropdown feature menu
- Smooth transitions
- Mobile-optimized

### Home Page
- Feature showcase with images
- Auto-advancing carousels
- Call-to-action buttons
- Responsive layout

### Study Tools
Each study tool maintains its original functionality while being enhanced with:
- Better state management
- Improved user feedback
- Enhanced visual design
- Mobile responsiveness

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Original ScholarKit design and concept
- React community for excellent documentation
- Font Awesome for beautiful icons
- Google Fonts for typography

---

**Note**: This is a React conversion of the original ScholarKit project, maintaining all original functionality while improving the code structure, maintainability, and user experience.




