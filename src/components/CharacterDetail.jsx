import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const PUBLIC_KEY = "948344935bb9d66fedccb960447d120e";
const HASH = "0984aa80b4bf2fd642683dc7459cde51";
const API_BASE_URL = "https://gateway.marvel.com/v1/public/characters";

const CharacterDetail = () => {
    const { characterId } = useParams(); // Get character ID from URL
    const navigate = useNavigate();
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!characterId) return;

        axios
            .get(`${API_BASE_URL}/${characterId}?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}`)
            .then((response) => {
                setCharacter(response.data.data.results[0]);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching character details:", error);
                setError("Failed to load character details.");
                setLoading(false);
            });
    }, [characterId]);

    if (loading) return <p>Loading details...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="character-detail">
            <button onClick={() => navigate(-1)}>Back</button>
            <h2>{character.name}</h2>
            <img
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt={character.name}
            />
            <p>{character.description || "No description available."}</p>
            <h3>Comics:</h3>
            <ul>
                {character.comics.items.length > 0 ? (
                    character.comics.items.map((comic, index) => (
                        <li key={index}>{comic.name}</li>
                    ))
                ) : (
                    <li>No comics available</li>
                )}
            </ul>
        </div>
    );
};

export default CharacterDetail;
