import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import CharacterList from "./components/CharacterList";
import CharacterDetail from "./components/CharacterDetail";
import Comics from "./components/Comics";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Router>
      <div className="app-container"> 
        <nav>
          <NavLink to="/" end>Home</NavLink>
          <span> | </span>
          <NavLink to="/characters">Browse Characters</NavLink>
          <span> | </span>
          <NavLink to="/comics">Comics</NavLink>
        </nav>

        <main className="content-container"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<CharacterList />} />
            <Route path="/characters/:characterId" element={<CharacterDetail />} />
            <Route path="/comics" element={<Comics />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

