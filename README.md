# Marvel Characters React App

## 📌 Assignment Overview
This project is part of **Module 11 Lesson 3: Component Lifecycle Events and Forms**. The goal is to create a **React application** that interacts with the Marvel Comics API, fetching and displaying character data dynamically while implementing lifecycle methods with `useEffect` and making HTTP requests using Axios.

## 🎯 Assignment Requirements
### **✅ Task 1: Fetch and Display Characters**
- Create a **CharacterList** functional component.
- Use `useEffect` to fetch character data from the Marvel Comics API.
- Display each character’s **name and thumbnail** in a grid format.

### **✅ Task 2: Implement the Character Detail Feature**
- Create a **CharacterDetail** functional component.
- Implement a **click event handler** to fetch character details when clicked.
- Display the character’s **name, description, and associated comics**.

### **✅ Task 3: Integrate Components & Update UI**
- Integrate `CharacterList` and `CharacterDetail` in the **App component**.
- Ensure that clicking a character updates the `CharacterDetail` component dynamically.

## 🛠️ Technologies Used
- **React** (Functional Components, Hooks, Lifecycle with `useEffect`)
- **Axios** (Fetching API Data)
- **Marvel Comics API**

## 📂 Project Structure
```
/src
  ├── /components
  │   ├── CharacterList.jsx   # Displays Marvel characters
  │   ├── CharacterDetail.jsx  # Shows character details when clicked
  ├── App.jsx   # Main application component
  ├── index.js  # React entry point
  ├── App.css   # Styles
```

## 🔑 Setup & Installation
1. **Clone the repository:**
   ```sh
   git clone https://github.com/ladydanicorn/marvel-react-app.git
   cd marvel-react-app
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Set up your Marvel API keys:**
   - Create a `.env` file in the project root and add:
     ```sh
     REACT_APP_PUBLIC_KEY=YOUR_PUBLIC_KEY (Get from Marvel Developer Portal)
     REACT_APP_HASH=YOUR_GENERATED_MD5_HASH (Create using 1 + PRIVATE_KEY + PUBLIC_KEY)
     ```
   - **Never share your private key!**

4. **Start the development server:**
   ```sh
   npm start
   ```

## 🔗 Marvel API Configuration
- Sign up at [Marvel Developer Portal](https://developer.marvel.com/)
- Generate an API Key and create an **MD5 hash** with:
  ```sh
  1 + PRIVATE_KEY + PUBLIC_KEY
  ```

## 🎯 Expected Outcome
- Successfully fetching and displaying a list of Marvel Comics characters.
- Clicking on a character should display detailed information.
- Smooth integration between `CharacterList` and `CharacterDetail`.


## 📜 License
This project is for educational purposes and follows Marvel's API usage guidelines.

---



