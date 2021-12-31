# Habit Tracker 
#### Video Demo: https://youtu.be/AnN7wWbG04I
#### Description: Habit Tracker web-based app that allows user to track their daily habit

# Tech Stack
- HTML
- CSS (used google fonts import and CSS Flexbox)
- JavaScript (ES6)
- React (React Hooks)

# Setup 
- Clone this repository
- Install the necessary npm modules in the directory
```
npm install
```
- Start the app using this command
```
npm start
```

# Files
All components of the app are stored in `src/components` folder. Below is the description for each component:
#### `Header.jsx`
Contains the title, today's date, and indicate if it's in delete or normal mode
#### `Footer.jsx` 
Contains Add Habit and Delete Habit buttons
#### `Habit.jsx`
Build a card component that corresponds to each habit submitted by user
### `CreateHabitModal.jsx`
Using React Hooks (refs) and Portals, this lets the parent component to control local state changes and allows a child component in a DOM node to be rendered outside the parent DOM component hierarchy, which is what we want when building a dialog box (Source: [dev.to](https://dev.to/viclafouch/build-a-complete-modal-component-with-react-hooks-2fk8)).   
#### `AddHabitForm.jsx`
Contains a HTML form that allows user to add habit, set the frequency, and submit the habit. It's the child component of CreateHabitModal - when the user click on "Add Habit" button, it opens up a dialog box with a form to fill in.
#### `App.jsx`
All components are imported to this `.jsx` file to be rendered, which then will be passed to `index.js` to be executed.

# Future Improvement
- Provide authentication for users, enable them to login and track their habit stats
- UI/UX refinement

# Credits
- CS50 
- Stack Overflow
- [dev.to](https://dev.to/viclafouch/build-a-complete-modal-component-with-react-hooks-2fk8)