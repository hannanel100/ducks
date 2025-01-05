//create a standard app.tsx file
import { FC, useEffect, useState } from "react";
import "./App.css";
import { store } from "./store";
import { Duck } from "./redux/duckActions";

const App: FC = () => {
  const [ducks, setDucks] = useState<Duck[]>([]);
  //getDucks on initial load
  useEffect(() => {
    setDucks(store.getState().ducks);
  }, []);
  return (
    <div className="App">
      {ducks.map((duck) => (
        <div key={duck.id}>
          <p>{duck.color}</p>
          <p>{duck.age}</p>
          <p>{duck.location.coordinates}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
