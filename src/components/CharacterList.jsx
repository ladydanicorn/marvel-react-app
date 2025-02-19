import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PUBLIC_KEY = "948344935bb9d66fedccb960447d120e";
const HASH = "4f93b252954df016d20c5552cdc10391";
const API_URL = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}`;

const CharacterList = ({ onSelectCharacter }) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch Marvel characters when the component mounts
  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        console.log("API Response:", response.data);
        setCharacters(response.data.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching characters:", error);
        setError("Failed to load characters.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading characters...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="character-container">
      {characters.map((character) => (
        <div
          key={character.id}
          className="character"
          onClick={() => onSelectCharacter(character.id)}
          style={{ cursor: "pointer" }}
        >
          <h3>{character.name}</h3>
          <img
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
          />
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
