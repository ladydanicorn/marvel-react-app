# Marvel Comics Library React App

## 📌 Assignment Overview
This project is part of **Module 11 Lesson 4: React Routing and Single-Page Applications**. The goal is to create a React application that implements routing functionality using React Router, allowing users to navigate between different pages while interacting with the Marvel Comics API.

## 🎯 Assignment Requirements

### **✅ Task 1: Router Setup & Installation**
- Initialize React project with React Router
- Configure basic routing setup in the main application file

### **✅ Task 2: Component Creation**
- Implement the following components:
  - Home (Welcome page)
  - Browse Characters (Display Marvel characters grid)
  - Character Details (Show detailed character information)
  - Comics (Placeholder for future comic content)

### **✅ Task 3: Advanced Routing Features**
- Create navigation links between pages using `NavLink`
- Implement dynamic routing for character details
- Add error handling with a NotFound component
- Style active navigation links

## 🛠️ Technologies Used
- **React**
- **React Router v6**
- **Axios**
- **Marvel Comics API**

## 📂 Project Structure
```
/src
  ├── /components
  │   ├── Home.jsx           # Welcome page
  │   ├── CharacterList.jsx  # Displays Marvel characters
  │   ├── CharacterDetail.jsx # Shows character details
  │   ├── Comics.jsx         # Comics page
  │   ├── NotFound.jsx       # 404 error page
  ├── App.jsx                # Main routing setup
  ├── main.jsx              # React entry point
  ├── App.css               # Styles
```

## 🔑 Setup & Installation
1. **Clone the repository:**
   ```sh
   git clone [your-repository-url]
   cd [your-project-name]
   ```

2. **Install dependencies:**
   ```sh
   npm install
   npm install react-router-dom
   ```

3. **Set up your Marvel API keys:**
   - Create a `.env` file in the project root and add:
     ```sh
     VITE_PUBLIC_KEY=YOUR_PUBLIC_KEY
     VITE_HASH=YOUR_GENERATED_MD5_HASH
     ```

4. **Start the development server:**
   ```sh
   npm run dev
   ```

## 🔗 Marvel API Configuration
- Sign up at [Marvel Developer Portal](https://developer.marvel.com/)
- Generate an API Key and create an **MD5 hash** with:
  ```sh
  1 + PRIVATE_KEY + PUBLIC_KEY
  ```

## 🎯 Expected Outcome
- Functional navigation between different pages
- Dynamic character detail routes
- Active link highlighting
- Error handling for undefined routes
- Proper integration with Marvel API

## 📝 Routes
- `/` - Home page
- `/characters` - Browse Characters page
- `/characters/:characterId` - Character Details page
- `/comics` - Comics page
- `*` - NotFound page (404 error)

## 📜 License
This project is for educational purposes and follows Marvel's API usage guidelines.

---
```

This updated README now:
- Reflects the routing-focused requirements
- Includes React Router in technologies
- Lists all required routes
- Adds route-specific components to the project structure
- Updates the installation instructions to include React Router
- Specifies the routing-related expected outcomes