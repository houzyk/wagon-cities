export default function (state, action) {
  if (state === undefined) return [];
  return action.type === 'SET_CITIES' ? action.payload : state;
}
