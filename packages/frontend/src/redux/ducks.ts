import { ACTIONS_TYPES } from "./duckActionsTypes";

type Duck = {
  id: string;
  color: string;
  age: number;
  location: {
    type: "Point";
    coordinates: [number, number];
  };
};

type DuckAction =
  | { type: typeof ACTIONS_TYPES.GET_DUCK; payload: Duck }
  | { type: typeof ACTIONS_TYPES.ADD_DUCK; payload: Duck }
  | { type: typeof ACTIONS_TYPES.REMOVE_DUCK; payload: string }
  | { type: typeof ACTIONS_TYPES.UPDATE_DUCK; payload: Duck };

const initialState: Duck[] = [
  {
    id: "1",
    color: "blue",
    age: 2,
    location: {
      type: "Point",
      coordinates: [0, 0],
    },
  },
  {
    id: "2",
    color: "red",
    age: 3,
    location: {
      type: "Point",
      coordinates: [1, 1],
    },
  },
  {
    id: "3",
    color: "yellow",
    age: 4,
    location: {
      type: "Point",
      coordinates: [2, 2],
    },
  },
];

export const ducksReducer = (
  state = initialState,
  action: DuckAction
): Duck[] => {
  switch (action.type) {
    case ACTIONS_TYPES.GET_DUCK:
      return [action.payload];
    case ACTIONS_TYPES.ADD_DUCK:
      return [...state, action.payload];
    case ACTIONS_TYPES.REMOVE_DUCK:
      return state.filter((duck) => duck.id !== action.payload);
    case ACTIONS_TYPES.UPDATE_DUCK:
      return state.map((duck) =>
        duck.id === action.payload.id ? action.payload : duck
      );
    default:
      return state;
  }
};
