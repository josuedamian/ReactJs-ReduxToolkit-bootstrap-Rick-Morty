import { useEffect, useState } from "react";
import Character from "./components/Character";
import CharacterList from "./components/CharacterList";

const App = () => {
  return (
    <div className="bg-dark text-white">
      <h1 className="text-center display-1 py-4">RICK AND MORTY</h1>
      <CharacterList />
    </div>
  );
};

export default App;
