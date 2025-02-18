import React, { useState } from "react";
import CharacterList from "./components/CharacterList";
import CharacterDetail from "./components/CharacterDetail";

function App() {
  const [selectedCharacterId, setSelectedCharacterId] = useState(null);

  return (
    <div>
      <h1>Marvel Characters</h1>
      {selectedCharacterId ? (
        <CharacterDetail
          characterId={selectedCharacterId}
          onClose={() => setSelectedCharacterId(null)}
        />
      ) : (
        <CharacterList onSelectCharacter={setSelectedCharacterId} />
      )}
    </div>
  );
}

export default App;
