import { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { Duck, getDucks } from "./redux/duckActions";
import { AddDuckForm } from "./components/AddDuckForm";

interface RootState {
  ducks: Duck[];
}

const App: FC = () => {
  const dispatch = useDispatch();
  const ducks = useSelector((state: RootState) => state.ducks);

  useEffect(() => {
    dispatch(getDucks([])); // You might want to fetch ducks from an API here
  }, [dispatch]);

  return (
    <div className="App">
      {ducks.map((duck) => (
        <div key={duck.id}>
          <p>Color: {duck.color}</p>
          <p>Age: {duck.age}</p>
          <p>Location: {duck.location.coordinates.join(", ")}</p>
        </div>
      ))}
      <AddDuckForm />
    </div>
  );
};

export default App;
