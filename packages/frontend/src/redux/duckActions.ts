import { ACTIONS_TYPES } from "./duckActionsTypes";

export interface Duck {
  id: string;
  color: string;
  age: number;
  location: {
    type: "Point";
    coordinates: [number, number];
  };
}

export const addDuck = (payload: Duck) => ({
  type: ACTIONS_TYPES.ADD_DUCK as const,
  payload,
});

export const removeDuck = (payload: string) => ({
  type: ACTIONS_TYPES.REMOVE_DUCK as const,
  payload,
});

export const updateDuck = (payload: Duck) => ({
  type: ACTIONS_TYPES.UPDATE_DUCK as const,
  payload,
});

export const getDuck = (payload: string) => ({
  type: ACTIONS_TYPES.GET_DUCK as const,
  payload,
});

// write a getDucks action creator that returns an action object
//
export const getDucks = (payload: Duck[]) => ({
  type: ACTIONS_TYPES.GET_DUCKS as const,
  payload,
});
