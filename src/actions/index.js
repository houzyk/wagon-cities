/* eslint-disable import/prefer-default-export */
// faking db
import cities from "../../data/cities";

export function setCities() {
  return {
    type: 'SET_CITIES',
    payload: cities
  };
}
